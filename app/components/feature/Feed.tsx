//SSR 패칭을 이용합니다. React-Query는 이용하지 않도록 합니다.
import Link from "next/link";

interface FeedProps {src:string}
export default async function Feed({src}: FeedProps) {
	const res = await fetch(src);
	const data = await res.json();
	return(
	<div className={"custom-front-content-block relative"}>
		<div className={"w-full h-full p-4 rounded-2xl"}>
			<div className={"flex items-center"}>
				<h1 className={"font-light text-3xl pb-4"}>{data.h1}</h1>
				<h3 className={"w-fit h-fit pb-1 pl-2 pr-2 font-light"}>{"FEED"}</h3>
			</div>
			<p className={"text-2xl font-light"}>{data.p}</p>
			<Link className={"absolute bottom-4 right-4 custom-arrow font-light"} href="/">{"Explore Neuralink's Mission"}</Link>
		</div>
	</div>
	);
}