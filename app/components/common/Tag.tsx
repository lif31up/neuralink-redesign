interface TagProps {h1:string,p:string}
export default function Tag({h1,p}:TagProps){
	return(
	<div className={"border-l-black border-l-2 my-4 pl-4 shadow py-4"}>
		<h1 className={"text-2xl"}>{h1}</h1>
		<p>{p}</p>
	</div>
	);
}