import React from 'react'

const style: React.CSSProperties = {
  width: '100%',
  height: '6rem',
}
export default function SubBanner(): React.JSX.Element {
  return (
    <section style={style} className="flex items-center gap-4 pb-1">
      <div className="flex items-center gap-8 px-12">
        <div>some content</div>
        <div>some content</div>
        <div>some content</div>
        <div>some content</div>
      </div>
    </section>
  )
}
