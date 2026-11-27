import React from "react";
// Chamfer: corner-shape: bevel where supported (outline and borders follow the bevel), clip-path otherwise. See bundle.css "Chamfer".
// Fields, tabs and toggles have square corners while --chamfer-field-scale is 0 (trial since 27.11.2026, see README "Chamfer"); 1 brings their chamfers back.
const fieldCh=(n)=>`calc(var(--chamfer-field-scale,1)*${n}px)`;
const chamfer=(n=10,corners=2)=>{const ch=fieldCh(n);return{clipPath:`var(--qvl-chamfer-clip,${corners===4
  ?`polygon(${ch} 0,calc(100% - ${ch}) 0,100% ${ch},100% calc(100% - ${ch}),calc(100% - ${ch}) 100%,${ch} 100%,0 calc(100% - ${ch}),0 ${ch})`
  :`polygon(${ch} 0,100% 0,100% calc(100% - ${ch}),calc(100% - ${ch}) 100%,0 100%,0 ${ch})`})`,
  borderRadius:corners===4?`calc(var(--qvl-bevel,0)*${ch})`:`calc(var(--qvl-bevel,0)*${ch}) 0`,
  cornerShape:"bevel",overflow:"var(--qvl-bevel-overflow,visible)"};};
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

export function Input({label,hint,error,required,multiline=false,rows=4,id,style,...rest}){
  const uid=React.useId();
  const fid=id||uid;
  const msgId=fid+"-msg";
  // aria-describedby only when Field renders the message (label present); aria-required keeps native validation out of it.
  const a11y={"aria-invalid":error?true:undefined,"aria-describedby":label&&(error||hint)?msgId:undefined,"aria-required":required?true:undefined};
  // Focus: the double ring comes from the unclipped .qvl-focus-field wrapper (bundle.css), as on Button and Tabs.
  const edge=error?"var(--border-accent)":"var(--border-default)";
  const shell={background:edge,padding:error?3:2,...chamfer(8,4),
    transition:"background var(--duration-fast) var(--ease-standard)"};
  const field={width:"100%",border:"none",outline:"none",background:"var(--surface-card)",
    font:"inherit",fontWeight:"var(--weight-body)",color:"var(--text-body-color)",
    padding:multiline?"10px 12px":"0 12px",height:multiline?"auto":44,minHeight:multiline?undefined:44,
    ...chamfer(7,4),resize:multiline?"vertical":undefined};
  const el=multiline
    ? <textarea id={fid} rows={rows} {...a11y} style={field} {...rest}/>
    : <input id={fid} {...a11y} style={field} {...rest}/>;
  const control=<div className="qvl-focus-field"><div style={{...shell,...style}}>{el}</div></div>;
  return label?<Field label={label} hint={hint} error={error} required={required} htmlFor={fid} msgId={msgId}>{control}</Field>:control;
}
