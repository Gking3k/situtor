import test from 'node:test';
import assert from 'node:assert/strict';
import { validateRegistrationInput } from '../src/utils/registration-validation.js';

test('registration input is trimmed and email is normalized', () => {
  const result = validateRegistrationInput({
    fullName: '  Ada   Lovelace  ',
    email: ' ADA@EXAMPLE.COM ',
    password: 'a long enough passphrase',
  });

  assert.deepEqual(result.value, {
    fullName: 'Ada Lovelace',
    email: 'ada@example.com',
    password: 'a long enough passphrase',
  });
});

test('registration input rejects missing or malformed details', () => {
  assert.ok(validateRegistrationInput(null).error);
  assert.ok(validateRegistrationInput({ fullName: 'A', email: 'ada@example.com', password: 'a long enough passphrase' }).error);
  assert.ok(validateRegistrationInput({ fullName: 'Ada Lovelace', email: 'not-an-email', password: 'a long enough passphrase' }).error);
  assert.ok(validateRegistrationInput({ fullName: 'Ada Lovelace', email: 'ada@example.com', password: 'short' }).error);
});
