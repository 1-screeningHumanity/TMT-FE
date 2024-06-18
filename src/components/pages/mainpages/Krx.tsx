import { kospiType } from '@/types/Mainpage'
import Image from 'next/image'
const red = '#ff0000'
const blue = '#0000ff'
export default function Krx(data: { data: kospiType }) {
  const kospiData = data.data
  let color = ''
  if (kospiData.prdy_vrss_sign === '1' || kospiData.prdy_vrss_sign === '2') {
    color = red
  }
  if (kospiData.prdy_vrss_sign === '4' || kospiData.prdy_vrss_sign === '5') {
    color = blue
  }

  return (
    <div className="text-center">
      <div className="text-3xl font-bold" style={{ color: color }}>
        {kospiData.bstp_nmix_prpr}
      </div>

      <div className="flex justify-center">
        <span className="flex mr-2" style={{ color: color }}>
          {color === '#ff0000' ? (
            <Image
              src="/assets/images/upPrice.svg"
              alt="부호"
              width={15}
              height={10}
            />
          ) : (
            <Image
              src="/assets/images/downPrice.svg"
              alt="부호"
              width={15}
              height={10}
            />
          )}
          {kospiData.bstp_nmix_prdy_vrss}
        </span>
        <span className="ml-2" style={{ color: color }}>
          {color === '#ff0000' && <span>+</span>}

          {kospiData.bstp_nmix_prdy_ctrt}
        </span>
      </div>
    </div>
  )
}
