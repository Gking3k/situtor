import test from 'node:test';
import assert from 'node:assert/strict';
import { validatePasswordReset, validatePasswordResetRequest } from '../src/utils/password-reset-validation.js';

const validToken = 'a'.repeat(64);

test('password-reset request normalizes a valid email address', () => {
  assert.deepEqual(validatePasswordResetRequest({ email: '  Student@Example.com ' }), {
    value: { email: 'student@example.com' },
  });
});

test('password-reset request rejects malformed email addresses', () => {
  assert.match(validatePasswordResetRequest({ email: 'not-an-email' }).error, /valid email/);
});

test('password-reset input accepts a valid token and password', () => {
  assert.deepEqual(validatePasswordReset({ token: validToken, password: 'a sufficiently long password' }), {
    value: { token: validToken, password: 'a sufficiently long password' },
  });
});

test('password-reset input rejects malformed tokens', () => {
  assert.match(validatePasswordReset({ token: 'bad-token', password: 'a sufficiently long password' }).error, /invalid or has expired/);
});

test('password-reset input rejects passwords outside the permitted length', () => {
  assert.match(validatePasswordReset({ token: validToken, password: 'short' }).error, /between 12 and 128/);
});
