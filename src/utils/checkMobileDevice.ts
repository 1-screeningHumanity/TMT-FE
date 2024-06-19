export default function checkMobileDevice() {

  const userAgent = navigator.userAgent;

  const mobileRegex = [
    /Android/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ]

  return mobileRegex.some((item) => item.test(userAgent))
}
