import NextAuth, { DefaultSession } from "next-auth/next";

declare module "next-auth" {

  interface Session {
    user: {
      // token: string;
      // name: string;
      // email: string;
      // uuid: string;
      AccessToken : string;
      RefreshToken : string;
    } & DefaultSession["user"];
  }
}