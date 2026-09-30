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

const PATTERNS={
  documents:"/assets/patterns/pattern-documents-info.png",
  table:"/assets/patterns/pattern-table-medal.png",
  gear:"/assets/patterns/pattern-pads-cards.png"
};

export function PatternBand({pattern="table",height=160,children,plate=false,style,...rest}){
  return <div style={{position:"relative",minHeight:height,backgroundImage:`url(${asset(PATTERNS[pattern]||PATTERNS.table)})`,
    backgroundSize:"cover",backgroundPosition:"center",display:"flex",alignItems:"center",
    justifyContent:"center",padding:"var(--space-6)",...style}} {...rest}>
    {children?(plate?<div style={{background:"var(--surface-card)",padding:"var(--space-5) var(--space-6)",
      maxWidth:640,textAlign:"center",...chamfer(12,4)}}>{children}</div>:children):null}
  </div>;
}
