import test from 'node:test';
import assert from 'node:assert/strict';
import { isRegistrationAllowed } from '../src/utils/registration-access.js';

test('closed production registration rejects all email addresses', () => {
  assert.equal(isRegistrationAllowed({ mode: 'closed', email: 'student@example.com' }), false);
});

test('allowlist permits the configured test address case-insensitively', () => {
  assert.equal(isRegistrationAllowed({
    mode: 'allowlist',
    email: 'Test.Owner@Example.com',
    allowedEmails: ['test.owner@example.com'],
  }), true);
});

test('allowlist rejects addresses not explicitly listed', () => {
  assert.equal(isRegistrationAllowed({
    mode: 'allowlist',
    email: 'student@example.com',
    allowedEmails: ['test.owner@example.com'],
  }), false);
});

test('public registration mode permits valid submitted addresses', () => {
  assert.equal(isRegistrationAllowed({ mode: 'enabled', email: 'student@example.com' }), true);
});

test('unknown registration modes fail closed', () => {
  assert.equal(isRegistrationAllowed({ mode: 'unexpected', email: 'student@example.com' }), false);
});
