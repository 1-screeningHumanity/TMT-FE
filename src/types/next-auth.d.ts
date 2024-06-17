import NextAuth, { DefaultSession } from "next-auth/next";

declare module "next-auth" {

  interface Session {
    user: {
      AccessToken : string;
      RefreshToken : string;
    } & DefaultSession["user"];
  }
}