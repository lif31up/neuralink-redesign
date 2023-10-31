import TopBar from "@/app/components/common/TopBar";
import FrontContent from "@/app/components/feature/FrontContent";
import React, {lazy} from "react";
const Footer = lazy(()=>import("@/app/components/common/Footer"));
import Tag from "@/app/components/common/Tag";
import Section from "@/app/components/common/Section";
import Link from "next/link";
import ImgBlock from "@/app/components/common/ImgBlock";
import PopUp from "@/app/components/common/PopUp";
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
      <ImgBlock src={"/assets/images/front_1.jpg"} width={"100%"} height={"60vh"}/>
      <Section>
        <h1>Career</h1>
        <p className={"text-2xl"}>
          Developing brain-computer interfaces is an interdisciplinary challenge. We are looking to hire a wide range of people with diverse engineering, scientific, and operations expertise.
        </p>
        <Link className={"absolute right-1 bottom-1 custom-arrow"} href={"career/"}>Explore All Open Roles</Link>
      </Section>
      <Section>
        <h1>{"Biocompatible Enclosure"}</h1>
        <p className={"text-2xl"}>
          {"The N1 Implant is hermetically sealed in a biocompatible enclosure that withstands physiological conditions several times harsher than those in the human body."}
        </p>
        <Link className={"absolute right-1 bottom-1 custom-arrow"} href={"career/"}>See More about Biocompatible Enclosure</Link>
      </Section>
      <Section>
        <h1>Implant</h1>
        <p className={"text-2xl"}>
          {"Our brain-computer interface is fully implantable, cosmetically invisible, and designed to let you control a computer or mobile device anywhere you go."}
        </p>
        <Link className={"absolute right-1 bottom-1 custom-arrow"} href={"career/"}>See More about Implant Process</Link>
      </Section>
      <Section>
        <h1 className={"text-2xl"}>Implant</h1>
        <Tag id={"a"} h1={"Implant"} p={"Our brain-computer interface is fully implantable, cosmetically invisible, and designed to let you control a computer or mobile device anywhere you go."}/>
        <Tag id={"b"} h1={"Biocompatible Enclosure"} p={"The N1 Implant is hermetically sealed in a biocompatible enclosure that withstands physiological conditions several times harsher than those in the human body."}/>
        <Tag id={"c"} h1={"Battery"} p={"The N1 Implant is powered by a small battery charged wirelessly from the outside via a compact, inductive charger that enables easy use from anywhere."}/>
        <Tag id={"d"} h1={"Chips and Electronics"} p={"Advanced, custom, low-power chips and electronics process neural signals, transmitting them wirelessly to the Neuralink Application, which decodes the data stream into actions and intents."}/>
        <Tag id={"e"} h1={"Threads"} p={"The N1 Implant records neural activity through 1024 electrodes distributed across 64 threads. These highly-flexible, ultra-thin threads are key to minimize damage during implantation and beyond."}/>
      </Section>
      <Section>
        <h1 className={"text-2xl"}>Surgical Robot</h1>
        <Tag id={"f"} h1={"Surgical Robot"} p={"The threads of our implant are so fine that they can't be inserted by the human hand. Our surgical robot has been designed to reliably and efficiently insert these threads exactly where they need to be."}/>
        <Tag id={"g"} h1={"Base Structure"} p={"The base structure and motion stage provide the structural platform for the robot head and the primary 3 axis linear motion used to position the robot head and needle."}/>
        <Tag id={"h"} h1={"Robot Head"} p={"The robot head contains the optics and sensors of 5 camera systems and the optics for an optical coherence tomography (OCT) system."}/>
        <Tag id={"i"} h1={"Needle"} p={"The needle, which is thinner than a human hair, grasps, inserts, and releases threads."}/>
      </Section>
      <React.Suspense>
        <Footer/>
      </React.Suspense>
    </div>
  </>)
}
