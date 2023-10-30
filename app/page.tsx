import TopBar from "@/app/components/common/TopBar";
import FrontContent from "@/app/components/feature/FrontContent";
import React, {lazy} from "react";
const Footer = lazy(()=>import("@/app/components/common/Footer"));
import Tag from "@/app/components/common/Tag";
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
      <section className={"px-40 my-16"}>
        <h1>Career</h1>
        <p className={"text-2xl"}>
          Developing brain-computer interfaces is an interdisciplinary challenge. We are looking to hire a wide range of people with diverse engineering, scientific, and operations expertise.
        </p>
      </section>
      <section className={"px-40 my-16"}>
        <h1>{"Biocompatible Enclosure"}</h1>
        <p className={"text-2xl"}>
          {"The N1 Implant is hermetically sealed in a biocompatible enclosure that withstands physiological conditions several times harsher than those in the human body."}
        </p>
      </section>
      <section className={"px-40 my-16"}>
        <h1>Implant</h1>
        <p className={"text-2xl"}>
          {"Our brain-computer interface is fully implantable, cosmetically invisible, and designed to let you control a computer or mobile device anywhere you go."}
        </p>
      </section>
      <section className={"px-40 my-16"}>
        <Tag h1={"A Seamless BCI Experience"} p={"To restore independence and improve lives, we’ve built a brain-computer interface (BCI) experience that enables fast and reliable computer control and prioritizes ease of use."}/>
        <Tag h1={"Patient Registry"} p={"If you're interested in learning whether you may qualify for current and/or future Neuralink clinical trials, consider joining our Patient Registry."}/>
      </section>
      <React.Suspense>
        <Footer/>
      </React.Suspense>
    </div>
  </>)
}
