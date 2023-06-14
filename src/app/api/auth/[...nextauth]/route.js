import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/utilities/db";
import bcrypt from "bcryptjs";

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
                const isPasswordCorrect = await bcrypt.compare(
                  credentials.password,
                  user.password
                );
                  if (isPasswordCorrect) {
                    console.log(user)
                    return user;
                  } else {
                    throw new Error("Wrong Credentials!");
                  }
              } else {
                throw new Error("User not found!");
              }
            } catch (err) {
              throw new Error(err);
            }
          },
      }),
      
    ],
    pages: {
      error: "/dashboard",
    },
  
  });
  
  export { handler as GET, handler as POST };
