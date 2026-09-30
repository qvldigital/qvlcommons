import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});
const SIZES={sm:{box:36,ch:6},md:{box:44,ch:8},lg:{box:52,ch:10}};

export function IconButton({variant="ghost",size="md",disabled=false,label,children,onClick,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const s=SIZES[size]||SIZES.md;
  const handlers={onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false)};

  // See Button.jsx: an outlined chamfer needs two nested layers, not a clipped box-shadow border —
  // a box-shadow ring stays parallel to the rectangle and leaves the diagonal cut unstroked.
  if(variant==="secondary"){
    const borderColor=disabled?"var(--border-subtle)":"var(--button-secondary-border)";
    const fillBg=hover&&!disabled?"var(--surface-brand-soft)":"var(--button-secondary-fill)";
    return <button type="button" aria-label={label} title={label} disabled={disabled} onClick={disabled?undefined:onClick}
      {...handlers}
      style={{display:"inline-flex",alignItems:"stretch",verticalAlign:"middle",boxSizing:"border-box",width:s.box,height:s.box,padding:2,border:"none",background:borderColor,
        cursor:disabled?"not-allowed":"pointer",opacity:disabled?0.5:1,...chamfer(s.ch,2),...style}} {...rest}>
      <span style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",
        background:fillBg,color:disabled?"var(--button-disabled-fg)":"var(--button-secondary-fg)",
        transition:"background var(--duration-fast) var(--ease-standard)",...chamfer(Math.max(s.ch-2,2),2)}}>{children}</span>
    </button>;
  }

  let skin;
  if(variant==="primary") skin={background:hover&&!disabled?"var(--button-primary-bg-hover)":"var(--button-primary-bg)",color:"var(--button-primary-fg)"};
  else if(variant==="pink") skin={background:hover&&!disabled?"var(--button-pink-bg-hover)":"var(--button-pink-bg)",color:"var(--button-pink-fg)"};
  else if(variant==="accent") skin={background:hover&&!disabled?"var(--button-accent-bg-hover)":"var(--button-accent-bg)",color:"var(--button-accent-fg)"};
  else skin={background:hover&&!disabled?"var(--surface-brand-soft)":"transparent",color:"var(--button-ghost-fg)"};
  return <button type="button" aria-label={label} title={label} disabled={disabled} onClick={disabled?undefined:onClick}
    {...handlers}
    style={{width:s.box,height:s.box,display:"inline-flex",alignItems:"center",justifyContent:"center",border:"none",
      cursor:disabled?"not-allowed":"pointer",opacity:disabled?0.5:1,
      transition:"background var(--duration-fast) var(--ease-standard)",...chamfer(s.ch,2),...skin,...style}} {...rest}>{children}</button>;
}
