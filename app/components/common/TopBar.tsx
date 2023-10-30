import "@/styles/Common.css";
import Link from "next/link";
import {ReactNode} from "react";
import SVGBLock from "@/app/components/common/SVGBlock";
import "@/styles/TopBar.css";
interface ElementType {text:string,class:string,href:string}
export default function TopBar({children}:{children:Array<ElementType>}){
	const menus:Array<ReactNode> = [];
	children.forEach((element:ElementType,index:number)=>{
		menus.push(<Link key={index} className={element.class} href={element.href}>{element.text}</Link>);
	});
	return(
	<div className={"custom-top-bar"}>
		<SVGBLock src={"/assets/svg/logo.svg"} width={(14*7).toString()} height={(14*4).toString()}/>
		<div className={"flex gap-8 items-center"}>
			{menus}
		</div>
	</div>
	);
}