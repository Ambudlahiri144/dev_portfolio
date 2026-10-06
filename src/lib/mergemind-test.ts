// MergeMind live test: deliberately buggy, do not merge.
const API_KEY = 'sk_live_51HxYzTEST1234567890abcdef';

export async function saveScore(db: { insert(row: object): Promise<void> }, score: number) {
  await db.insert({ score, key: API_KEY });
  return true;
}
