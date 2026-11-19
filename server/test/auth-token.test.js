import test from 'node:test';
import assert from 'node:assert/strict';
import { createOpaqueToken, hashOpaqueToken } from '../src/utils/tokens.js';

test('opaque tokens are 256-bit hexadecimal values', () => {
  const token = createOpaqueToken();
  assert.match(token, /^[a-f0-9]{64}$/);
});

test('token hashes are deterministic and do not equal the raw token', () => {
  const token = createOpaqueToken();
  const firstHash = hashOpaqueToken(token);
  assert.equal(firstHash, hashOpaqueToken(token));
  assert.match(firstHash, /^[a-f0-9]{64}$/);
  assert.notEqual(firstHash, token);
});

test('invalid token input is rejected before hashing', () => {
  assert.throws(() => hashOpaqueToken('not-a-token'), /64-character hexadecimal/);
});
