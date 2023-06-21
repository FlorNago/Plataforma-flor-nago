import NextAuth from "next-auth/next"
import CredentialsProviders from "next-auth/providers/credentials"

export const authOptions = {
 providers: [
  CredentialsProviders({
   name: "credentials",
   authorize: async (credentials) => {
    console.log(credentials)
    // Verificação basica se o usuario colocou algo
    if (!credentials.email || !credentials.senha) {
     throw new Error("Por favor, preencha todos os campos")
     return
    }

    // Aqui seria ver se o usuário existe
    // O back-end também vai verificar se o email e a senha se coincide no banco de dados
    if (
     credentials.email !== "email@exemplo.com" ||
     credentials.senha !== "teste"
    ) {
     throw new Error("Email ou senha invalidos")
     return
    }

    // Aqui seria quando o login é bem sucedido
    // O back-end vai retornar o objeto do usuario
    const user = {
     id: 1,
     name: "teste",
     email: "email@exemplo.com",
     cargo: "profissional",
     pao: "pao de queijo",
    }

    // Por fim, retorna o objeto do usuário
    return user
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
