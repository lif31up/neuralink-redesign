import "@/styles/FrontContentj.css";
import ImageScroller from "@/app/components/feature/ImageScroller";
import Feed from "@/app/components/feature/Feed";
import PatientRegistry from "@/app/components/feature/PatientRegistry";
export default function FrontContent(){
	return(
	<div className={"custom-front-content"}>
		<div className={"custom-front-content-left"}>
			<ImageScroller/>
		</div>
		<div className={"custom-front-content-right"}>
			<div className={"custom-front-content-right-top"}>
				<PatientRegistry/>
			</div>
			<div className={"custom-front-content-right-bottom"}>
				<Feed src={"https://raw.githubusercontent.com/lif31up/introduce/main/public/assets/json/feed.json"}/>
			</div>
		</div>
	</div>
	);
}