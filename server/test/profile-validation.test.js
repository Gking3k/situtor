import test from 'node:test';
import assert from 'node:assert/strict';
import { validateProfileUpdate } from '../src/utils/profile-validation.js';

test('profile update trims and normalizes a valid full name', () => {
  assert.deepEqual(validateProfileUpdate({ fullName: '  Ada   Lovelace  ' }), {
    value: { fullName: 'Ada Lovelace' },
  });
});

test('profile update rejects missing or short names', () => {
  assert.match(validateProfileUpdate({ fullName: 'A' }).error, /between 2 and 100/);
  assert.ok(validateProfileUpdate({}).error);
});

test('profile update rejects names over 100 characters', () => {
  assert.ok(validateProfileUpdate({ fullName: 'A'.repeat(101) }).error);
});

test('profile update rejects control characters', () => {
  assert.ok(validateProfileUpdate({ fullName: 'Ada\u0000Lovelace' }).error);
});
