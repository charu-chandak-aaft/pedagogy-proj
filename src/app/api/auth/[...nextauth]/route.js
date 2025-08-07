import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const allowedDomains = ["aaft.com", "aaft.edu.in", "aeg.edu.in", "asms.edu.in"];

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ profile }) {
      const email = profile?.email || "";
      const domain = email.split("@")[1];

      if (allowedDomains.includes(domain)) {
        return true;
      }
      console.warn("Blocked sign-in attempt from:", email);
      return false; 
    },

    async redirect({ url, baseUrl }) {
      return `${baseUrl}/dashboard`;
    },

    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },

  pages: {
    signIn: '/', 
    error: '/',  
  },
});

export { handler as GET, handler as POST };
