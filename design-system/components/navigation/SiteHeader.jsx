import React from "react";
import { Logo } from "../core/Logo.jsx";
import { Icon } from "../core/Icon.jsx";
import { IconButton } from "../core/IconButton.jsx";
import { Button } from "../core/Button.jsx";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function SiteHeader({items=[],active,onNavigate,language="DE",languages=["DE","EN","FR","PL","CS","DA","SV","PT","ES","IT","NL"],onLanguage,cta,compact=false,style,...rest}){
  const [open,setOpen]=React.useState(false);
  return <header style={{background:"var(--qvl-petrol)",color:"var(--qvl-white)",...style}} {...rest}>
    <div style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:compact?"10px var(--gutter-mobile)":"14px var(--gutter-desktop)",
      display:"flex",alignItems:"center",gap:"var(--space-6)"}}>
      <a href="#" onClick={(e)=>{e.preventDefault();onNavigate&&onNavigate(items[0]&&(items[0].value||items[0]))}}
        style={{display:"flex",alignItems:"center",textDecoration:"none",flex:"none",background:"var(--qvl-white)",
        padding:"6px 10px",...chamfer(8,2)}}>
        <Logo variant="long-petrol" height={compact?24:30}/>
      </a>
      <nav style={{display:compact?"none":"flex",gap:"var(--space-1)",marginLeft:"auto",alignItems:"center"}}>
        {items.map(it=>{
          const v=typeof it==="string"?it:it.value;
          const l=typeof it==="string"?it:it.label;
          const on=v===active;
          return <a key={v} href="#" onClick={(e)=>{e.preventDefault();onNavigate&&onNavigate(v)}}
            style={{textDecoration:"none",padding:"0 14px",height:40,display:"inline-flex",alignItems:"center",
              fontFamily:"var(--font-display)",fontSize:"var(--text-body)",letterSpacing:"var(--tracking-display)",
              textTransform:"uppercase",color:on?"var(--qvl-petrol)":"var(--qvl-white)",
              background:on?"var(--qvl-white)":"transparent",borderBottom:on?"none":"3px solid transparent",
              ...chamfer(6,2)}}>{l}</a>;
        })}
      </nav>
      <div style={{display:"flex",alignItems:"center",gap:"var(--space-2)",marginLeft:compact?"auto":0}}>
        <label style={{display:"flex",alignItems:"center",gap:6,color:"var(--qvl-white)"}}>
          <Icon name="globe" size={18}/>
          <span style={{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0 0 0 0)"}}>Sprache</span>
          <select value={language} onChange={(e)=>onLanguage&&onLanguage(e.target.value)}
            style={{background:"transparent",color:"var(--qvl-white)",border:"none",font:"inherit",
              fontFamily:"var(--font-display)",letterSpacing:"var(--tracking-display)",cursor:"pointer",padding:"4px 2px"}}>
            {languages.map(l=><option key={l} value={l} style={{color:"var(--qvl-ink)"}}>{l}</option>)}
          </select>
        </label>
        {cta&&!compact?<Button variant="accent" size="sm" href="#">{cta}</Button>:null}
        {compact?<IconButton label="Menü" onClick={()=>setOpen(!open)} style={{color:"var(--qvl-white)"}}>
          <Icon name={open?"x":"menu"} size={22}/></IconButton>:null}
      </div>
    </div>
    {compact&&open?<nav style={{display:"flex",flexDirection:"column",borderTop:"2px solid var(--qvl-orange)"}}>
      {items.map(it=>{const v=typeof it==="string"?it:it.value;const l=typeof it==="string"?it:it.label;
        return <a key={v} href="#" onClick={(e)=>{e.preventDefault();setOpen(false);onNavigate&&onNavigate(v)}}
          style={{padding:"14px var(--gutter-mobile)",color:"var(--qvl-white)",textDecoration:"none",
            fontFamily:"var(--font-display)",textTransform:"uppercase",letterSpacing:"var(--tracking-display)",
            borderBottom:"1px solid color-mix(in srgb,var(--qvl-white) 22%,transparent)"}}>{l}</a>})}
    </nav>:null}
  </header>;
}
