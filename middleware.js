import { withAuth } from "next-auth/middleware"
import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export default async function middleware(req, event) {
    const token = await getToken({ req })
    const userToken = token
    
    if ((req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/signup")) && (!!userToken)) {
        return NextResponse.redirect(new URL("/sessao", req.url))
    }

    if (req.nextUrl.pathname.startsWith("/signup") && !(!!userToken)) {
        return NextResponse.next()
    }

    if (req.nextUrl.pathname.startsWith("/sessao/criar") && token?.professional !== true) {
        return NextResponse.redirect(new URL("/sessao", req.url))
    }

    const authMiddleware = await withAuth({
        pages: {
            signIn: "/login",
        }
    })

    return authMiddleware(req, event)
}

export const config = { matcher: ["/sessao/:path*", "/login", "/signup"] }
