'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

const style: React.CSSProperties = {
  width: '100%',
  height: '5.5rem',
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
        className="fixed top-0 left-0 flex justify-between items-center z-50 px-8 -mt-1 _border-b-neutral-2 bg-white"
      >
        <div title="left" className="w-fit h-fit flex align-middle">
          <object
            data="@/public/assets/svg/logo.svg"
            type="image/svg+xml"
            width={30}
            height={30}
            aria-label="logo"
          />
        </div>
        <div
          title="right"
          className="w-fit h-fit flex items-center gap-8 _text-large _text-black-1"
        >
          <Link href="">캐리어</Link>
          <Link href="">블로그</Link>
          <Link href="" className="border py-3 px-8 rounded-2xl _text-black-0">
            실험체 등록
          </Link>
        </div>
      </div>
      <div style={style} />
    </section>
  )
}
