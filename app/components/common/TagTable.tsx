'use client';
import {useEffect, useRef} from "react";
import React from "react";
import "@/styles/Common.css";
interface TagProps {h1:string,p:string,id:string,animation:string}
export default function TagTable({children,id,animation}:{children:Array<{h1:string,p:string}>,id:string,animation:string}){
	const tags:Array<React.ReactNode>= [];
	children.forEach((child,index)=>{
		tags.push(<Tag animation={animation} h1={child.h1} p={child.p} id={[id, index.toString()].join("-").trim()} key={index}/>);
	});
	return(<div className={"p-4"}>{tags}</div>);
}
function Tag({h1,p,id,animation}:TagProps){
	const observerRef:any = useRef(null);
	useEffect(()=>{
		const target:HTMLElement|null = document.getElementById(id); if(target === null){return;}
		const options:object = {root:null,rootMarign:"0px",threshold:0.75}
		const handleIntersection = (entries:any,observer:any)=>{
			entries.forEach((entry:any)=>{
				if(entry.isIntersecting){target.style.animationPlayState = "running";}
			});
		};
		observerRef.current = new IntersectionObserver(handleIntersection,options);
		if(target){observerRef.current.observe(target)}
		return ()=>{
			if(observerRef.current){observerRef.current.disconnect();}
		};
	},[false]);
	return(
	<div className={["my-2 p-2 rounded-2xl",animation].join(" ").trim()} id={id}>
		<h1 className={"font-bold"}>{h1}</h1>
		<p className={""}>{p}</p>
	</div>
	);
}