import React from "react";
import { Icon } from "../core/Icon.jsx";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function Toast({tone="petrol",message,action,onAction,onClose,style,...rest}){
  const tones={petrol:{bg:"var(--qvl-petrol)",fg:"var(--qvl-white)"},orange:{bg:"var(--qvl-orange)",fg:"var(--qvl-white)"},pink:{bg:"var(--qvl-pink)",fg:"var(--qvl-white)"}};
  const t=tones[tone]||tones.petrol;
  return <div role="status" style={{filter:"var(--drop-block-sm-petrol)",maxWidth:420,...style}} {...rest}>
    <div style={{display:"flex",alignItems:"center",gap:"var(--space-3)",background:t.bg,color:t.fg,padding:"12px 14px",...chamfer(8,2)}}>
      <span style={{flex:1,fontSize:"var(--text-small)",fontWeight:"var(--weight-emphasis)"}}>{message}</span>
      {action?<button type="button" onClick={onAction} style={{border:"none",background:"transparent",color:"inherit",
        cursor:"pointer",fontFamily:"var(--font-display)",letterSpacing:"var(--tracking-display)",textTransform:"uppercase",
        textDecoration:"underline",textDecorationThickness:2,textUnderlineOffset:3,padding:0}}>{action}</button>:null}
      {onClose?<button type="button" aria-label="Schließen" onClick={onClose} style={{border:"none",background:"transparent",
        color:"inherit",cursor:"pointer",padding:0,lineHeight:1}}><Icon name="x" size={16}/></button>:null}
    </div>
  </div>;
}

export function ToastStack({children,style,...rest}){
  return <div style={{position:"fixed",left:"50%",bottom:"var(--space-6)",transform:"translateX(-50%)",
    display:"flex",flexDirection:"column",gap:"var(--space-2)",zIndex:60,...style}} {...rest}>{children}</div>;
}
