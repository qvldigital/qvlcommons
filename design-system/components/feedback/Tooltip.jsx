import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function Tooltip({label,placement="top",children,style,...rest}){
  const [show,setShow]=React.useState(false);
  const pos=placement==="bottom"?{top:"calc(100% + 8px)"}:{bottom:"calc(100% + 8px)"};
  return <span style={{position:"relative",display:"inline-flex",...style}}
    onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}
    onFocus={()=>setShow(true)} onBlur={()=>setShow(false)} {...rest}>
    {children}
    {show?<span role="tooltip" style={{position:"absolute",left:"50%",transform:"translateX(-50%)",...pos,
      background:"var(--qvl-petrol)",color:"var(--qvl-white)",padding:"6px 10px",whiteSpace:"nowrap",
      fontSize:"var(--text-caption)",fontWeight:"var(--weight-emphasis)",zIndex:40,...chamfer(5,2)}}>{label}</span>:null}
  </span>;
}
