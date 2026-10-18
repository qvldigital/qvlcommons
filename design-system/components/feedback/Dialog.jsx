import React from "react";
import { Icon } from "../core/Icon.jsx";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function Dialog({open=false,title,children,footer,onClose,width=520,closeLabel="Schließen",style,...rest}){
  const boxRef=React.useRef(null);
  const closeRef=React.useRef(onClose);
  closeRef.current=onClose;
  // Modal keyboard behaviour: focus moves into the dialog, Tab stays inside, Escape closes, focus returns to the opener.
  React.useEffect(()=>{
    if(!open) return;
    const box=boxRef.current;
    const opener=document.activeElement;
    const focusables=()=>Array.from(box.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')).filter(el=>el.offsetParent!==null);
    (focusables()[0]||box).focus();
    const onKey=(e)=>{
      if(e.key==="Escape"&&closeRef.current){e.stopPropagation();closeRef.current();return;}
      if(e.key!=="Tab") return;
      const f=focusables();
      if(!f.length){e.preventDefault();box.focus();return;}
      const first=f[0],last=f[f.length-1],on=document.activeElement;
      if(e.shiftKey&&(on===first||on===box)){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&(on===last||on===box)){e.preventDefault();first.focus();}
    };
    document.addEventListener("keydown",onKey);
    return()=>{document.removeEventListener("keydown",onKey);if(opener&&opener.focus) opener.focus();};
  },[open]);
  if(!open) return null;
  return <div ref={boxRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label={title}
    style={{position:"fixed",inset:0,zIndex:80,display:"flex",alignItems:"center",justifyContent:"center",padding:"var(--space-4)",outline:"none"}}>
    <div onClick={onClose} style={{position:"absolute",inset:0,background:"var(--overlay-scrim)",opacity:"var(--overlay-scrim-alpha)"}}/>
    <div style={{position:"relative",width:"100%",maxWidth:width,filter:"var(--drop-block-orange)"}}>
      <div style={{background:"var(--border-default)",padding:3,...chamfer(14,4),...style}} {...rest}>
        <div style={{background:"var(--surface-card)",...chamfer(12,4)}}>
          <div style={{display:"flex",alignItems:"flex-start",gap:"var(--space-4)",padding:"var(--space-5) var(--space-5) 0"}}>
            <h2 style={{flex:1,margin:0,fontFamily:"var(--font-display)",fontSize:"var(--text-h2)",
              letterSpacing:"var(--tracking-display)",textTransform:"uppercase",color:"var(--text-heading)",lineHeight:1.05}}>{title}</h2>
            {onClose?<button type="button" aria-label={closeLabel} onClick={onClose}
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
