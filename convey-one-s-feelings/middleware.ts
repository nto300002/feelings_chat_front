import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // ログイン状態の確認（実際の実装ではセッションやトークンの検証が必要）
  const isAuthenticated = request.cookies.has("auth_token")

  // ログイン後のページへのアクセス時
  if (
    request.nextUrl.pathname.startsWith("/dashboard") ||
    request.nextUrl.pathname.startsWith("/chat") ||
    request.nextUrl.pathname.startsWith("/members") ||
    request.nextUrl.pathname.startsWith("/add-member") ||
    request.nextUrl.pathname.startsWith("/profile")
  ) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  // ログイン前のページ（'/'）へのアクセス時
  if (request.nextUrl.pathname === "/") {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/chat/:path*", "/members/:path*", "/add-member/:path*", "/profile/:path*"],
}

