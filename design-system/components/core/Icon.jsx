import React from "react";

/* Resolve /assets against the project root by locating the linked styles.css.
   Works whether the page sits at the root or three folders deep. */
const dsBase=()=>{
  if(typeof document==="undefined") return "/";
  const l=document.querySelector('link[rel="stylesheet"][href$="styles.css"]')
    ||document.querySelector('link[rel="stylesheet"][href*="styles.css"]');
  if(l&&l.href) return l.href.replace(/styles\.css.*$/,"");
  return "/";
};
const asset=(p)=>dsBase()+p.replace(/^\//,"");

const BASE="https://unpkg.com/lucide-static@0.544.0/icons/";

export function Icon({name,size=20,color="currentColor",strokeWidth,label,style,...rest}){
  const url=`${BASE}${name}.svg`;
  return <span role={label?"img":"presentation"} aria-label={label} aria-hidden={label?undefined:true}
    style={{display:"inline-block",flex:"none",width:size,height:size,background:color,
      WebkitMask:`url(${url}) center / contain no-repeat`,mask:`url(${url}) center / contain no-repeat`,...style}} {...rest}/>;
}

/** Brand volleyball mark as a raster icon (extracted from the CI backgrounds). */
export function BallIcon({size=24,tone="petrol",style,...rest}){
  const src={petrol:"ball-petrol.png","petrol-dark":"ball-petrol-dark.png",orange:"ball-orange.png",white:"ball-white.png"}[tone]||"ball-petrol.png";
  return <img src={asset("assets/icons/"+src)} alt="" width={size} height={size} style={{flex:"none",...style}} {...rest}/>;
}
