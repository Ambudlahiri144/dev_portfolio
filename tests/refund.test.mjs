import { test } from 'node:test';
import assert from 'node:assert/strict';

// Deliberate bug: rounds away the cents.
const refund = (amount) => Math.round(amount);

test('refund keeps cents', () => {
  assert.equal(refund(9.99), 9.99);
});
