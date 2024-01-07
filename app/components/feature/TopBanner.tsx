import React from 'react'

const style: React.CSSProperties = {
  width: '100%',
  height: '5rem',
}

export default function TopBanner(): React.JSX.Element {
  return (
    <section style={style} className="flex items-center pb-1 px-12">
      <div className="_text-black-3 _text-large mr-8">NEURALINK</div>
      <div className="flex items-center gap-8 mt-1 _text-small text-white">
        <h1 className="rounded-3xl _bg-neutral-0 py-2 px-6">
          신경공학의 미래에 오신 걸 환영합니다.
        </h1>
        <h1 className="rounded-3xl _bg-neutral-0 py-2 px-6">
          신경공학의 미래에 오신 걸 환영합니다.
        </h1>
        <h1 className="rounded-3xl _bg-neutral-0 py-2 px-6">
          신경공학의 미래에 오신 걸 환영합니다.
        </h1>
      </div>
    </section>
  )
}
