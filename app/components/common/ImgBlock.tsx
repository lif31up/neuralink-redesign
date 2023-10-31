interface ImgBlockProps{src:string,width:string,height:string}
export default function ImgBlock({src,width,height}:ImgBlockProps){
	const style = {
		backgroundImage: `url("${src}")`,
		widows: width,
		height: height,
		backgroundSize: "cover",
		backgroundPosition: "center"
	};
	return(<div style={style} className={"rounded-2xl"}/>);
}//ImgBlock