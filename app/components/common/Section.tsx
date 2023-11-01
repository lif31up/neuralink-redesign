import "@/styles/Section.css";
import React from "react";
//각 요소들에 대한 레이아웃을 지정합니다. 레이아웃은 반응적이어야 할 필요를 가지기 때문에 모두 SCSS를 통해 정의됩니다.
interface Sectionprops{className:string,layout:string,children:React.ReactNode}
export default function Section({className,layout,children}:Sectionprops){
	//tailwind와 SCSS 지정을 동시에 사용할 수 있습니다. 하지만 tailwind에 대한 지정은 자주 사용하지 않는 걸 권장합니다.
	return(<section className={[layout,className].join(" ").trim()}>{children}</section>);
}