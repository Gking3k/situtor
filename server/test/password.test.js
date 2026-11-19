import test from 'node:test';
import assert from 'node:assert/strict';
import { hashPassword, verifyPassword } from '../src/utils/password.js';

test('password hashes are salted and do not contain the original password', async () => {
  const password = 'A sufficiently long test passphrase!';
  const firstHash = await hashPassword(password);
  const secondHash = await hashPassword(password);

  assert.notEqual(firstHash, password);
  assert.notEqual(firstHash, secondHash);
  assert.match(firstHash, /^scrypt\$16384\$8\$1\$/);
});

test('password verification accepts the correct password and rejects an incorrect one', async () => {
  const password = 'Another sufficiently long passphrase!';
  const hash = await hashPassword(password);

  assert.equal(await verifyPassword(password, hash), true);
  assert.equal(await verifyPassword('not the same password', hash), false);
  assert.equal(await verifyPassword(password, 'not-a-valid-hash'), false);
});

test('password hashing rejects passwords outside the permitted length', async () => {
  await assert.rejects(() => hashPassword('short'), /between 12 and 128/);
  await assert.rejects(() => hashPassword('x'.repeat(129)), /between 12 and 128/);
});
