import React, {lazy} from "react";
import TopBar from "@/app/components/common/TopBar";
import PopUp from "@/app/components/common/PopUp";
import FrontContent from "@/app/components/feature/FrontContent";
import ExpandableTagTable from "@/app/components/feature/ExpendableTagTable";
import TagTable from "@/app/components/feature/TagTable";
import Section from "@/app/components/common/Section";
import "@/styles/Animation.css";
import Image from "next/image";
const Footer = lazy(()=>import("@/app/components/common/Footer"));
export default function Home() {
  return (
  <main className={"snap-y"}>
    <title>Neuralink</title>
    <TopBar/>
    <PopUp/>
    <Section className={""} layout={"default"}>
      <ExpandableTagTable/>
    </Section>
    <FrontContent/>
    <Section className={""} layout={"default"}>
      <TagTable id={"tt-0"} animation={"anime-sink-up"}>{[
        {h1:"Surgical Robot",p:"The threads of our implant are so fine that they can't be inserted by the human hand. Our surgical robot has been designed to reliably and efficiently insert these threads exactly where they need to be."},
        {h1:"Base Structure",p:"The base structure and motion stage provide the structural platform for the robot head and the primary 3 axis linear motion used to position the robot head and needle."},
        {h1:"Robot Head",p:"The robot head contains the optics and sensors of 5 camera systems and the optics for an optical coherence tomography (OCT) system."},
        {h1:"Needle",p:"The needle, which is thinner than a human hair, grasps, inserts, and releases threads."},
      ]}</TagTable>
    </Section>
    <Section className={"w-full h-fit relative"} layout={""}>
      <div className={"w-full h-screen snap-start"}>
        <Image src={"/assets/images/surgical_robot.avif"} alt={"alt"} layout={"fill"} objectPosition={"center"} objectFit={"cover"}/>
      </div>
    </Section>
    <React.Suspense>
      <Footer/>
    </React.Suspense>
  </main>
  );
}
