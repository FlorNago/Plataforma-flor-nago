import NextAuth from "next-auth/next"
import CredentialsProviders from "next-auth/providers/credentials"

export const authOptions = {
 providers: [
  CredentialsProviders({
   name: "credentials",
   authorize: async (credentials) => {
    // Verificação basica se o usuario colocou algo
    if (!credentials.email || !credentials.password) {
     throw new Error("Por favor, preencha todos os campos")
    }

    const response = await fetch(`${process.env.BACKEND_URL}/autenticacao/login`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" },
    })

    const data = await response.json()

    if (response.status !== 200) {
        throw new Error(data.message)
    }


    return data
   },
  }),
 ],
 callbacks: {
  jwt: ({ token, user }) => {
   if (user) {
    token = { ...user }
   }

   return token
  },
  session: async function ({ session, token }) {
   if (token) {
    session.user = { ...token }
   }

   return session
  },
 },
 secret: process.env.NEXTAUTH_SECRET,
 jwt: {
  secret: process.env.NEXTAUTH_SECRET,
  encryption: true,
 },
 pages: {
  signIn: "/login",
 },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
