interface ImgBlockProps{src:string,width:string,height:string}
export default function ImgBlock({src,width,height}:ImgBlockProps){
	const style = {
		backgroundImage: `url("${src}")`,
		width: width,
		height: height
	};//style definition
	return(<div className={"bg-cover"} style={style}/>);
}//ImgBlock