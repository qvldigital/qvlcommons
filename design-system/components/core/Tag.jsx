import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function Tag({children,selected=false,onRemove,onClick,removeLabel="Entfernen",style,...rest}){
  const [hover,setHover]=React.useState(false);
  const interactive=Boolean(onClick);
  const remove=onRemove?<button type="button" aria-label={removeLabel} onClick={(e)=>{e.stopPropagation();onRemove(e)}}
    style={{border:"none",background:"transparent",color:"inherit",cursor:"pointer",font:"inherit",lineHeight:1,padding:0}}>×</button>:null;

  if(selected){
    return <span onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{display:"inline-flex",alignItems:"center",gap:"var(--space-2)",height:32,padding:"0 10px",
        background:"var(--surface-inverse)",color:"var(--text-on-inverse)",fontFamily:"var(--font-body)",
        fontWeight:"var(--weight-emphasis)",fontSize:"var(--text-small)",cursor:interactive?"pointer":"default",
        ...chamfer(6,2),...style}} {...rest}>{children}{remove}</span>;
  }
  // Unselected has a 1px border — a clipped inset box-shadow leaves the chamfer's diagonal cut
  // unstroked (see Button.jsx), so the border is a second, outer chamfer layer instead.
  return <span onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{display:"inline-flex",height:32,padding:1,background:"var(--border-subtle)",
      cursor:interactive?"pointer":"default",...chamfer(6,2),...style}} {...rest}>
    <span style={{display:"inline-flex",alignItems:"center",gap:"var(--space-2)",height:30,padding:"0 9px",
      background:hover&&interactive?"var(--surface-brand-soft)":"var(--surface-card)",color:"var(--text-heading)",
      fontFamily:"var(--font-body)",fontWeight:"var(--weight-emphasis)",fontSize:"var(--text-small)",
      transition:"background var(--duration-fast) var(--ease-standard)",...chamfer(5,2)}}>{children}{remove}</span>
  </span>;
}
