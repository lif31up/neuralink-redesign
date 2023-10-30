import Link from "next/link";
import "@/styles/Footer.css";
import Image from "next/image";
import SVGBLock from "@/app/components/common/SVGBlock";
export default function Footer({}){
	return(
	<section className={"custom-footer"}>
		<div className={"block"}>
			<h1 className={"text-gray-600"}>Company</h1>
			<Link className={"block hover:text-gray-400"} href={"/career"}>Career</Link>
			<Link className={"block hover:text-gray-400"} href={"https://neuralink.com/blog/"}>Blog</Link>
		</div>
		<div>
			<h1 className={"text-gray-600"}>Contact</h1>
			<Link className={"block hover:text-gray-400"} href={"https://gmail.com"}>Email Now</Link>
			<Link className={"block hover:text-gray-400"} href={"https://linkedin.com"}>LinkedIn</Link>
			<Link className={"block hover:text-gray-400"} href={"https://twitter.com/?lang=ko"}>X</Link>
			<Link className={"block hover:text-gray-400"} href={"https://youtube.com"}>Youtube</Link>
		</div>
		<div>
			<h1 className={"text-gray-600"}>Legal</h1>
			<Link className={"block hover:text-gray-400"} href={"/handler_page"}>Privacy Policy</Link>
			<Link className={"block hover:text-gray-400"} href={"/handler_page"}>Terms of Use</Link>
		</div>
		<div className={"absolute bottom-4 left-4 p-4"}>
			<SVGBLock src={"/assets/svg/logo.svg"} width={(14 * 5).toString()} height={(14 * 2).toString()}/>
		</div>
	</section>
	);
}