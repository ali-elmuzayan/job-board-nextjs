import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase();
  const url = request.nextUrl;
  const pathname = url.pathname;
  const isAdminDomain = host === process.env.ADMIN_URL;
  const isMainDomain = host === process.env.APP_URL;

  // Redirect admin to the dashboard
  if (isAdminDomain && !pathname.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // redirect to home if access from the main domain.
  if (isMainDomain && pathname.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher:
    "/((?!api/|_next/static|_next/image|sw\\.js|favicon\\.ico|.*\\.png$).*)",
};
