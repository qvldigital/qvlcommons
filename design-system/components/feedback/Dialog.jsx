import React from "react";
import { Icon } from "../core/Icon.jsx";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function Dialog({open=false,title,children,footer,onClose,width=520,style,...rest}){
  if(!open) return null;
  return <div role="dialog" aria-modal="true" aria-label={title}
    style={{position:"fixed",inset:0,zIndex:80,display:"flex",alignItems:"center",justifyContent:"center",padding:"var(--space-4)"}}>
    <div onClick={onClose} style={{position:"absolute",inset:0,background:"var(--overlay-scrim)",opacity:"var(--overlay-scrim-alpha)"}}/>
    <div style={{position:"relative",width:"100%",maxWidth:width,filter:"var(--drop-block-orange)"}}>
      <div style={{background:"var(--border-default)",padding:3,...chamfer(14,4),...style}} {...rest}>
        <div style={{background:"var(--surface-card)",...chamfer(12,4)}}>
          <div style={{display:"flex",alignItems:"flex-start",gap:"var(--space-4)",padding:"var(--space-5) var(--space-5) 0"}}>
            <h2 style={{flex:1,margin:0,fontFamily:"var(--font-display)",fontSize:"var(--text-h2)",
              letterSpacing:"var(--tracking-display)",textTransform:"uppercase",color:"var(--text-heading)",lineHeight:1.05}}>{title}</h2>
            {onClose?<button type="button" aria-label="Schließen" onClick={onClose}
              style={{border:"none",background:"transparent",cursor:"pointer",color:"var(--text-heading)",padding:0}}>
              <Icon name="x" size={22}/></button>:null}
          </div>
          <div style={{padding:"var(--space-4) var(--space-5)",fontSize:"var(--text-body)"}}>{children}</div>
          {footer?<div style={{display:"flex",justifyContent:"flex-end",gap:"var(--space-2)",padding:"0 var(--space-5) var(--space-5)"}}>{footer}</div>:null}
        </div>
      </div>
    </div>
  </div>;
}
