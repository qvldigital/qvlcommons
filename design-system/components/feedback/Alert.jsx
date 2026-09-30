import React from "react";
import { Icon } from "../core/Icon.jsx";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

const TONES={
  info:{bg:"var(--status-info-bg)",fg:"var(--status-info-fg)",edge:"var(--border-default)",icon:"info"},
  success:{bg:"var(--status-success-bg)",fg:"var(--status-success-fg)",edge:"var(--border-default)",icon:"circle-check"},
  warn:{bg:"var(--status-warn-bg)",fg:"var(--text-heading)",edge:"var(--qvl-orange)",icon:"triangle-alert"},
  danger:{bg:"var(--status-danger-bg)",fg:"var(--qvl-white)",edge:"var(--qvl-orange)",icon:"octagon-alert"},
  safe:{bg:"var(--surface-card)",fg:"var(--text-heading)",edge:"var(--qvl-yellow)",icon:"shield-check"}
};

export function Alert({tone="info",title,children,onClose,style,...rest}){
  const t=TONES[tone]||TONES.info;
  return <div role={tone==="danger"?"alert":"status"} style={{background:t.edge,padding:3,...chamfer(10,4),...style}} {...rest}>
    <div style={{background:t.bg,color:t.fg,padding:"var(--space-4)",display:"flex",gap:"var(--space-3)",...chamfer(8,4)}}>
      <Icon name={t.icon} size={22} style={{marginTop:2}}/>
      <div style={{flex:1}}>
        {title?<div style={{fontFamily:"var(--font-display)",fontSize:"var(--text-h3)",letterSpacing:"var(--tracking-display)",
          textTransform:"uppercase",lineHeight:1.05,marginBottom:children?"var(--space-1)":0}}>{title}</div>:null}
        {children?<div style={{fontSize:"var(--text-small)",lineHeight:"var(--leading-tight)"}}>{children}</div>:null}
      </div>
      {onClose?<button type="button" aria-label="Schließen" onClick={onClose}
        style={{border:"none",background:"transparent",color:"inherit",cursor:"pointer",padding:0,lineHeight:1}}>
        <Icon name="x" size={18}/></button>:null}
    </div>
  </div>;
}
