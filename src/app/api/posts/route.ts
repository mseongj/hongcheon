import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
      const { rows } = await sql`SELECT * FROM posts`;
      return NextResponse.json({ posts: rows }, { status: 200 });
    } catch (error) {
      if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      // 에러가 Error 인스턴스가 아닌 경우
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
  