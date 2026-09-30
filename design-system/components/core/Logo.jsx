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

const FILES={
  "long-petrol":"/assets/logo/qvl-logo-long-petrol-orange.png",
  "long-orange":"/assets/logo/qvl-logo-long-orange-petrol.png",
  short:"/assets/logo/qvl-logo-short-petrol-orange.png",
  icon:"/assets/logo/qvl-icon-petrol-orange.png"
};

export function Logo({variant="long-petrol",height=48,style,...rest}){
  return <img src={asset(FILES[variant]||FILES["long-petrol"])} alt="Queer Volleyball League"
    style={{height,width:"auto",display:"block",...style}} {...rest}/>;
}
