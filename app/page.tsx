import TopBar from '@/app/components/common/TopBar'
import TopBanner from '@/app/components/feature/TopBanner'
import SubBanner from '@/app/components/feature/SubBanner'
import ImageBoard from '@/app/components/feature/ImageBoard'

export default function Home(): JSX.Element {
  return (
    <>
      <TopBar />
      <section title="top-section">
        <TopBanner />
        <SubBanner />
      </section>
      <ImageBoard />
    </>
  )
}
