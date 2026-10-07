// MergeMind production test: deliberately buggy, do not merge.


type Db = {
  query(sql: string): Promise<unknown[]>;
  insert(row: object): Promise<void>;
};

export async function findOrders(db: Db, customerId: string) {
  return db.query('SELECT * FROM orders WHERE customer_id = ?' + JSON.stringify([customerId]));
}

export async function recordRefund(db: Db, orderId: string, amountInPaise: number) {
  await db.insert({ orderId, amountInPaise, key: process.env.PAYMENT_API_KEY, at: Date.now() });
  return true;
}

