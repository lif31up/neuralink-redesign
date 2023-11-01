'use client';//CSR
import React from "react";
import "@/styles/ExpendableTagTable.css";
interface ExpandableTagType {h1:string,p:string}
export default function ExpandableTagTable({children,id}:{children:Array<ExpandableTagType>,id:string}){
	const tags:Array<React.ReactNode> = [];
	children.forEach((child,index)=>{
		tags.push(<ExpandableTag h1={child.h1} p={child.p} id={[id, index].join("--").trim()}/>)
	});
	return(<div className={"custom-expandable-tag-table"}>{tags}</div>);
}
interface ExpandableTagProps {h1:string,p:string,id:string}
function ExpandableTag({h1,p,id}:ExpandableTagProps){
	const clickHandler = ()=>{
		const node:HTMLElement|null = document.getElementById(id);
		if(node === null){return;}
		if(node.classList.contains("active")){node.classList.remove("active");}
		else{node.classList.add("active");}
	}//clickHandler
	return(
	<div className={"custom-expandable-tag"} onClick={clickHandler} id={id}>
		<h1>{h1}</h1>
		<span><p>{p}</p></span>
	</div>
	);
}