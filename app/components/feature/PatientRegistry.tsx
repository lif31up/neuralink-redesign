import Link from "next/link";
export default function PatientRegistry(){
	return(
	<div className={"custom-front-content-block p-4 relative"}>
		<h1 className={"text-3xl font-light pb-4"}>Patient Registry</h1>
		<p className={"font-light text-2xl"}>
			Create a generalized brain interface to restore autonomy to those with unmet medical needs today and unlock human potential tomorrow.
		</p>
		<Link className={"absolute bottom-4 right-4 custom-arrow font-light"} href={"/patient_registry"}>{"Join Our Patient Registry"}</Link>
	</div>
	);
}