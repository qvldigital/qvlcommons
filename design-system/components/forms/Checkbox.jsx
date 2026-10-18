import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function Checkbox({label,description,checked,defaultChecked,disabled,onChange,id,style,...rest}){
  const uid=React.useId();
  const fid=id||uid;
  const [focus,setFocus]=React.useState(false);
  const isControlled=checked!==undefined;
  const [inner,setInner]=React.useState(Boolean(defaultChecked));
  const on=isControlled?checked:inner;
  return <label htmlFor={fid} style={{display:"flex",gap:"var(--space-3)",alignItems:"flex-start",
    cursor:disabled?"not-allowed":"pointer",opacity:disabled?0.55:1,minHeight:"var(--tap-min)",...style}}>
    <span style={{flex:"none",marginTop:2,background:focus?"var(--focus-ring)":on?"var(--qvl-petrol)":"var(--border-default)",
      padding:focus?3:2,...chamfer(5,4),transition:"background var(--duration-fast) var(--ease-standard)"}}>
      <span style={{display:"flex",alignItems:"center",justifyContent:"center",width:20,height:20,
        background:on?"var(--qvl-petrol)":"var(--surface-card)",color:"var(--qvl-white)",
        fontFamily:"var(--font-body)",fontWeight:600,fontSize:14,lineHeight:1,...chamfer(4,4)}}>{on?"✓":""}</span>
    </span>
    <input id={fid} type="checkbox" checked={isControlled?checked:undefined} defaultChecked={isControlled?undefined:defaultChecked}
      disabled={disabled} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
      onChange={(e)=>{if(!isControlled)setInner(e.target.checked);onChange&&onChange(e)}}
      style={{position:"absolute",opacity:0,width:1,height:1}} {...rest}/>
    <span>
      <span style={{display:"block",fontWeight:"var(--weight-emphasis)",fontSize:"var(--text-body)"}}>{label}</span>
      {description?<span style={{display:"block",fontSize:"var(--text-small)",color:"var(--text-muted)"}}>{description}</span>:null}
    </span>
  </label>;
}
