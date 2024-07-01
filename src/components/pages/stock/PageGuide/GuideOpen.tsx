'use client'

import { useEffect, useState } from 'react'
import PageGuideUI from './PageGuideUI'
import { InfoIcon } from 'lucide-react'

export default function GuideOpen() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <section>
      <div className="absolute right-3" onClick={() => setIsOpen(true)}>
        <InfoIcon />
      </div>
      {isOpen && <PageGuideUI isOpen={isOpen} setIsOpen={setIsOpen} />}
    </section>
  )
}
