import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";

// export async function middleware(req : NextRequest){
  
//   const session = await getToken({req, secret: process.env.NEXTAUTH_SECRET});

//   console.log(" <<<<<<< middleware >>>>>>> ")

//   const currentPath = req.nextUrl.pathname;
//   // console.log("session :", session);
//   // console.log("currentPath :", currentPath);

//   const protectedPaths = ["/member/signin"];

//   // console.log(">>>>", session && protectedPaths.includes(currentPath));
//   if (session && protectedPaths.includes(currentPath)) {
//     return NextResponse.redirect(new URL("/"));
//   }

// }

  //middleware 설정 진행중
export const config = {
  matcher: [],
}