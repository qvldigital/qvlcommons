import React from "react";
import { Badge } from "../core/Badge.jsx";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function PlayerRow({number,name,pronouns,role,status,action,alt=false,style,...rest}){
  return <div style={{display:"flex",alignItems:"center",gap:"var(--space-3)",padding:"10px 12px",
    background:alt?"var(--table-row-bg-alt)":"var(--table-row-bg)",borderTop:"1px solid var(--table-border)",...style}} {...rest}>
    <span style={{flex:"none",width:34,height:34,display:"inline-flex",alignItems:"center",justifyContent:"center",
      background:"var(--surface-brand-soft)",color:"var(--text-heading)",fontFamily:"var(--font-display)",
      fontSize:"var(--text-body)",...chamfer(5,2)}}>{number}</span>
    <span style={{flex:1,minWidth:0}}>
      <span style={{display:"block",fontWeight:"var(--weight-emphasis)",overflowWrap:"anywhere"}}>{name}
        {pronouns?<span style={{color:"var(--text-muted)",fontWeight:"var(--weight-body)"}}> ({pronouns})</span>:null}</span>
      {role?<span style={{display:"block",fontSize:"var(--text-caption)",letterSpacing:"var(--tracking-eyebrow)",
        textTransform:"uppercase",color:"var(--text-muted)"}}>{role}</span>:null}
    </span>
    {status?<Badge tone={status==="gemeldet"?"petrol":"grey"} size="sm">{status}</Badge>:null}
    {action}
  </div>;
}
