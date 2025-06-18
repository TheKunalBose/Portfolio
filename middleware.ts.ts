import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return new Response("🚧 Site is under maintenance. Please check back soon.", {
    status: 503,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
