import React from "react";
// Chamfer: corner-shape: bevel where supported (outline and borders follow the bevel), clip-path otherwise. See bundle.css "Chamfer".
// Fields, tabs and toggles have square corners while --chamfer-field-scale is 0 (trial since 27.11.2026, see README "Chamfer"); 1 brings their chamfers back.
const fieldCh=(n)=>`calc(var(--chamfer-field-scale,1)*${n}px)`;
const chamfer=(n=10,corners=2)=>{const ch=fieldCh(n);return{clipPath:`var(--qvl-chamfer-clip,${corners===4
  ?`polygon(${ch} 0,calc(100% - ${ch}) 0,100% ${ch},100% calc(100% - ${ch}),calc(100% - ${ch}) 100%,${ch} 100%,0 calc(100% - ${ch}),0 ${ch})`
  :`polygon(${ch} 0,100% 0,100% calc(100% - ${ch}),calc(100% - ${ch}) 100%,0 100%,0 ${ch})`})`,
  borderRadius:corners===4?`calc(var(--qvl-bevel,0)*${ch})`:`calc(var(--qvl-bevel,0)*${ch}) 0`,
  cornerShape:"bevel",overflow:"var(--qvl-bevel-overflow,visible)"};};

export function Checkbox({label,description,checked,defaultChecked,disabled,onChange,id,style,...rest}){
  const uid=React.useId();
  const fid=id||uid;
  const isControlled=checked!==undefined;
  const [inner,setInner]=React.useState(Boolean(defaultChecked));
  const on=isControlled?checked:inner;
  return <label htmlFor={fid} style={{display:"flex",gap:"var(--space-3)",alignItems:"flex-start",
    cursor:disabled?"not-allowed":"pointer",opacity:disabled?0.55:1,minHeight:"var(--tap-min)",...style}}>
    {/* The visually hidden input sits inside .qvl-focus-field, so the box gets the same double focus ring as Input and Select. */}
    <span className="qvl-focus-field" style={{flex:"none",marginTop:2,position:"relative"}}>
    <span style={{display:"block",background:on?"var(--control-on)":"var(--border-default)",
      padding:2,...chamfer(5,4),transition:"background var(--duration-fast) var(--ease-standard)"}}>
      <span style={{display:"flex",alignItems:"center",justifyContent:"center",width:20,height:20,
        background:on?"var(--control-on)":"var(--surface-card)",color:"var(--text-on-inverse)",
        fontFamily:"var(--font-body)",fontWeight:600,fontSize:14,lineHeight:1,...chamfer(4,4)}}>{on?"✓":""}</span>
    </span>
    <input id={fid} type="checkbox" checked={isControlled?checked:undefined} defaultChecked={isControlled?undefined:defaultChecked}
      disabled={disabled}
      onChange={(e)=>{if(!isControlled)setInner(e.target.checked);onChange&&onChange(e)}}
      style={{position:"absolute",left:0,top:0,opacity:0,width:1,height:1}} {...rest}/>
    </span>
    <span>
      <span style={{display:"block",fontWeight:"var(--weight-emphasis)",fontSize:"var(--text-body)"}}>{label}</span>
      {description?<span style={{display:"block",fontSize:"var(--text-small)",color:"var(--text-muted)"}}>{description}</span>:null}
    </span>
  </label>;
}
