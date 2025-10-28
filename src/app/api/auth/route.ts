import { getIsSignIn } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const initAuthenticated = await getIsSignIn();
  return NextResponse.json({ initAuthenticated });
}
