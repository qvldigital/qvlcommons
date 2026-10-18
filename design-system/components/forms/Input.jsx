import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});
function Field({label,hint,error,required,htmlFor,children}){
  return <label htmlFor={htmlFor} style={{display:"block"}}>
    <span style={{display:"block",fontFamily:"var(--font-display)",fontSize:"var(--text-eyebrow)",
      letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",color:"var(--text-heading)",marginBottom:"var(--space-2)"}}>
      {label}{required?<span style={{color:"var(--qvl-orange)"}}> *</span>:null}
    </span>
    {children}
    {error?<span style={{display:"block",marginTop:"var(--space-2)",fontSize:"var(--text-small)",fontWeight:"var(--weight-emphasis)",color:"var(--qvl-orange-press)"}}>{error}</span>
      :hint?<span style={{display:"block",marginTop:"var(--space-2)",fontSize:"var(--text-small)",color:"var(--text-muted)"}}>{hint}</span>:null}
  </label>;
}

export function Input({label,hint,error,required,multiline=false,rows=4,id,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const uid=React.useId();
  const fid=id||uid;
  const edge=error?"var(--qvl-orange)":focus?"var(--focus-ring)":"var(--border-subtle)";
  const shell={background:edge,padding:error||focus?3:1,...chamfer(8,4),
    transition:"background var(--duration-fast) var(--ease-standard)"};
  const field={width:"100%",border:"none",outline:"none",background:"var(--surface-card)",
    font:"inherit",fontWeight:"var(--weight-body)",color:"var(--text-body-color)",
    padding:multiline?"10px 12px":"0 12px",height:multiline?"auto":42,minHeight:multiline?undefined:42,
    ...chamfer(7,4),resize:multiline?"vertical":undefined};
  const el=multiline
    ? <textarea id={fid} rows={rows} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} style={field} {...rest}/>
    : <input id={fid} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} style={field} {...rest}/>;
  const control=<div style={{...shell,...style}}>{el}</div>;
  return label?<Field label={label} hint={hint} error={error} required={required} htmlFor={fid}>{control}</Field>:control;
}
