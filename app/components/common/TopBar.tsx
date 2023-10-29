import ImgBlock from "@/app/components/common/ImgBlock";
import "@/styles/Common.css";
import Link from "next/link";
import {ReactNode} from "react";
import SVGBLock from "@/app/components/common/SVGBlock";
interface ElementType {text:string,class:string,href:string}
export default function TopBar({children}:{children:Array<ElementType>}){
	const menus:Array<ReactNode> = [];
	children.forEach((element:ElementType,index:number)=>{
		menus.push(<Link key={index} className={element.class} href={element.href}>{element.text}</Link>);
	});
	return(
	<div className={"pl-4 pr-16 flex items-center h-16 w-screen justify-between border-b-gray-200 border-2 fixed bg-white z-10"}>
		<SVGBLock src={"/assets/svg/logo.svg"} width={(14*7).toString()} height={(14*4).toString()}/>
		<div className={"flex gap-8 items-center"}>
			{menus}
		</div>
	</div>
	);
}