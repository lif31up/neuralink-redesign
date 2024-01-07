import React from 'react'

const style: React.CSSProperties = {
  width: '100%',
  height: '3rem',
}

export default function TopBanner(): React.JSX.Element {
  return (
    <section style={style} className="flex items-center gap-4 pb-1">
      <div>NEURAL LINK</div>
      <div>welcome to future technologies</div>
    </section>
  )
}
