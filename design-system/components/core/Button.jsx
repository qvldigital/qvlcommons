import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

const SIZES={
  sm:{padding:"4px 14px",height:44,fontSize:"var(--text-small)",ch:6},
  md:{padding:"6px 20px",height:44,fontSize:"var(--text-body)",ch:8},
  lg:{padding:"8px 28px",height:56,fontSize:"var(--text-h3)",ch:10}
};

export function Button({variant="primary",size="md",disabled=false,fullWidth=false,iconLeft,iconRight,href,type="button",onClick,children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const [press,setPress]=React.useState(false);
  const s=SIZES[size]||SIZES.md;
  const solid=(bg,hov,pr,fg)=>({background:disabled?"var(--button-disabled-bg)":press?pr:hover?hov:bg,color:disabled?"var(--button-disabled-fg)":fg,border:"none"});
  const handlers=disabled?{}:{onMouseEnter:()=>setHover(true),onMouseLeave:()=>{setHover(false);setPress(false)},
    onMouseDown:()=>setPress(true),onMouseUp:()=>setPress(false),onClick};

  // clip-path clips outline and box-shadow, so the focus ring is drawn on this unclipped wrapper (see .qvl-focus in bundle.css).
  const wrap=(el)=><span className="qvl-focus" style={fullWidth?{display:"flex",width:"100%"}:undefined}>{el}</span>;

  // Outlined variant: clip-path can't carry a border along its own diagonal cut (an inset
  // box-shadow/border is drawn parallel to the ORIGINAL rectangle, not the chamfered edge, so the
  // cut corner ends up with no stroke — the "open corner" bug). Fix: two nested chamfers — the outer
  // layer IS the border colour, the inner layer is the fill, so the diagonal itself is border-coloured.
  if(variant==="secondary"){
    const borderColor=disabled?"var(--border-subtle)":"var(--button-secondary-border)";
    const fillBg=hover&&!disabled?"var(--surface-brand-soft)":"var(--button-secondary-fill)";
    const fg=disabled?"var(--button-disabled-fg)":hover?"var(--text-on-soft)":"var(--button-secondary-fg)";
    const outerCss={display:"inline-flex",alignItems:"stretch",verticalAlign:"middle",minHeight:s.height,minWidth:s.height,boxSizing:"border-box",width:fullWidth?"100%":"auto",background:borderColor,padding:2,border:"none",
      cursor:disabled?"not-allowed":"pointer",transform:press&&!disabled?"scale(var(--press-scale))":"none",
      transition:"transform var(--duration-instant) var(--ease-standard)",...chamfer(s.ch,2),...style};
    const innerCss={display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--space-2)",
      width:"100%",padding:s.padding,boxSizing:"border-box",background:fillBg,color:fg,
      fontFamily:"var(--font-display)",fontSize:s.fontSize,letterSpacing:"var(--tracking-display)",
      textTransform:"uppercase",lineHeight:1.1,textAlign:"center",overflowWrap:"anywhere",
      transition:"background var(--duration-fast) var(--ease-standard)",...chamfer(Math.max(s.ch-2,2),2)};
    const kids=<span style={innerCss}>{iconLeft}<span>{children}</span>{iconRight}</span>;
    if(href&&!disabled) return wrap(<a href={href} style={outerCss} {...handlers} {...rest}>{kids}</a>);
    return wrap(<button type={type} disabled={disabled} style={outerCss} {...handlers} {...rest}>{kids}</button>);
  }

  let skin;
  if(variant==="primary") skin=solid("var(--button-primary-bg)","var(--button-primary-bg-hover)","var(--button-primary-bg-press)","var(--button-primary-fg)");
  else if(variant==="accent") skin=solid("var(--button-accent-bg)","var(--button-accent-bg-hover)","var(--button-accent-bg-press)","var(--button-accent-fg)");
  else if(variant==="pink") skin=solid("var(--button-pink-bg)","var(--button-pink-bg-hover)","var(--button-pink-bg-press)","var(--button-pink-fg)");
  else skin={background:hover&&!disabled?"var(--surface-brand-soft)":"var(--qvl-ghost-bg,transparent)",color:disabled?"var(--button-disabled-fg)":hover?"var(--text-on-soft)":"var(--qvl-ghost-fg,var(--button-ghost-fg))",border:"none"};

  const css={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"var(--space-2)",
    minHeight:s.height,minWidth:s.height,padding:s.padding,width:fullWidth?"100%":"auto",
    fontFamily:"var(--font-display)",fontSize:s.fontSize,letterSpacing:"var(--tracking-display)",
    textTransform:"uppercase",textDecoration:"none",lineHeight:1.1,textAlign:"center",overflowWrap:"anywhere",cursor:disabled?"not-allowed":"pointer",
    transition:"background var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)",
    transform:press&&!disabled?"scale(var(--press-scale))":"none",
    ...chamfer(s.ch,2),...skin,...style};

  const kids=<>{iconLeft}<span>{children}</span>{iconRight}</>;
  if(href&&!disabled) return wrap(<a href={href} style={css} {...handlers} {...rest}>{kids}</a>);
  return wrap(<button type={type} disabled={disabled} style={css} {...handlers} {...rest}>{kids}</button>);
}
