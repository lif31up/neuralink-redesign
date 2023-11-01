export function SVGBlock({src,width,height}:{src:string,width:string,height:string}){
	return(<object data={src} width={width} height={height}/>);
}//SVG를 사용하기 위한 블록입니다.