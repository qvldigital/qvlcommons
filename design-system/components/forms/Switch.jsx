import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function Switch({label,description,checked=false,disabled,onChange,id,style,...rest}){
  const uid=React.useId();
  const fid=id||uid;
  const [focus,setFocus]=React.useState(false);
  return <label htmlFor={fid} style={{display:"flex",gap:"var(--space-3)",alignItems:"center",justifyContent:"space-between",
    cursor:disabled?"not-allowed":"pointer",opacity:disabled?0.55:1,minHeight:"var(--tap-min)",...style}}>
    <span>
      <span style={{display:"block",fontWeight:"var(--weight-emphasis)"}}>{label}</span>
      {description?<span style={{display:"block",fontSize:"var(--text-small)",color:"var(--text-muted)"}}>{description}</span>:null}
    </span>
    <span style={{flex:"none",background:focus?"var(--qvl-yellow)":"transparent",padding:focus?3:0,...chamfer(6,2)}}>
      <span style={{display:"block",width:52,height:28,padding:3,
        background:checked?"var(--qvl-petrol)":"var(--switch-off)",
        transition:"background var(--duration-base) var(--ease-standard)",...chamfer(5,2)}}>
        <span style={{display:"block",width:22,height:22,background:checked?"var(--qvl-orange)":"var(--qvl-white)",
          transform:checked?"translateX(24px)":"translateX(0)",
          transition:"transform var(--duration-base) var(--ease-standard),background var(--duration-base) var(--ease-standard)",
          ...chamfer(4,2)}}/>
      </span>
    </span>
    <input id={fid} type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={onChange}
      onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
      style={{position:"absolute",opacity:0,width:1,height:1}} {...rest}/>
  </label>;
}
