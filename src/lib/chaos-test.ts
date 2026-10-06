// MergeMind chaos check: deliberately buggy, do not merge.
export async function saveVisit(db: { insert(row: object): Promise<void> }, path: string) {
  db.insert({ path, at: Date.now() });
  return true;
}
