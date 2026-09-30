import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function Card({tone="default",border=true,block=false,blockColor="petrol",ch=12,padding="var(--space-6)",header,footer,children,style,...rest}){
  const tones={
    default:{background:"var(--surface-card)",color:"var(--text-body-color)",edge:"var(--border-subtle)"},
    brand:{background:"var(--surface-inverse)",color:"var(--text-on-inverse)",edge:"var(--border-default)"},
    soft:{background:"var(--surface-brand-soft)",color:"var(--text-body-color)",edge:"var(--qvl-petrol-mid)"},
    accent:{background:"var(--surface-accent-soft)",color:"var(--text-body-color)",edge:"var(--border-accent)"},
    pink:{background:"var(--surface-accent2-soft)",color:"var(--text-body-color)",edge:"var(--border-accent-2)"}
  };
  const t=tones[tone]||tones.default;
  const inner={background:t.background,color:t.color,padding,...chamfer(border?ch-2:ch,4)};
  const edge={background:border?t.edge:"transparent",padding:border?2:0,...chamfer(ch,4)};
  // clip-path clips box-shadow, so the block shadow is a drop-shadow filter on an unclipped wrapper.
  return <div style={{filter:block?`drop-shadow(6px 6px 0 var(--qvl-${blockColor}))`:undefined,...style}} {...rest}>
    <div style={edge}><div style={inner}>
      {header?<div style={{marginBottom:"var(--space-4)"}}>{header}</div>:null}
      {children}
      {footer?<div style={{marginTop:"var(--space-5)",paddingTop:"var(--space-4)",borderTop:"1px solid var(--surface-divider)"}}>{footer}</div>:null}
    </div></div>
  </div>;
}
