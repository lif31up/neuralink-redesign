'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

const style: React.CSSProperties = {
  width: '100%',
  height: '4rem',
}
const id: string = 'top-bar'
export default function TopBar(): React.JSX.Element {
  useEffect((): void => {
    let topBar: null | HTMLElement = document.getElementById(id)
    if (topBar === null) return
  }, [false])

  return (
    <section title="top-bar-section">
      <div
        style={style}
        id={id}
        className="fixed top-0 left-0 flex justify-between items-center z-50 px-8 -mt-1 _border-b-neutral-0 bg-white"
      >
        <div title="left" className="w-fit h-fit flex align-middle">
          FUCK
        </div>
        <div title="right" className="w-fit h-fit flex align-middle gap-8">
          <Link href="">Career</Link>
          <Link href="">Blog</Link>
          <Link href="">Patient Registry</Link>
        </div>
      </div>
      <div style={style} />
    </section>
  )
}
