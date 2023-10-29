import Image from "next/image";

interface ImgBlockProps{src:string,width:string,height:string}
export default function ImgBlock({src,width,height}:ImgBlockProps){
	const style = {
		backgroundImage: `url("${src}")`,
		width: width,
		height: height
	};//style definition
	return(<Image src={src} alt={"image"} style={style}/>);
}//ImgBlock