import TopBar from "@/app/components/common/TopBar";
import FrontContent from "@/app/components/feature/FrontContent";
import Tag from "@/app/components/common/Tag";
import ImgBlock from "@/app/components/common/ImgBlock";
import ExpendableTagTable from "@/app/components/feature/ExpendableTagTable";
export default function Home() {
  return (<>
    <title>Neuralink</title>
    <div className={"block min-h-screen bg-white"}>
      <TopBar>{[
        {text:"Career",href:"",class:"p-0 m-0"},
        {text:"Contact",href:"",class:"p-0 m-0"},
        {text:"Patient Registry",href:"/patient_registry",class:"custom-outline p-1 rounded-2xl px-4 hover:bg-black hover:text-white"}
      ]}</TopBar>
      <div className={"h-16"}/>
      <FrontContent/>
      <section className={"px-16"}>
        <Tag h1={"A Seamless BCI Experience"} p={"To restore independence and improve lives, we’ve built a brain-computer interface (BCI) experience that enables fast and reliable computer control and prioritizes ease of use."}/>
        <Tag h1={"Patient Registry"} p={"If you're interested in learning whether you may qualify for current and/or future Neuralink clinical trials, consider joining our Patient Registry."}/>
      </section>
      <section className={"px-40 my-16"}>
        <h1>Career</h1>
        <p className={"text-2xl"}>
          Developing brain-computer interfaces is an interdisciplinary challenge. We are looking to hire a wide range of people with diverse engineering, scientific, and operations expertise.
        </p>
      </section>
      <ImgBlock src={"https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={"100%"} height={"30rem"}/>
      <section className={"px-40 my-16"}>
        <h1>Career</h1>
        <p className={"text-2xl"}>
          Developing brain-computer interfaces is an interdisciplinary challenge. We are looking to hire a wide range of people with diverse engineering, scientific, and operations expertise.
        </p>
      </section>
      <section className={"px-40 my-16"}>
        <h1>Career</h1>
        <p className={"text-2xl"}>
          Developing brain-computer interfaces is an interdisciplinary challenge. We are looking to hire a wide range of people with diverse engineering, scientific, and operations expertise.
        </p>
      </section>
    </div>
  </>)
}
