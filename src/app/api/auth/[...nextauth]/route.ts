
// route 파일은 데이터가 들어왔을때 여기로 넣어주는 역할
import NextAuth from "next-auth"
import {options} from "./options"

const handler = NextAuth(options);

export { handler as GET, handler as POST} // handler 중 GET과 POST만 export 한다는 의미