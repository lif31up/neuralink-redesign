'use client';//CSR
import "@/styles/ExpendableTagTable.css";
import {useState} from "react";
export default function ExpandableTagTable(){
	return(
	<div className={"custom-expandable-tag-table"}>
		<ExpandableTag
		h1={"Why did Neuralink create a Patient Registry?"}
		p={"We are committed to developing devices with input from the communities and groups we aim to serve. Until now, we’ve received input from a small number of individuals with various levels of motor impairment. The Patient Registry will allow us to understand the needs of a larger, more diverse group of individuals with various conditions. The Patient Registry will also help us determine your preliminary eligibility for current and/or future Neuralink clinical trials."}/>
		<ExpandableTag
		h1={"Who can participate in the Patient Registry?"}
		p={"Anyone within the United States who is at least 18 years old and the age of majority in their state, who is able to consent, and who has quadriplegia, paraplegia, vision loss, hearing loss, the inability to speak, and/or major limb amputation (affecting above or below the elbow and/or above or below the knee), is invited to participate in the Patient Registry."}/>
		<ExpandableTag
		h1={"What benefit do I gain from adding my information to the Neuralink Patient Registry?"}
		p={"While there is no direct benefit from participating in the Patient Registry, you may benefit in the future from research stemming from the Patient Registry and any commercial products that may result. If you submit a completed Patient Registry application, we may also contact you or your legally authorized representative about current and/or future Neuralink clinical trials you may be eligible for."}/>
		<ExpandableTag
		h1={"What information is collected through the Patient Registry?"}
		p={"We will ask about current and past medical information, demographics, education, work, and the assistive technologies you use. To participate in the Patient Registry, we will ask you for your authorization to release your medical records. If you have a legally authorized representative, we will ask for their contact information."}/>
		<ExpandableTag
		h1={"How will my information be used and by whom?"}
		p={"We will not sell the data you provide to any third party. We may share such data with Neuralink’s affiliates, third parties acting on behalf of Neuralink and research partners. The information you provide may be used to determine your potential eligibility for current and/or future Neuralink clinical trials as well as for research purposes and potential product development. Your contact information may also be used to communicate with you (or your legally authorized representative) about your Patient Registry application, Neuralink, Neuralink clinical trials, or Neuralink’s technology. If required, we may also share information you provide with regulatory agencies, such as an institutional review board (IRB), to comply with Neuralink’s regulatory obligations or to comply with the law. Only authorized Neuralink personnel with the appropriate privacy and confidentiality training and authorized third parties will be able to access the identifiable personal information you provide. We may create de-identified data from the identifiable personal information you provide by excluding information that personally identifies you. This de-identified data may be presented at scientific, professional, or company meetings or published in scientific journals."}/>
		<ExpandableTag
		h1={"Does adding my information to the Patient Registry help me qualify for current and/or future clinical trials?"}
		p={"We may use the information you provide to determine your preliminary eligibility for current and/or future Neuralink clinical trials. Participation in the Patient Registry is however not a prerequisite or sufficient for later participation in a Neuralink clinical trial. You will not be considered enrolled into any Neuralink clinical trials and/or research study by participating in the Patient Registry. You will be asked to review and sign a separate informed consent document before participating in any current and/or future Neuralink clinical trial. Neuralink currently has one clinical trial available for enrollment."}/>
	</div>
	);
}
interface ExpandableTagProps {h1:string,p:string}
function ExpandableTag({h1,p}:ExpandableTagProps){
	const [active,setActive] = useState(false);
	const clickHandler = ()=>{setActive(!active);}
	if(active){
		return(
		<div className={"custom-expandable-tag"} onClick={clickHandler}>
			<h2>{"▼"}</h2><h1>{h1}</h1>
			<span><p>{p}</p></span>
		</div>
		);
	}
	return(
	<div className={"custom-expandable-tag"} onClick={clickHandler}>
		<h2>{"►"}</h2><h1>{h1}</h1>
	</div>
	);
}