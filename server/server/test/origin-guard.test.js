import test from 'node:test';
import assert from 'node:assert/strict';
import { createOriginGuard } from '../src/middleware/origin-guard.js';

function runGuard(guard, { method = 'POST', headers = {} } = {}) {
  let nextCalled = false;
  let statusCode = 200;
  let responseBody;
  const response = {
    status(code) {
      statusCode = code;
      return this;
    },
    json(body) {
      responseBody = body;
      return this;
    },
  };
  guard({ method, headers }, response, () => { nextCalled = true; });
  return { nextCalled, statusCode, responseBody };
}

const guard = createOriginGuard(['http://localhost:5173', 'https://situtor.example']);

test('allows state-changing requests from an explicitly allowed origin', () => {
  const result = runGuard(guard, { headers: { origin: 'http://localhost:5173' } });
  assert.equal(result.nextCalled, true);
  assert.equal(result.statusCode, 200);
});

test('rejects state-changing requests from an unapproved origin', () => {
  const result = runGuard(guard, { headers: { origin: 'https://attacker.example' } });
  assert.equal(result.nextCalled, false);
  assert.equal(result.statusCode, 403);
  assert.deepEqual(result.responseBody, { error: 'Origin is not allowed.' });
});

test('rejects cross-site state-changing requests even when Origin is absent', () => {
  const result = runGuard(guard, { headers: { 'sec-fetch-site': 'cross-site' } });
  assert.equal(result.nextCalled, false);
  assert.equal(result.statusCode, 403);
});

test('allows command-line state-changing requests without browser headers', () => {
  const result = runGuard(guard, { headers: {} });
  assert.equal(result.nextCalled, true);
});

test('does not apply the state-changing guard to safe GET requests', () => {
  const result = runGuard(guard, { method: 'GET', headers: { origin: 'https://attacker.example' } });
  assert.equal(result.nextCalled, true);
});
