import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // callbacks: {
  //   async session({ session, token }) {
  //     session.user.id = token.sub;
  //     return session;
  //   },
  // },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Always redirect to /dashboard after login

      return `${baseUrl}/dashboard`;
    },
     async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
