import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/utilities/db";

const handler = NextAuth({
    providers: [
      CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        async authorize(credentials) {
          await connect();
  
          try {
            const user = await User.findOne({
              email: credentials.email,
            });
              
            if (user) { 
                return user
                }
             else {
                throw new Error("User doesn't exist.")
            }    
          } catch (err) {
            throw new Error(err);
          }
        },
      }),
      
    ],
    pages: {
      error: "/",
    },
  
  });
  
  export { handler as GET, handler as POST };
