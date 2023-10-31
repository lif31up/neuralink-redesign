export default function SVGBLock({src,width,height}:{src:string,width:string,height:string}){
	return(<object data={src} width={width} height={height}/>);
}