import {ReactNode} from "react";
import "@/styles/Section.css";
interface SectionChildrenType {children: ReactNode}
export default function Section({children}:SectionChildrenType){
	return(
	<div className={"custom-section"}>
		{children}
	</div>
	);
}