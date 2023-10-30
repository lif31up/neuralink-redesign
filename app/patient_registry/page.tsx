import TopBar from "@/app/components/common/TopBar";
import ExpandableTagTable from "@/app/components/feature/ExpendableTagTable";
import Footer from "@/app/components/common/Footer";
import Section from "@/app/components/common/Section";

export default function patientRegistry(){
	return(<>
		<title>Patient Registry | Nueralink</title>
		<main className={"block min-h-screen bg-white"}>
			<TopBar>{[
				{text:"Career",href:"",class:"p-0 m-0"},
				{text:"Contact",href:"",class:"p-0 m-0"},
				{text:"Patient Registry",href:"/patient_registry",class:"custom-outline p-1 rounded-2xl px-4 hover:bg-black hover:text-white"}
			]}</TopBar>
			<div className={"h-16"}/>
			<Section>
				<h1>{"Patient Registry"}</h1>
				<p className={"text-2xl"}>{"If you're interested in learning whether you may qualify for current and/or future Neuralink clinical trials, consider joining our Patient Registry."}</p>
			</Section>
			<Section>
				<ExpandableTagTable/>
			</Section>
			<Section>
				<h1>{"Apply for Consideration"}</h1>
				<p className={"text-2xl"}>{"If you're interested in helping us develop general-purpose brain-computer interfaces with the potential to help restore independence to individuals with disabilities, consider joining the Patient Registry. If you have any questions or concerns, feel free to reach out to patientregistry@neuralink.com"}</p>
			</Section>
		</main>
		<Footer/>
	</>);
}