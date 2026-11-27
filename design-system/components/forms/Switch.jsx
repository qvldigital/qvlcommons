import React from "react";
// Chamfer: corner-shape: bevel where supported (outline and borders follow the bevel), clip-path otherwise. See bundle.css "Chamfer".
// Fields, tabs and toggles have square corners while --chamfer-field-scale is 0 (trial since 27.11.2026, see README "Chamfer"); 1 brings their chamfers back.
const fieldCh=(n)=>`calc(var(--chamfer-field-scale,1)*${n}px)`;
const chamfer=(n=10,corners=2)=>{const ch=fieldCh(n);return{clipPath:`var(--qvl-chamfer-clip,${corners===4
  ?`polygon(${ch} 0,calc(100% - ${ch}) 0,100% ${ch},100% calc(100% - ${ch}),calc(100% - ${ch}) 100%,${ch} 100%,0 calc(100% - ${ch}),0 ${ch})`
  :`polygon(${ch} 0,100% 0,100% calc(100% - ${ch}),calc(100% - ${ch}) 100%,0 100%,0 ${ch})`})`,
  borderRadius:corners===4?`calc(var(--qvl-bevel,0)*${ch})`:`calc(var(--qvl-bevel,0)*${ch}) 0`,
  cornerShape:"bevel",overflow:"var(--qvl-bevel-overflow,visible)"};};

export function Switch({label,description,checked=false,disabled,onChange,id,style,...rest}){
  const uid=React.useId();
  const fid=id||uid;
  return <label htmlFor={fid} style={{display:"flex",gap:"var(--space-3)",alignItems:"center",justifyContent:"space-between",
    cursor:disabled?"not-allowed":"pointer",opacity:disabled?0.55:1,minHeight:"var(--tap-min)",...style}}>
    <span>
      <span style={{display:"block",fontWeight:"var(--weight-emphasis)"}}>{label}</span>
      {description?<span style={{display:"block",fontSize:"var(--text-small)",color:"var(--text-muted)"}}>{description}</span>:null}
    </span>
    {/* The visually hidden input sits inside .qvl-focus-field, so the track gets the same double focus ring as Input and Select. */}
    <span className="qvl-focus-field" style={{flex:"none",position:"relative"}}>
    <span style={{display:"block",background:"var(--border-default)",padding:2,...chamfer(6,2)}}>
      <span style={{display:"block",width:52,height:28,padding:3,
        background:checked?"var(--switch-on)":"var(--switch-off)",
        transition:"background var(--duration-base) var(--ease-standard)",...chamfer(5,2)}}>
        <span style={{display:"block",width:22,height:22,background:checked?"var(--surface-accent)":"var(--switch-thumb)",
          transform:checked?"translateX(24px)":"translateX(0)",
          transition:"transform var(--duration-base) var(--ease-standard),background var(--duration-base) var(--ease-standard)",
          ...chamfer(4,2)}}/>
      </span>
    </span>
    <input id={fid} type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={onChange}
      style={{position:"absolute",left:0,top:0,opacity:0,width:1,height:1}} {...rest}/>
    </span>
  </label>;
}
