import React from "react";
// Chamfer: corner-shape: bevel where supported (outline and borders follow the bevel), clip-path otherwise. See bundle.css "Chamfer".
const chamfer=(ch=10,corners=2)=>({clipPath:`var(--qvl-chamfer-clip,${corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`})`,
  borderRadius:corners===4?`calc(var(--qvl-bevel,0)*${ch}px)`:`calc(var(--qvl-bevel,0)*${ch}px) 0`,
  cornerShape:"bevel",overflow:"var(--qvl-bevel-overflow,visible)"});

export function Tooltip({label,placement="top",children,style,...rest}){
  const [show,setShow]=React.useState(false);
  const id=React.useId();
  // Link the trigger to the tooltip text for screen readers; Escape dismisses it (WCAG 1.4.13).
  const trigger=React.isValidElement(children)?React.cloneElement(children,{"aria-describedby":[children.props["aria-describedby"],id].filter(Boolean).join(" ")}):children;
  const pos=placement==="bottom"?{top:"calc(100% + 8px)"}:{bottom:"calc(100% + 8px)"};
  // Keep the bubble inside the viewport: centred on the trigger, shifted sideways when that would cross an edge.
  const tipRef=React.useRef(null);
  const [shift,setShift]=React.useState(0);
  const useIso=typeof window!=="undefined"?React.useLayoutEffect:React.useEffect;
  useIso(()=>{
    if(!show){setShift(0);return;}
    const el=tipRef.current;
    if(!el) return;
    const r=el.getBoundingClientRect(),m=8,vw=document.documentElement.clientWidth;
    if(r.left<m) setShift(s=>s+(m-r.left));
    else if(r.right>vw-m) setShift(s=>s-(r.right-(vw-m)));
  },[show,label]);
  return <span style={{position:"relative",display:"inline-flex",...style}}
    onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}
    onFocus={()=>setShow(true)} onBlur={()=>setShow(false)} onKeyDown={(e)=>{if(e.key==="Escape")setShow(false);}} {...rest}>
    {trigger}
    {/* Fades and rises a few px in (--duration-base, --ease-out), leaves faster (--duration-fast, --ease-in); visibility follows so a hidden tip is not read out. */}
    <span ref={tipRef} id={id} role="tooltip" style={{visibility:show?"visible":"hidden",opacity:show?1:0,position:"absolute",left:"50%",
      transform:`translate(calc(-50% + ${shift}px),${show?"0px":`calc(var(--motion-rise)/${placement==="bottom"?-3:3})`})`,
      transition:show?"opacity var(--duration-base) var(--ease-out),transform var(--duration-base) var(--ease-out)"
        :"opacity var(--duration-fast) var(--ease-in),transform var(--duration-fast) var(--ease-in),visibility 0s linear var(--duration-fast)",...pos,
      background:"var(--surface-inverse)",color:"var(--text-on-inverse)",padding:"6px 10px",width:"max-content",maxWidth:"min(16rem, calc(100vw - 32px))",overflowWrap:"break-word",
      fontSize:"var(--text-caption)",fontWeight:"var(--weight-emphasis)",zIndex:40,...chamfer(5,2)}}>{label}</span>
  </span>;
}
