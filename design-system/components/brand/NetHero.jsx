import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

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

const BGS={
  "grey-petrol":"/assets/backgrounds/net-ball-grey-petrol.png",
  "grey-orange":"/assets/backgrounds/net-ball-grey-orange.png",
  "grey-yellow":"/assets/backgrounds/net-ball-grey-yellow.png",
  "grey-grey":"/assets/backgrounds/net-ball-grey-grey.png",
  "petrol-grey":"/assets/backgrounds/net-ball-petrol-grey.png",
  "petrol-petrol":"/assets/backgrounds/net-ball-petrol-petrol.png",
  "orange-petrol":"/assets/backgrounds/net-ball-orange-petrol.png",
  "orange-petrol-v2":"/assets/backgrounds/net-ball-orange-petrol-v2.png"
};

export function NetHero({background="grey-petrol",eyebrow,title,lead,actions,align="left",minHeight=380,inkOnDark,style,...rest}){
  const dark=background.startsWith("petrol");
  const ink=inkOnDark!==undefined?(inkOnDark?"var(--text-on-inverse)":"var(--text-heading)"):(dark?"var(--text-on-inverse)":"var(--text-heading)");
  return <section style={{position:"relative",minHeight,display:"flex",alignItems:"flex-end",
    backgroundImage:`url(${asset(BGS[background]||BGS["grey-petrol"])})`,backgroundSize:"cover",
    backgroundPosition:"center top",...style}} {...rest}>
    <div style={{maxWidth:"var(--container-max)",width:"100%",margin:"0 auto",
      padding:"var(--space-16) var(--gutter-desktop) var(--space-12)",
      textAlign:align,display:"flex",flexDirection:"column",alignItems:align==="center"?"center":"flex-start",gap:"var(--space-4)"}}>
      {eyebrow?<span style={{background:"var(--surface-accent)",color:"var(--text-on-accent)",padding:"4px 12px",
        fontFamily:"var(--font-display)",fontSize:"var(--text-eyebrow)",letterSpacing:"var(--tracking-eyebrow)",
        textTransform:"uppercase",...chamfer(5,2)}}>{eyebrow}</span>:null}
      {title?<h1 style={{margin:0,fontFamily:"var(--font-display)",fontSize:"var(--text-display-1)",
        lineHeight:"var(--leading-display)",letterSpacing:"var(--tracking-display)",textTransform:"uppercase",
        color:ink,maxWidth:"20ch"}}>{title}</h1>:null}
      {lead?<p style={{margin:0,maxWidth:"48ch",fontSize:"var(--text-lead)",lineHeight:"var(--leading-tight)",
        color:dark?"var(--text-on-inverse)":"var(--text-body-color)",background:dark?"transparent":"color-mix(in srgb,var(--surface-card) 82%,transparent)",
        padding:dark?0:"8px 10px"}}>{lead}</p>:null}
      {actions?<div style={{display:"flex",flexWrap:"wrap",gap:"var(--space-3)"}}>{actions}</div>:null}
    </div>
  </section>;
}
