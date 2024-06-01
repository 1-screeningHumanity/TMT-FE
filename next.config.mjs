/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.icons8.com'],
  },
  env : {
    API_BASE_URL : process.env.API_BASE_URL,
    NEXTAUTH_SECRET : process.env.NEXTAUTH_SECRET,
    KAKAO_CLIENT_ID : process.env.KAKAO_CLIENT_ID,
    KAKAO_CLIENT_SECRET : process.env.KAKAO_CLIENT_SECRET,
    NAVER_CLIENT_ID : process.env.NAVER_CLIENT_ID,
    NAVER_CLIENT_SECRET : process.env.NAVER_CLIENT_SECRET,
  }
};

export default nextConfig
