'use client';//csr
import {useCallback, useEffect, useState} from "react";
import "@/styles/PopUp.css";
export default function PopUp({}){
	const [accept,setAccept] = useState(false);
	useEffect(()=>{},[accept]);
	const clickHandler = useCallback(()=>{
		document.cookie = "ture"; setAccept(true);
	},[accept]);
	if(document.cookie === "ture"){return(<></>);}
	return(
	<div className={"pop-up"}>
		<div className={"bg-white p-4 grid justify-items-center"}>
			<h1 className={"p-4"}>{"제 사이트에 방문해주셔서 감사합니다. 다음에 또 오세요."}</h1>
			<button onClick={clickHandler} className={"bg-black text-white p-4 w-fit"}>{"클릭하여 팝업 해제하기"}</button>
		</div>
	</div>
	);
}