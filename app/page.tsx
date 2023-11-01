import React, {lazy} from "react";
import TopBar from "@/app/components/common/TopBar";
import PopUp from "@/app/components/common/PopUp";
import FrontContent from "@/app/components/feature/FrontContent";
import ExpandableTagTable from "@/app/components/feature/ExpendableTagTable";
import TagTable from "@/app/components/feature/TagTable";
import Section from "@/app/components/common/Section";
import "@/styles/Animation.css"; import "@/styles/Common.css";
import Image from "next/image";
import Link from "next/link";
import ImageArticle from "@/app/components/feature/ImageArticle";
const Footer = lazy(()=>import("@/app/components/common/Footer"));
export default function Home() {
  return (
  <>
    <title>Neuralink</title>
    <TopBar/>
    <PopUp/>
    <Section className={"custom-snap-align-center"} layout={"default"}>
      <ExpandableTagTable/>
    </Section>
    <FrontContent className={"custom-snap-align-center"}/>
    <Section className={"custom-snap-align-center"} layout={"default"}>
      <TagTable id={"tt-0"} animation={"anime-sink-up"}>{[
        {h1:"Surgical Robot",p:"The threads of our implant are so fine that they can't be inserted by the human hand. Our surgical robot has been designed to reliably and efficiently insert these threads exactly where they need to be."},
        {h1:"Base Structure",p:"The base structure and motion stage provide the structural platform for the robot head and the primary 3 axis linear motion used to position the robot head and needle."},
        {h1:"Robot Head",p:"The robot head contains the optics and sensors of 5 camera systems and the optics for an optical coherence tomography (OCT) system."},
        {h1:"Needle",p:"The needle, which is thinner than a human hair, grasps, inserts, and releases threads."},
      ]}</TagTable>
    </Section>
    <ImageArticle className={"custom-snap-align-center"}>{{
      src:"/assets/images/surgical_robot.avif",
      h1:"Patient Registry",
      p:"If you're interested in learning whether you may qualify for current and/or future Neuralink clinical trials, consider joining our Patient Registry.",
      link:<Link href={"/"} className={"absolute bottom-4 underline font-light custom-arrow"}>Join Our Patient Registry</Link>
    }}</ImageArticle>
    <ImageArticle className={"custom-snap-align-center"}>{{
      src:"/assets/images/surgical_robot_1.avif",
      h1:"Patient Registry",
      p:"If you're interested in learning whether you may qualify for current and/or future Neuralink clinical trials, consider joining our Patient Registry.",
      link:<Link href={"/"} className={"absolute bottom-4 underline font-light custom-arrow"}>Join Our Patient Registry</Link>
    }}</ImageArticle>
    <React.Suspense>
      <Footer/>
    </React.Suspense>
  </>
  );
}
