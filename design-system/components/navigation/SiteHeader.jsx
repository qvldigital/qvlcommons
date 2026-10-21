import React from "react";
import { Logo } from "../core/Logo.jsx";
import { Icon } from "../core/Icon.jsx";
import { IconButton } from "../core/IconButton.jsx";
import { Button } from "../core/Button.jsx";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function SiteHeader({items=[],active,onNavigate,language="DE",languages=["DE","EN","FR","PL","CS","DA","SV","PT","ES","IT","NL"],onLanguage,cta,compact,languageLabel="Sprache",menuLabel="Menü",style,...rest}){
  const [open,setOpen]=React.useState(false);
  // compact omitted = automatic: switch to the menu button as soon as logo, navigation and actions no longer fit in one row,
  // whatever the label lengths in the current language; switch back once the row is wide enough again.
  const rowRef=React.useRef(null);
  const need=React.useRef(0);
  const [narrow,setNarrow]=React.useState(false);
  const narrowRef=React.useRef(false);
  narrowRef.current=narrow;
  const isCompact=compact!==undefined?compact:narrow;
  const useIso=typeof window!=="undefined"?React.useLayoutEffect:React.useEffect;
  useIso(()=>{
    if(compact!==undefined) return;
    const row=rowRef.current;
    if(!row||typeof ResizeObserver==="undefined") return;
    const fit=()=>{
      if(!narrowRef.current){
        if(row.scrollWidth>row.clientWidth+1){need.current=row.scrollWidth;setNarrow(true);}
      }else if(row.clientWidth>=need.current) setNarrow(false);
    };
    fit();
    const ro=new ResizeObserver(fit);
    ro.observe(row);
    return()=>ro.disconnect();
  },[compact,narrow]);
  return <header style={{background:"var(--surface-inverse)",color:"var(--text-on-inverse)",...style}} {...rest}>
    <div ref={rowRef} style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:isCompact?"10px var(--gutter-mobile)":"14px var(--gutter-desktop)",
      display:"flex",alignItems:"center",gap:"var(--space-6)"}}>
      <a href="#" onClick={(e)=>{e.preventDefault();onNavigate&&onNavigate(items[0]&&(items[0].value||items[0]))}}
        style={{display:"flex",alignItems:"center",minHeight:"var(--tap-min)",textDecoration:"none",flex:"none",background:"var(--surface-logo-plate)",
        padding:"6px 10px",...chamfer(8,2)}}>
        <Logo variant="long-petrol" height={isCompact?24:30}/>
      </a>
      <nav style={{display:isCompact?"none":"flex",gap:"var(--space-1)",marginLeft:"auto",alignItems:"center"}}>
        {items.map(it=>{
          const v=typeof it==="string"?it:it.value;
          const l=typeof it==="string"?it:it.label;
          const on=v===active;
          return <a key={v} href="#" onClick={(e)=>{e.preventDefault();onNavigate&&onNavigate(v)}}
            style={{textDecoration:"none",padding:"0 14px",minHeight:"var(--tap-min)",display:"inline-flex",alignItems:"center",
              fontFamily:"var(--font-display)",fontSize:"var(--text-body)",letterSpacing:"var(--tracking-display)",
              textTransform:"uppercase",color:on?"var(--surface-inverse)":"var(--text-on-inverse)",
              background:on?"var(--text-on-inverse)":"transparent",borderBottom:on?"none":"3px solid transparent",
              ...chamfer(6,2)}}>{l}</a>;
        })}
      </nav>
      <div style={{display:"flex",alignItems:"center",gap:"var(--space-2)",flex:"none",marginLeft:isCompact?"auto":0}}>
        <label style={{display:"flex",alignItems:"center",gap:6,color:"var(--text-on-inverse)"}}>
          <Icon name="globe" size={18}/>
          <span style={{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0 0 0 0)"}}>{languageLabel}</span>
          <select value={language} onChange={(e)=>onLanguage&&onLanguage(e.target.value)}
            style={{background:"transparent",color:"var(--text-on-inverse)",border:"none",font:"inherit",
              fontFamily:"var(--font-display)",letterSpacing:"var(--tracking-display)",cursor:"pointer",padding:"4px 2px",minHeight:"var(--tap-min)",minWidth:"var(--tap-min)"}}>
            {languages.map(l=><option key={l} value={l} style={{color:"var(--text-body-color)"}}>{l}</option>)}
          </select>
        </label>
        {cta&&!isCompact?<Button variant="accent" size="sm" href="#">{cta}</Button>:null}
        {isCompact?<IconButton label={menuLabel} onClick={()=>setOpen(!open)} style={{color:"var(--text-on-inverse)"}}>
          <Icon name={open?"x":"menu"} size={22}/></IconButton>:null}
      </div>
    </div>
    {isCompact&&open?<nav style={{display:"flex",flexDirection:"column",borderTop:"2px solid var(--border-accent)"}}>
      {items.map(it=>{const v=typeof it==="string"?it:it.value;const l=typeof it==="string"?it:it.label;
        return <a key={v} href="#" onClick={(e)=>{e.preventDefault();setOpen(false);onNavigate&&onNavigate(v)}}
          style={{padding:"14px var(--gutter-mobile)",color:"var(--text-on-inverse)",textDecoration:"none",
            fontFamily:"var(--font-display)",textTransform:"uppercase",letterSpacing:"var(--tracking-display)",
            borderBottom:"1px solid color-mix(in srgb,var(--text-on-inverse) 22%,transparent)"}}>{l}</a>})}
    </nav>:null}
  </header>;
}
