import TopBar from "@/app/components/common/TopBar";
import FrontContent from "@/app/components/feature/FrontContent";

export default function Home() {
  return (
    <main className="block min-h-screen bg-white">
      <TopBar>{[
        {text:"career",href:"",class:"p-0 m-0"},
        {text:"contact",href:"",class:"p-0 m-0"},
        {text:"patient registry",href:"/patient_registry",class:"custom-outline p-1 rounded-2xl px-4 hover:bg-black hover:text-white"}
      ]}</TopBar>
      <div className={"h-16"}/>
      <FrontContent/>
      <section className={"px-40 pt-4 pb-4"}>
        <h1>fuckyou</h1>
        <p>world sibal ah</p>
        <button>hello</button>
      </section>
      <section className={"px-40 pt-4 pb-4"}>
        <h1>fuckyou</h1>
        <p>world sibal ah</p>
        <button>hello</button>
      </section>
      <section className={"bg-black text-white h-96"}>
        <h1>fucyou</h1>
        <p>dflsdjfljasl</p>
      </section>
    </main>
  )
}
