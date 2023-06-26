import { withAuth } from "next-auth/middleware"
import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export default async function middleware(req, event) {
    const token = await getToken({ req })
    const isAuthenticated = !!token
    
    if ((req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/signup")) && isAuthenticated) {
        return NextResponse.redirect(new URL("/sessao", req.url))
    }

    if (req.nextUrl.pathname.startsWith("/signup") && !isAuthenticated) {
        return NextResponse.next()
    }

    const authMiddleware = await withAuth({
        pages: {
            signIn: "/login",
        }
    })

    return authMiddleware(req, event)
}

export const config = { matcher: ["/sessao/:path*", "/login", "/signup"] }
