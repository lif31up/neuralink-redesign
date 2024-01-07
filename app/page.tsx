import TopBar from '@/app/components/common/TopBar'
import TopBanner from '@/app/components/feature/TopBanner'
import SubBanner from '@/app/components/feature/SubBanner'
import ImageBoard from '@/app/components/feature/ImageBoard'
import PopUp from '@/app/components/common/PopUp'

export default function Home(): JSX.Element {
  return (
    <>
      <TopBar />
      <PopUp />
      <section title="top-section">
        <TopBanner />
        <SubBanner />
      </section>
      <ImageBoard />
    </>
  )
}
