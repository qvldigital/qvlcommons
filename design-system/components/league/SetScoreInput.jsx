import React from "react";
import { IconButton } from "../core/IconButton.jsx";
import { Icon } from "../core/Icon.jsx";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function SetScoreInput({setNumber=1,home=0,away=0,onChange,homeLabel="Heim",awayLabel="Gast",disabled=false,style,...rest}){
  const bump=(which,d)=>{
    if(disabled||!onChange) return;
    const next={home,away};
    next[which]=Math.max(0,Number(next[which])+d);
    onChange(next);
  };
  const cell=(which,label,value)=><div style={{flex:1,textAlign:"center"}}>
    <div style={{fontFamily:"var(--font-display)",fontSize:"var(--text-eyebrow)",letterSpacing:"var(--tracking-eyebrow)",
      textTransform:"uppercase",color:"var(--text-muted)",marginBottom:"var(--space-2)"}}>{label}</div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--space-2)"}}>
      <IconButton label={`${label} minus`} size="md" variant="secondary" disabled={disabled} onClick={()=>bump(which,-1)}>
        <Icon name="minus" size={18}/></IconButton>
      <div style={{minWidth:72,padding:"6px 4px",background:"var(--surface-inverse)",color:"var(--text-on-inverse)",
        fontFamily:"var(--font-display)",fontSize:"var(--text-display-2)",lineHeight:1,...chamfer(8,2)}}>{value}</div>
      <IconButton label={`${label} plus`} size="md" variant="primary" disabled={disabled} onClick={()=>bump(which,1)}>
        <Icon name="plus" size={18}/></IconButton>
    </div>
  </div>;
  return <div style={{background:"var(--border-subtle)",padding:2,...chamfer(12,4),...style}} {...rest}>
    <div style={{background:"var(--surface-card)",padding:"var(--space-4)",...chamfer(10,4)}}>
      <div style={{display:"flex",alignItems:"center",gap:"var(--space-2)",marginBottom:"var(--space-4)"}}>
        <span style={{background:"var(--surface-accent)",color:"var(--text-on-accent)",padding:"2px 10px",
          fontFamily:"var(--font-display)",letterSpacing:"var(--tracking-display)",textTransform:"uppercase",
          ...chamfer(5,2)}}>Satz {setNumber}</span>
      </div>
      <div style={{display:"flex",gap:"var(--space-4)"}}>{cell("home",homeLabel,home)}{cell("away",awayLabel,away)}</div>
    </div>
  </div>;
}
