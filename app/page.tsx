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
    <ExpandableTagTable id={"ett--0"}>{[
      {h1:"Why did Neuralink create a Patient Registry?",p:"We are committed to developing devices with input from the communities and groups we aim to serve. Until now, we’ve received input from a small number of individuals with various levels of motor impairment. The Patient Registry will allow us to understand the needs of a larger, more diverse group of individuals with various conditions. The Patient Registry will also help us determine your preliminary eligibility for current and/or future Neuralink clinical trials."},
      {h1:"Who can participate in the Patient Registry?",p:"Anyone within the United States who is at least 18 years old and the age of majority in their state, who is able to consent, and who has quadriplegia, paraplegia, vision loss, hearing loss, the inability to speak, and/or major limb amputation (affecting above or below the elbow and/or above or below the knee), is invited to participate in the Patient Registry."},
      {h1:"What benefit do I gain from adding my information to the Neuralink Patient Registry?",p:"While there is no direct benefit from participating in the Patient Registry, you may benefit in the future from research stemming from the Patient Registry and any commercial products that may result. If you submit a completed Patient Registry application, we may also contact you or your legally authorized representative about current and/or future Neuralink clinical trials you may be eligible for."},
      {h1:"What information is collected through the Patient Registry?",p:"We will ask about current and past medical information, demographics, education, work, and the assistive technologies you use. To participate in the Patient Registry, we will ask you for your authorization to release your medical records. If you have a legally authorized representative, we will ask for their contact information."},
      {h1:"How will my information be used and by whom?",p:"We will not sell the data you provide to any third party. We may share such data with Neuralink’s affiliates, third parties acting on behalf of Neuralink and research partners. The information you provide may be used to determine your potential eligibility for current and/or future Neuralink clinical trials as well as for research purposes and potential product development. Your contact information may also be used to communicate with you (or your legally authorized representative) about your Patient Registry application, Neuralink, Neuralink clinical trials, or Neuralink’s technology. If required, we may also share information you provide with regulatory agencies, such as an institutional review board (IRB), to comply with Neuralink’s regulatory obligations or to comply with the law. Only authorized Neuralink personnel with the appropriate privacy and confidentiality training and authorized third parties will be able to access the identifiable personal information you provide. We may create de-identified data from the identifiable personal information you provide by excluding information that personally identifies you. This de-identified data may be presented at scientific, professional, or company meetings or published in scientific journals."},
      {h1:"Does adding my information to the Patient Registry help me qualify for current and/or future clinical trials?",p:"We may use the information you provide to determine your preliminary eligibility for current and/or future Neuralink clinical trials. Participation in the Patient Registry is however not a prerequisite or sufficient for later participation in a Neuralink clinical trial. You will not be considered enrolled into any Neuralink clinical trials and/or research study by participating in the Patient Registry. You will be asked to review and sign a separate informed consent document before participating in any current and/or future Neuralink clinical trial. Neuralink currently has one clinical trial available for enrollment."}
    ]}</ExpandableTagTable>
    <FrontContent className={""}/>
    <Section className={"custom-border-y-black-1"} layout={"default"}>
      <TagTable id={"tt-0"} animation={"anime-sink-up"} className={""}>{[
        {h1:"Surgical Robot",p:"The threads of our implant are so fine that they can't be inserted by the human hand. Our surgical robot has been designed to reliably and efficiently insert these threads exactly where they need to be."},
        {h1:"Base Structure",p:"The base structure and motion stage provide the structural platform for the robot head and the primary 3 axis linear motion used to position the robot head and needle."},
        {h1:"Robot Head",p:"The robot head contains the optics and sensors of 5 camera systems and the optics for an optical coherence tomography (OCT) system."},
        {h1:"Needle",p:"The needle, which is thinner than a human hair, grasps, inserts, and releases threads."},
      ]}</TagTable>
    </Section>
    <ImageArticle className={"pt-8"}>{{
      src:"/assets/images/surgical_robot.avif",
      h1:"Patient Registry",
      p:"If you're interested in learning whether you may qualify for current and/or future Neuralink clinical trials, consider joining our Patient Registry.",
      link:<Link href={"/"} className={"absolute bottom-4 underline font-light custom-arrow"}>Join Our Patient Registry</Link>
    }}</ImageArticle>
    <ImageArticle className={""}>{{
      src:"/assets/images/surgical_robot_1.avif",
      h1:"Careers",
      p:"Developing brain-computer interfaces is an interdisciplinary challenge. We are looking to hire a wide range of people with diverse engineering, scientific, and operations expertise.",
      link:<Link href={"/"} className={"absolute bottom-4 underline font-light custom-arrow"}>Explore All Open Roles</Link>
    }}</ImageArticle>
    <Section className={""} layout={"default"}>
      <TagTable id={"tt-1"} animation={"anime-vanish-in"} className={""}>{[
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
