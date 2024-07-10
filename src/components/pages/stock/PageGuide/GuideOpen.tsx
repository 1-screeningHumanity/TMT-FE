'use client'

import { useEffect, useState } from 'react'
import PageGuideUI from './PageGuideUI'
import { InfoIcon } from 'lucide-react'

export default function GuideOpen() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const check = localStorage.getItem('guide')
    setIsOpen(check === null ? true : check === 'true')
  }, [])

  const handleGuideToggle = () => {
    const newOpen = !isOpen
    setIsOpen(!isOpen)
    localStorage.setItem('guide', newOpen ? 'true' : 'false')
  }

  return (
    <section>
      <div className="absolute right-3" onClick={handleGuideToggle}>
        <div className="GuideIcon">
          <InfoIcon />
        </div>
      </div>
      {isOpen && <PageGuideUI isOpen={isOpen} setIsOpen={setIsOpen} />}
    </section>
  )
}
