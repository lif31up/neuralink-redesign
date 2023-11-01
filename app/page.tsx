import React, {lazy} from "react";
import TopBar from "@/app/components/common/TopBar";
import PopUp from "@/app/components/common/PopUp";
import FrontContent from "@/app/components/feature/FrontContent";
import ExpandableTagTable from "@/app/components/feature/ExpendableTagTable";
import TagTable from "@/app/components/feature/TagTable";
import Section from "@/app/components/common/Section";
import "@/styles/Animation.css"; import "@/styles/Common.css";
import Link from "next/link";
import ImageArticle from "@/app/components/feature/ImageArticle";
const Footer = lazy(()=>import("@/app/components/common/Footer"));
export default function Home() {
  return (
  <>
    <title>Neuralink</title>
    <TopBar/>
    <PopUp/>
    <Section className={""} layout={"default"}>
      <ExpandableTagTable/>
    </Section>
    <FrontContent className={"snap-center"}/>
    <Section className={"snap-center"} layout={"default"}>
      <TagTable id={"tt-0"} animation={"anime-sink-up"}>{[
        {h1:"Surgical Robot",p:"The threads of our implant are so fine that they can't be inserted by the human hand. Our surgical robot has been designed to reliably and efficiently insert these threads exactly where they need to be."},
        {h1:"Base Structure",p:"The base structure and motion stage provide the structural platform for the robot head and the primary 3 axis linear motion used to position the robot head and needle."},
        {h1:"Robot Head",p:"The robot head contains the optics and sensors of 5 camera systems and the optics for an optical coherence tomography (OCT) system."},
        {h1:"Needle",p:"The needle, which is thinner than a human hair, grasps, inserts, and releases threads."},
      ]}</TagTable>
    </Section>
    <ImageArticle className={"snap-start"}>{{
      src:"/assets/images/surgical_robot.avif",
      h1:"Patient Registry",
      p:"If you're interested in learning whether you may qualify for current and/or future Neuralink clinical trials, consider joining our Patient Registry.",
      link:<Link href={"/"} className={"absolute bottom-4 underline font-light custom-arrow"}>Join Our Patient Registry</Link>
    }}</ImageArticle>
    <ImageArticle className={"snap-start"}>{{
      src:"/assets/images/surgical_robot_1.avif",
      h1:"Careers",
      p:"Developing brain-computer interfaces is an interdisciplinary challenge. We are looking to hire a wide range of people with diverse engineering, scientific, and operations expertise.",
      link:<Link href={"/"} className={"absolute bottom-4 underline font-light custom-arrow"}>Explore All Open Roles</Link>
    }}</ImageArticle>
    <Section className={"snap-center"} layout={"default"}>
      <TagTable id={"tt-1"} animation={"anime-vanish-in"}>{[
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
  </>
  );
}
