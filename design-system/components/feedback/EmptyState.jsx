import React from "react";
import { BallIcon } from "../core/Icon.jsx";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function EmptyState({title,description,action,style,...rest}){
  return <div style={{background:"var(--border-subtle)",padding:2,...chamfer(12,4),...style}} {...rest}>
    <div style={{textAlign:"center",padding:"var(--space-12) var(--space-6)",background:"var(--surface-card)",...chamfer(10,4)}}>
      <BallIcon size={56} tone="petrol" style={{margin:"0 auto var(--space-4)"}}/>
      <h3 style={{margin:"0 0 var(--space-2)",fontFamily:"var(--font-display)",fontSize:"var(--text-h2)",
        letterSpacing:"var(--tracking-display)",textTransform:"uppercase",color:"var(--text-heading)"}}>{title}</h3>
      {description?<p style={{margin:"0 auto var(--space-5)",maxWidth:"44ch",color:"var(--text-muted)"}}>{description}</p>:null}
      {action}
    </div>
  </div>;
}
