import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function LevelBadge({level,region,klasse,size="md",style,...rest}){
  const s=size==="lg"?{box:44,font:"var(--text-h2)"}:size==="sm"?{box:26,font:"var(--text-small)"}:{box:34,font:"var(--text-h3)"};
  return <span style={{display:"inline-flex",alignItems:"stretch",gap:2,...style}} {...rest}>
    <span style={{width:s.box,height:s.box,display:"inline-flex",alignItems:"center",justifyContent:"center",
      background:"var(--surface-inverse)",color:"var(--text-on-inverse)",fontFamily:"var(--font-display)",fontSize:s.font,
      lineHeight:1,letterSpacing:0,...chamfer(6,2)}}>{level}</span>
    {region||klasse?<span style={{display:"inline-flex",alignItems:"center",padding:"0 10px",height:s.box,
      background:"var(--surface-brand-soft)",color:"var(--text-on-soft)",fontFamily:"var(--font-display)",
      fontSize:size==="sm"?"var(--text-caption)":"var(--text-small)",letterSpacing:"var(--tracking-eyebrow)",
      textTransform:"uppercase",...chamfer(6,2)}}>{[region,klasse].filter(Boolean).join(" · ")}</span>:null}
  </span>;
}
