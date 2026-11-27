import React from "react";
// Chamfer: corner-shape: bevel where supported (outline and borders follow the bevel), clip-path otherwise. See bundle.css "Chamfer".
const chamfer=(ch=10,corners=2)=>({clipPath:`var(--qvl-chamfer-clip,${corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`})`,
  borderRadius:corners===4?`calc(var(--qvl-bevel,0)*${ch}px)`:`calc(var(--qvl-bevel,0)*${ch}px) 0`,
  cornerShape:"bevel",overflow:"var(--qvl-bevel-overflow,visible)"});

export function Card({tone="default",border=true,block=false,blockColor="petrol",ch=12,padding="var(--space-6)",header,footer,children,style,...rest}){
  const tones={
    default:{background:"var(--surface-card)",color:"var(--text-body-color)",edge:"var(--border-subtle)"},
    brand:{background:"var(--surface-inverse)",color:"var(--text-on-inverse)",edge:"var(--border-default)"},
    soft:{background:"var(--surface-brand-soft)",color:"var(--text-body-color)",edge:"var(--border-brand-soft)"},
    accent:{background:"var(--surface-accent-soft)",color:"var(--text-body-color)",edge:"var(--border-accent)"},
    pink:{background:"var(--surface-accent2-soft)",color:"var(--text-body-color)",edge:"var(--border-accent-2)"},
    // gradient tones: feature card only, one per view. Edge = same gradient so the 2 px rim disappears.
    tiefe:{background:"var(--qvl-gradient-tiefe)",color:"var(--text-on-inverse)",edge:"var(--qvl-gradient-tiefe)"},
    pride:{background:"var(--qvl-gradient-pride)",color:"var(--text-on-inverse)",edge:"var(--qvl-gradient-pride)"},
    sunset:{background:"var(--qvl-gradient-sunset)",color:"var(--text-on-accent)",edge:"var(--qvl-gradient-sunset)"},
    flutlicht:{background:"var(--qvl-gradient-flutlicht)",color:"var(--text-on-accent)",edge:"var(--qvl-gradient-flutlicht)"}
  };
  const t=tones[tone]||tones.default;
  // Headings inside the soft tone take the on-soft colour: in night, petrol-mid on the soft petrol ground stays below 4.5:1.
  const inner={background:t.background,color:t.color,padding,...(tone==="soft"?{"--text-heading":"var(--text-on-soft)"}:null),...chamfer(border?ch-2:ch,4)};
  const edge={background:border?t.edge:"transparent",padding:border?2:0,...chamfer(ch,4)};
  // clip-path clips box-shadow, so the block shadow is a drop-shadow filter on an unclipped wrapper.
  return <div style={{filter:block?`var(--drop-block-${blockColor})`:undefined,...style}} {...rest}>
    <div style={edge}><div style={inner}>
      {header?<div style={{marginBottom:"var(--space-4)"}}>{header}</div>:null}
      {children}
      {footer?<div style={{marginTop:"var(--space-5)",paddingTop:"var(--space-4)",borderTop:"1px solid var(--surface-divider)"}}>{footer}</div>:null}
    </div></div>
  </div>;
}
