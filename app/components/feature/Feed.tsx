//SSR 패칭을 이용합니다. React-Query는 이용하지 않도록 합니다.
interface FeedProps {src:string}
export default async function Feed({src}: FeedProps) {
	const res = await fetch(src);
	const data = await res.json();
	return(
	<div className={"custom-front-content-block"}>
		<div className={"w-full h-full p-4 bg-black text-white rounded-2xl"}>
			<h1 className={"text-2xl"}>{data.title}</h1>
			<p>{data.title}</p>
		</div>
	</div>
	);
}