import TopBar from "@/app/components/common/TopBar";
import FrontContent from "@/app/components/feature/FrontContent";
import React, {lazy} from "react";
const Footer = lazy(()=>import("@/app/components/common/Footer"));
import Tag from "@/app/components/common/Tag";
import Section from "@/app/components/common/Section";
import Link from "next/link";
import Image from "next/image";
import ImgBlock from "@/app/components/common/ImgBlock";
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
      <ImgBlock src={"/assets/images/front_1.jpg"} width={"100%"} height={"60vh"}/>
      <Section>
        <h1>Career</h1>
        <p className={"text-2xl"}>
          Developing brain-computer interfaces is an interdisciplinary challenge. We are looking to hire a wide range of people with diverse engineering, scientific, and operations expertise.
        </p>
        <Link className={"absolute right-1 bottom-1"} href={"career/"}>Explore All Open Roles</Link>
      </Section>
      <Section>
        <h1>{"Biocompatible Enclosure"}</h1>
        <p className={"text-2xl"}>
          {"The N1 Implant is hermetically sealed in a biocompatible enclosure that withstands physiological conditions several times harsher than those in the human body."}
        </p>
        <Link className={"absolute right-1 bottom-1"} href={"career/"}>See More about Biocompatible Enclosure</Link>
      </Section>
      <Section>
        <h1>Implant</h1>
        <p className={"text-2xl"}>
          {"Our brain-computer interface is fully implantable, cosmetically invisible, and designed to let you control a computer or mobile device anywhere you go."}
        </p>
        <Link className={"absolute right-1 bottom-1"} href={"career/"}>See More about Implant Process</Link>
      </Section>
      <Section>
        <Tag h1={"A Seamless BCI Experience"} p={"To restore independence and improve lives, we’ve built a brain-computer interface (BCI) experience that enables fast and reliable computer control and prioritizes ease of use."}/>
        <Tag h1={"Patient Registry"} p={"If you're interested in learning whether you may qualify for current and/or future Neuralink clinical trials, consider joining our Patient Registry."}/>
      </Section>
      <React.Suspense>
        <Footer/>
      </React.Suspense>
    </div>
  </>)
}
