import React from 'react'

const style: React.CSSProperties = {
  width: '100%',
  height: '5rem',
}
export default function PopUp() {
  return (
    <div
      style={style}
      className="flex items-center justify-center _bg-gradient-0 relative"
    >
      <h1 className="_text-large text-white select-none">
        가장 처음으로 시도되는 의료시도에 지원해보세요!
      </h1>
      <button className="absolute right-12 _text-large text-white mb-1">
        X
      </button>
    </div>
  )
}
