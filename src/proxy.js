import { NextResponse } from "next/server";

export default function proxy(req) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/components/navbars", req.url));
  }
}

export const config = {
  matcher: "/:path*",
};
