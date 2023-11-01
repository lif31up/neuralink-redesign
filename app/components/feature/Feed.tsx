//SSR 패칭을 이용합니다. React-Query는 이용하지 않도록 합니다.
import Link from "next/link";

interface FeedProps {src:string}
export default async function Feed({src}: FeedProps) {
	const res = await fetch(src);
	const data = await res.json();
	return(
	<div className={"custom-front-content-block relative"}>
		<div className={"w-full h-full p-4 rounded-2xl"}>
			<h1 className={""}>{data.h1}</h1>
			<p className={"font-light text-2xl"}>{data.p}</p>
			<Link className={"absolute bottom-4 right-4 custom-arrow"} href="/">{"Explore Neuralink's Mission"}</Link>
		</div>
	</div>
	);
}