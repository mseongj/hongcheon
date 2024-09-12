import { sql } from '@vercel/postgres';

export async function getPosts() {
  const { rows } = await sql`SELECT * FROM posts LIMIT 10`;
  return rows;
}
