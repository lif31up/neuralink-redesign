import React from "react";
import Image from "next/image";
import "@/styles/Common.css"; import "@/styles/ImageArticle.css";
interface ImageArticleProps{src:string,h1:string,p:string,link:React.ReactNode}
export default function ImageArticle({children,className}:{children:ImageArticleProps,className:string}){
	return(
	<div className={[className, "image-article"].join(" ").trim()}>
		<div className={"absolute w-full h-screen"}>
			<Image src={children.src} alt={"image-article"} layout={"fill"} objectFit={"cover"} objectPosition={"center"}/>
		</div>
		<div className={"image-article-top"}>
			<h1 className={"font-light"}>{children.h1}</h1>
			<p className={"text-2xl font-light w-5/6"}>{children.p}</p>
			{children.link}
		</div>
	</div>
	);
}