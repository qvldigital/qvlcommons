import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function Radio({label,description,name,value,checked,defaultChecked,disabled,onChange,id,style,...rest}){
  const uid=React.useId();
  const fid=id||uid;
  const [focus,setFocus]=React.useState(false);
  // Uncontrolled radios mirror the native checked state, re-read whenever any change event fires (a sibling in the group may have been picked).
  const isControlled=checked!==undefined;
  const ref=React.useRef(null);
  const [inner,setInner]=React.useState(Boolean(defaultChecked));
  React.useEffect(()=>{
    if(isControlled) return;
    const sync=()=>{if(ref.current) setInner(ref.current.checked);};
    sync();
    document.addEventListener("change",sync);
    return()=>document.removeEventListener("change",sync);
  },[isControlled]);
  const on=isControlled?checked:inner;
  return <label htmlFor={fid} style={{display:"flex",gap:"var(--space-3)",alignItems:"flex-start",
    cursor:disabled?"not-allowed":"pointer",opacity:disabled?0.55:1,minHeight:"var(--tap-min)",...style}}>
    <span style={{flex:"none",marginTop:2,background:focus?"var(--focus-ring)":on?"var(--control-on)":"var(--border-default)",
      padding:focus?3:2,...chamfer(5,4)}}>
      <span style={{display:"flex",alignItems:"center",justifyContent:"center",width:20,height:20,
        background:"var(--surface-card)",...chamfer(4,4)}}>
        <span style={{width:10,height:10,background:on?"var(--surface-accent)":"transparent",...chamfer(3,4)}}/>
      </span>
    </span>
    <input id={fid} ref={ref} type="radio" name={name} value={value} checked={checked} defaultChecked={defaultChecked}
      disabled={disabled} onChange={onChange} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
      style={{position:"absolute",opacity:0,width:1,height:1}} {...rest}/>
    <span>
      <span style={{display:"block",fontWeight:"var(--weight-emphasis)"}}>{label}</span>
      {description?<span style={{display:"block",fontSize:"var(--text-small)",color:"var(--text-muted)"}}>{description}</span>:null}
    </span>
  </label>;
}

export function RadioGroup({legend,children,style,...rest}){
  return <fieldset style={{border:"none",margin:0,padding:0,...style}} {...rest}>
    {legend?<legend style={{fontFamily:"var(--font-display)",fontSize:"var(--text-eyebrow)",
      letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",color:"var(--text-heading)",
      padding:0,marginBottom:"var(--space-3)"}}>{legend}</legend>:null}
    <div style={{display:"flex",flexDirection:"column",gap:"var(--space-2)"}}>{children}</div>
  </fieldset>;
}
