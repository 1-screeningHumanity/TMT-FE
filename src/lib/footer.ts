const footerSignedIn = [
  {
    id: 1,
    alt: 'home',
    name: '홈',
    href: '/',
  },
  {
    id: 2,
    alt: 'sorting-answers',
    name: '카테고리',
    href: '/category',
  },
  {
    id: 3,
    alt: 'rank',
    name: '순위',
    href: '/userRank',
  },
  {
    id: 4,
    alt: 'user',
    name: '마이페이지',
    href: '/mypage',
  },
]

const footerSignedOut = [
  {
    id: 1,
    alt: 'home',
    name: '홈',
    href: '/',
  },
  {
    id: 2,
    alt: 'sorting-answers',
    name: '카테고리',
    href: '/category',
  },
  {
    id: 3,
    alt: 'rank',
    name: '순위',
    href: '/userRank',
  },
  {
    id: 4,
    alt: 'user',
    name: '로그인',
    href: '/member/signin',
  },
]

export { footerSignedIn, footerSignedOut }