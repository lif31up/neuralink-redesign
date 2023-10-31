'use client';
import {useEffect, useRef} from "react";
import "@/styles/Common.css";
interface TagProps {h1:string,p:string,id:string}
export default function Tag({h1,p,id}:TagProps){
	const observerRef:IntersectionObserver|any = useRef(null);
	useEffect(()=>{
		//에니메이션은 돔 객체가 형성되고 나서 조작할 수 있습니다. 따라서 useEffect에서만 정의할 수 있습니다.
		const option = {root: null, rootMargin: "0px", threshold: 0.75};
		const handleIntersection = (entries:any,observer:any):void => {
			entries.forEach((entry:any):void=>{
				if(entry.isIntersecting){
					//이 범위에서 교차되었을 때의 행동을 정의합니다.
					// @ts-ignore
					document.getElementById(id).style.animationPlayState = "running";
				}
			});
		}//handleIntersection
		observerRef.current = new IntersectionObserver(handleIntersection, option);
		const targetElement = document.getElementById(id);
		if (targetElement) {
			observerRef.current.observe(targetElement);
		}

		// Clean up the observer when the component unmounts
		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	},[]);
	return(
	<div className={"border-l-black border-l-2 my-4 pl-4 shadow py-4 custom-sink-up"} id={id}>
		<h1 className={"text-2xl"}>{h1}</h1>
		<p>{p}</p>
	</div>
	);
}