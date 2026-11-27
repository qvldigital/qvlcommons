import React from "react";
import { Logo } from "../core/Logo.jsx";
// Chamfer: corner-shape: bevel where supported (outline and borders follow the bevel), clip-path otherwise. See bundle.css "Chamfer".
const chamfer=(ch=10,corners=2)=>({clipPath:`var(--qvl-chamfer-clip,${corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`})`,
  borderRadius:corners===4?`calc(var(--qvl-bevel,0)*${ch}px)`:`calc(var(--qvl-bevel,0)*${ch}px) 0`,
  cornerShape:"bevel",overflow:"var(--qvl-bevel-overflow,visible)"});

export function SiteFooter({columns=[],note,style,...rest}){
  return <footer style={{background:"var(--surface-inverse)",color:"var(--text-on-inverse)",padding:"var(--space-12) var(--gutter-desktop) var(--space-8)",...style}} {...rest}>
    <div style={{maxWidth:"var(--container-max)",margin:"0 auto",display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:"var(--space-8)"}}>
      <div>
        <div style={{background:"var(--surface-logo-plate)",padding:"8px 12px",display:"inline-block",
          ...chamfer(8,2)}}>
          <Logo variant="long-petrol" height={30}/>
        </div>
        <p style={{marginTop:"var(--space-4)",fontSize:"var(--text-small)",maxWidth:"32ch",opacity:0.9}}>
          {note}
        </p>
      </div>
      {columns.map(col=><div key={col.title}>
        <h4 style={{fontFamily:"var(--font-display)",fontSize:"var(--text-eyebrow)",letterSpacing:"var(--tracking-eyebrow)",
          textTransform:"uppercase",color:"var(--text-on-inverse-accent)",margin:"0 0 var(--space-3)"}}>{col.title}</h4>
        <ul style={{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:0}}>
          {col.links.map(l=><li key={l}><a href="#" style={{display:"inline-flex",alignItems:"center",minHeight:"var(--tap-min)",minWidth:"var(--tap-min)",color:"var(--text-on-inverse)",fontSize:"var(--text-small)",
            textDecoration:"none"}}><span style={{borderBottom:"1px solid color-mix(in srgb,var(--text-on-inverse) 40%,transparent)"}}>{l}</span></a></li>)}
        </ul>
      </div>)}
    </div>
  </footer>;
}
