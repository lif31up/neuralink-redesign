import React from 'react'

const style: React.CSSProperties = {
  width: '100%',
  height: '45rem',
}

export default function ImageBoard({}) {
  return (
    <section style={style} className="bg-black">
      <img
        alt="iamge-board--image"
        src="@/public/assets/images/front_0.jpg"
        width={0}
        height={0}
        className="w-full h-full"
      />
    </section>
  )
}
