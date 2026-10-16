import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

// outline / yellow are bordered — see Button.jsx for why that needs two nested chamfer layers
// instead of a clipped inset box-shadow (which leaves the diagonal cut with no stroke).
const BORDERED={outline:{border:"var(--border-default)",fg:"var(--text-heading)",width:2},yellow:{border:"var(--qvl-yellow)",fg:"var(--text-heading)",width:3}};
const FILLED={
  petrol:{background:"var(--qvl-petrol)",color:"var(--qvl-white)"},
  orange:{background:"var(--qvl-orange)",color:"var(--text-on-accent)"},
  soft:{background:"var(--surface-brand-soft)",color:"var(--text-heading)"},
  pink:{background:"var(--qvl-pink)",color:"var(--qvl-white)"},
  "pink-soft":{background:"var(--qvl-pink-pale)",color:"var(--qvl-ink)"},
  grey:{background:"var(--qvl-grey)",color:"var(--qvl-ink)"},
  highlight:{background:"var(--qvl-yellow)",color:"var(--qvl-ink)"}
};

export function Badge({tone="petrol",size="md",children,style,...rest}){
  const s=size==="sm"?{height:20,padding:"0 8px",fontSize:"var(--text-caption)",ch:4}:{height:26,padding:"0 10px",fontSize:"var(--text-small)",ch:5};
  const base={display:"inline-flex",alignItems:"center",gap:"var(--space-1)",height:s.height,
    fontFamily:"var(--font-display)",fontSize:s.fontSize,letterSpacing:"var(--tracking-display)",
    textTransform:"uppercase",lineHeight:1,whiteSpace:"nowrap"};

  if(BORDERED[tone]){
    const b=BORDERED[tone];
    return <span style={{...base,padding:b.width,background:b.border,...chamfer(s.ch,2),...style}} {...rest}>
      <span style={{display:"flex",alignItems:"center",height:s.height-b.width*2,padding:s.padding,color:b.fg,background:"var(--surface-card)",
        ...chamfer(Math.max(s.ch-b.width,2),2)}}>{children}</span>
    </span>;
  }
  return <span style={{...base,padding:s.padding,...chamfer(s.ch,2),...(FILLED[tone]||FILLED.petrol),...style}} {...rest}>{children}</span>;
}
