'use client';
import {SVGBlock} from "@/app/components/common/ContentBlock";
import Link from "next/link";
import {useEffect} from "react";
import "@/styles/Common.css";
import "@/styles/Section.css";
export default function TopBar({}){
	//수축과 확장이 가능한 상단 창입니다.
	useEffect(()=>{
		const topBar:HTMLElement|null = document.getElementById("top-bar");
		if(topBar === null){return;}
		window.addEventListener("scroll",():void=>{
			if(window.scrollY > 1){topBar.classList.add("shrink");}
			else{topBar.classList.remove("shrink");}
		});
	},[false]);
	return(
	<>
		<div className={"top-bar"} id={"top-bar"}>
			<SVGBlock src={"/assets/svg/logo.svg"} width={""} height={"50%"}/>
			<div className={"flex gap-12 items-center"}>
				<Link href={"/career"} className={"custom-mob-none"}>Career</Link>
				<Link href={"/contact"} className={"custom-mob-none"}>Contact</Link>
				<Link href={"/patient_registry"} className={"custom-outline"}>Patient Registry</Link>
			</div>
		</div>
		<div className={"h-16"}/>
	</>
	);
}