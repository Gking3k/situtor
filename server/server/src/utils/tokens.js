import { createHash, randomBytes } from 'node:crypto';

/** Create a cryptographically random, URL-safe, 256-bit opaque token. */
export function createOpaqueToken() {
  return randomBytes(32).toString('hex');
}

/** Store only a SHA-256 digest of a token in the database. */
export function hashOpaqueToken(token) {
  if (typeof token !== 'string' || !/^[a-f0-9]{64}$/.test(token)) {
    throw new TypeError('Token must be a 64-character hexadecimal string.');
  }
  return createHash('sha256').update(token, 'utf8').digest('hex');
}
