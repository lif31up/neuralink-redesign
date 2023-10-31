import TopBar from "@/app/components/common/TopBar";
import FrontContent from "@/app/components/feature/FrontContent";
import React, {lazy} from "react";
const Footer = lazy(()=>import("@/app/components/common/Footer"));
import Tag from "@/app/components/common/TagTable";
import Section from "@/app/components/common/Section";
import Link from "next/link";
import ImgBlock from "@/app/components/common/ImgBlock";
import PopUp from "@/app/components/common/PopUp";
import TagTable from "@/app/components/common/TagTable";
export default function Home() {
  return (<>
    <title>Neuralink</title>
    <PopUp/>
    <div className={"block min-h-screen bg-white"}>
      <TopBar>{[
        {text:"Career",href:"https://neuralink.com/careers/",class:"p-0 m-0 hover:border-b-black hover:border-b-2 hover:-mb-0.5"},
        {text:"Contact",href:"https://neuralink.com/blog/",class:"p-0 m-0 hover:border-b-black hover:border-b-2 hover:-mb-0.5"},
        {text:"Patient Registry",href:"/patient_registry",class:"custom-outline p-1 rounded-2xl px-4 hover:bg-black hover:text-white"}
      ]}</TopBar>
      <div className={"h-16"}/>
      <FrontContent/>
      <Section className={"pt-16"}>
        <h1>Implant</h1>
        <p className={"text-3xl"}>{"Our brain-computer interface is fully implantable, cosmetically invisible, and designed to let you control a computer or mobile device anywhere you go."}</p>
      </Section>
      <Section className={"custom-div"}>
        <div className={"custom-view30"}>
          <ImgBlock src={"/assets/images/surgical_robot.webp"} width={"100%"} height={"80vh"}/>
        </div>
        <div className={"custom-view70"}>
          <TagTable animation={"cust-sink-up"} id={"tt-0"}>{[
            {h1:"Implant",p:"Our brain-computer interface is fully implantable, cosmetically invisible, and designed to let you control a computer or mobile device anywhere you go."},
            {h1:"Biocompatible Enclosure",p:"The N1 Implant is hermetically sealed in a biocompatible enclosure that withstands physiological conditions several times harsher than those in the human body."},
            {h1:"Battery",p:"The N1 Implant is powered by a small battery charged wirelessly from the outside via a compact, inductive charger that enables easy use from anywhere."},
            {h1:"Chips and Electronics",p:"Advanced, custom, low-power chips and electronics process neural signals, transmitting them wirelessly to the Neuralink Application, which decodes the data stream into actions and intents."},
            {h1:"Threads",p:"The N1 Implant records neural activity through 1024 electrodes distributed across 64 threads. These highly-flexible, ultra-thin threads are key to minimize damage during implantation and beyond."}
          ]}</TagTable>
        </div>
      </Section>
      <Section className={""}>
        <h1 className={"text-2xl"}>Surgical Robot</h1>
        <TagTable id={"tt-1"} animation={"cust-space-in-down"}>{[
          {h1:"Implant",p:"Our brain-computer interface is fully implantable, cosmetically invisible, and designed to let you control a computer or mobile device anywhere you go."},
          {h1:"Biocompatible Enclosure",p:"The N1 Implant is hermetically sealed in a biocompatible enclosure that withstands physiological conditions several times harsher than those in the human body."},
          {h1:"Battery",p:"The N1 Implant is powered by a small battery charged wirelessly from the outside via a compact, inductive charger that enables easy use from anywhere."},
          {h1:"Chips and Electronics",p:"Advanced, custom, low-power chips and electronics process neural signals, transmitting them wirelessly to the Neuralink Application, which decodes the data stream into actions and intents."},
          {h1:"Threads",p:"The N1 Implant records neural activity through 1024 electrodes distributed across 64 threads. These highly-flexible, ultra-thin threads are key to minimize damage during implantation and beyond."}
        ]}</TagTable>
      </Section>
      <React.Suspense>
        <Footer/>
      </React.Suspense>
    </div>
  </>)
}
