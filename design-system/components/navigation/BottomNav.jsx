import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function BottomNav({items=[],value,onChange,style,...rest}){
  return <nav style={{display:"flex",background:"var(--surface-inverse)",borderTop:"3px solid var(--border-accent)",...style}} {...rest}>
    {items.map(it=>{
      const on=it.value===value;
      return <button key={it.value} onClick={()=>onChange&&onChange(it.value)}
        style={{flex:1,border:"none",background:on?"color-mix(in srgb,var(--surface-inverse) 78%,#000)":"transparent",
          color:on?"var(--text-on-inverse-accent)":"var(--text-on-inverse)",minHeight:"var(--tap-min)",padding:"8px 4px",
          display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer",
          transition:"background var(--duration-fast) var(--ease-standard)"}}>
        {it.icon}
        <span style={{fontFamily:"var(--font-display)",fontSize:"var(--text-caption)",letterSpacing:"var(--tracking-display)",
          textTransform:"uppercase",lineHeight:1}}>{it.label}</span>
      </button>;
    })}
  </nav>;
}
