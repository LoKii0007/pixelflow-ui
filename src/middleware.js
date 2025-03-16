import { NextResponse } from "next/server";

export default function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname === "/components") {
    return NextResponse.redirect(new URL("/components/button", req.url));
  }
}

export const config = {
  matcher: "/components/:path*",
};
