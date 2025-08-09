import { NextResponse } from "next/server";

export default function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/components/navbars", req.url));
  }
}

export const config = {
  matcher: "/:path*",
};
