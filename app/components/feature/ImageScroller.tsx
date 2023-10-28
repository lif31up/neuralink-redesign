'use client';//CSR입니다. 최적화를 위해 정적인 논리를 권장합니다.
import "@/styles/ImageScroller.css";
import {atom, RecoilRoot, useRecoilState, useRecoilValue} from "recoil";
import {useCallback} from "react";
export default function RecoilImageScroller(){
	return(
	<RecoilRoot>
		<ImageScroller/>
	</RecoilRoot>
	);
}
// @ts-ignore
const activeIndexAtom = new atom({key:"activeIndexAtom",default:0});
const ImageScrollerData:Array<{text:string,src:string,desc:string}> = [
	{text:"Potential Impact",src:"/assets/images/front_0.jpg",desc:"Brain-computer interfaces have the potential to change lives for the better. We want to bring this technology from the lab into peoples' homes."},
	{text:"Who It's For",src:"/assets/images/front_1.jpg",desc:"We are currently focused on giving people with quadriplegia the ability to control their computers and mobile devices with their thoughts."},
	{text:"Our Approach",src:"/assets/images/front_2.webp",desc:"We keep the people who will use our products in mind, emphasizing safety, accessibility, and reliability during our engineering process."},
	{text:"What's Next",src:"/assets/images/front_3.webp",desc:"In the future, we hope to restore capabilities such as vision, motor function, and speech, and eventually expand how we experience the world."}
];
function ImageScroller({}){
	const activeStatus:Array<boolean> = new Array(ImageScrollerData.length).fill(false);
	const activeIndex:number = useRecoilValue(activeIndexAtom);
	activeStatus[activeIndex] = true;
	return(
	<div className={"custom-image-scroller"} style={{backgroundImage: `url("${ImageScrollerData[activeIndex].src}")`}}>
		<div className={"custom-image-scroller-button-table"}>
			<Menu text={ImageScrollerData[0].text} active={activeStatus[0]} index={0}/>
			<Menu text={ImageScrollerData[1].text} active={activeStatus[1]} index={1}/>
			<Menu text={ImageScrollerData[2].text} active={activeStatus[2]} index={2}/>
			<Menu text={ImageScrollerData[3].text} active={activeStatus[3]} index={3}/>
		</div>
		<h1>{ImageScrollerData[activeIndex].desc}</h1>
	</div>
	);
}
interface MenuProps{text:string,active:boolean,index:number}
function Menu({text,active,index}:MenuProps){
	const [activeIndex,setActiveIndex] = useRecoilState(activeIndexAtom);
	const clickHandler = useCallback(()=>{
		setActiveIndex(index);
	},[false]);
	return(
	<button className={active ? "custom-active":""} onClick={clickHandler}>
		<div className={"custom-bullet"}/>
		{text}
	</button>
	);
}