'use client';
import "@/styles/PopUp.css";
import {useEffect, useState} from "react";
export default function PopUp({}){
	//간단한 클라이언트 쿠키 확인 기능입니다.
	const [active,setActive] = useState(true);
	useEffect(()=>{
		//document는 마운트 이후에만 사용할 수 있습니다. 따라서 useEffect 안에서만 이가 동작하도록 작성합니다.
		if(document.cookie === "true"){setActive(true);}
		else{setActive(false);}
	},[]);
	const clickHandler = ()=>{document.cookie = "true"; setActive(true); console.log(document.cookie);}
	if(active){return(<></>);}
	return(
	<div className={"pop-up"}>
		<div className={"bg-white p-4 grid justify-items-center"}>
			<h1 className={"p-4"}>{"제 사이트에 방문해주셔서 감사합니다. 다음에 또 오세요."}</h1>
			<button onClick={clickHandler} className={"bg-black text-white p-4 w-fit"}>{"클릭하여 팝업 해제하기"}</button>
		</div>
	</div>
	);
}