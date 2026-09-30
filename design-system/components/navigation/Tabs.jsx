import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function Tabs({items=[],value,onChange,scrollable=true,style,...rest}){
  return <div role="tablist" style={{display:"flex",gap:"var(--space-1)",borderBottom:"2px solid var(--surface-divider)",
    overflowX:scrollable?"auto":"visible",...style}} {...rest}>
    {items.map(it=>{
      const id=typeof it==="string"?it:it.value;
      const label=typeof it==="string"?it:it.label;
      const active=id===value;
      return <button key={id} role="tab" aria-selected={active} onClick={()=>onChange&&onChange(id)}
        style={{flex:"none",border:"none",cursor:"pointer",background:active?"var(--qvl-petrol)":"transparent",
          color:active?"var(--qvl-white)":"var(--text-heading)",padding:"0 16px",height:44,
          fontFamily:"var(--font-display)",fontSize:"var(--text-body)",letterSpacing:"var(--tracking-display)",
          textTransform:"uppercase",whiteSpace:"nowrap",transition:"background var(--duration-fast) var(--ease-standard)",
          ...chamfer(8,2)}}>{label}{typeof it!=="string"&&it.count!==undefined?
            <span style={{marginLeft:8,opacity:0.8,fontFamily:"var(--font-body)",fontWeight:400,fontSize:"var(--text-small)"}}>{it.count}</span>:null}</button>;
    })}
  </div>;
}
