import {ReactNode} from "react";
import "@/styles/Section.css";
interface SectionChildrenType {children:ReactNode,className:string}
export default function Section({children,className}:SectionChildrenType){
	return(<div className={["custom-section",className].join(" ").trim()}>{children}</div>);
}