'use client';
import {useEffect, useRef} from "react";
import React from "react";
import "@/styles/Common.css";
interface TagProps {h1:string,p:string,id:string,animation:string,rootId:string}//에니메이션을 사용하기 위해 고정된 ID를 받습니다. 이는 이후 자식 노드들에게 전파됩니다.
export default function TagTable({children,id,animation,className}:{children:Array<{h1:string,p:string}>,id:string,animation:string,className:string}){
	const tags:Array<React.ReactNode>= [];
	children.forEach((child,index)=>{
		tags.push(<Tag animation={animation} h1={child.h1} p={child.p} id={[id, index.toString()].join("-").trim()} rootId={id} key={index}/>);
	});
	return(<div className={["overflow-hidden",className].join(" ").trim()}>{tags}</div>);
}
function Tag({h1,p,id,animation,rootId}:TagProps){
	const observerRef:any = useRef(null);
	useEffect(()=>{
		const target:HTMLElement|null = document.getElementById(id); if(target === null){return;}
		const options:object = {root:document.getElementById(rootId),rootMargin:"0px",threshold:0.75}
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
		<h1 className={"font-light text-neutral-900"}>{h1}</h1>
		<p className={"font-light text-3xl"}>{p}</p>
	</div>
	);
}