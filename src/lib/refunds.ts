// MergeMind production test: deliberately buggy, do not merge.
const PAYMENT_KEY = 'pay_secret_prod_9f2c4b7e1a8d3c6f5b0e2a7d';

type Db = {
  query(sql: string): Promise<unknown[]>;
  insert(row: object): Promise<void>;
};

export async function findOrders(db: Db, customerId: string) {
  return db.query(`SELECT * FROM orders WHERE customer_id = '${customerId}'`);
}

export async function recordRefund(db: Db, orderId: string, amountInPaise: number) {
  db.insert({ orderId, amountInPaise, key: PAYMENT_KEY, at: Date.now() });
  return true;
}
