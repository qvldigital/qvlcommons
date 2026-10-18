import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});
// The label wraps only its own text: hint and error sit outside it and are linked to the control with aria-describedby.
function Field({label,hint,error,required,htmlFor,msgId,children}){
  return <div>
    <label htmlFor={htmlFor} style={{display:"block",fontFamily:"var(--font-display)",fontSize:"var(--text-eyebrow)",
      letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",color:"var(--text-heading)",marginBottom:"var(--space-2)"}}>
      {label}{required?<span aria-hidden="true" style={{color:"var(--text-heading)"}}> *</span>:null}
    </label>
    {children}
    {error?<span id={msgId} style={{display:"block",marginTop:"var(--space-2)",fontSize:"var(--text-small)",fontWeight:"var(--weight-emphasis)",color:"var(--text-danger)"}}>{error}</span>
      :hint?<span id={msgId} style={{display:"block",marginTop:"var(--space-2)",fontSize:"var(--text-small)",color:"var(--text-muted)"}}>{hint}</span>:null}
  </div>;
}

export function Select({label,hint,error,required,options=[],placeholder,id,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const uid=React.useId();
  const fid=id||uid;
  const msgId=fid+"-msg";
  // aria-describedby only when Field renders the message (label present); aria-required keeps native validation out of it.
  const a11y={"aria-invalid":error?true:undefined,"aria-describedby":label&&(error||hint)?msgId:undefined,"aria-required":required?true:undefined};
  const edge=error?"var(--border-accent)":focus?"var(--focus-ring)":"var(--border-default)";
  const control=<div style={{background:edge,padding:error||focus?3:2,...chamfer(8,4),position:"relative",...style}}>
    <select id={fid} {...a11y} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
      style={{width:"100%",height:42,border:"none",outline:"none",background:"var(--surface-card)",font:"inherit",
        fontWeight:"var(--weight-body)",color:"var(--text-body-color)",padding:"0 36px 0 12px",appearance:"none",...chamfer(7,4)}} {...rest}>
      {placeholder?<option value="">{placeholder}</option>:null}
      {options.map(o=>{const v=typeof o==="string"?o:o.value;const l=typeof o==="string"?o:o.label;
        return <option key={v} value={v}>{l}</option>})}
    </select>
    <span aria-hidden="true" style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",
      width:0,height:0,borderLeft:"5px solid transparent",borderRight:"5px solid transparent",
      borderTop:"7px solid var(--text-heading)",pointerEvents:"none"}}/>
  </div>;
  return label?<Field label={label} hint={hint} error={error} required={required} htmlFor={fid} msgId={msgId}>{control}</Field>:control;
}
