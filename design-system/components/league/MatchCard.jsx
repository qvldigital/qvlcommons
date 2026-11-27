import React from "react";
import { Badge } from "../core/Badge.jsx";
// Chamfer: corner-shape: bevel where supported (outline and borders follow the bevel), clip-path otherwise. See bundle.css "Chamfer".
const chamfer=(ch=10,corners=2)=>({clipPath:`var(--qvl-chamfer-clip,${corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`})`,
  borderRadius:corners===4?`calc(var(--qvl-bevel,0)*${ch}px)`:`calc(var(--qvl-bevel,0)*${ch}px) 0`,
  cornerShape:"bevel",overflow:"var(--qvl-bevel-overflow,visible)"});

export function MatchCard({date,time,level,region,home,away,homeSets,awaySets,status="geplant",sets=[],onClick,style,...rest}){
  const played=status==="gespielt";
  const homeWon=played&&Number(homeSets)>Number(awaySets);
  const awayWon=played&&Number(awaySets)>Number(homeSets);
  const side=(name,won)=><div style={{flex:1,minWidth:0}}>
    <div style={{fontFamily:"var(--font-display)",fontSize:"var(--text-h3)",letterSpacing:"var(--tracking-display)",
      textTransform:"uppercase",color:won?"var(--text-heading)":"var(--text-body-color)",lineHeight:1.05,
      overflowWrap:"anywhere"}}>{name}</div>
  </div>;
  return <div onClick={onClick} style={{background:"var(--border-subtle)",padding:2,cursor:onClick?"pointer":"default",...chamfer(10,4),...style}} {...rest}>
    <div style={{background:"var(--surface-card)",...chamfer(8,4)}}>
      <div style={{display:"flex",alignItems:"center",gap:"var(--space-3)",padding:"8px 12px",
        background:"var(--surface-sunken)",fontSize:"var(--text-caption)",fontWeight:"var(--weight-emphasis)",
        letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",color:"var(--text-muted)"}}>
        <span>{date}</span><span>{time}</span>
        <span style={{marginLeft:"auto",display:"flex",gap:6,alignItems:"center"}}>
          {level?<Badge tone="outline" size="sm">{[level,region].filter(Boolean).join(" · ")}</Badge>:null}
          <Badge tone={played?"petrol":status==="läuft"?"orange":"grey"} size="sm">{status}</Badge>
        </span>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:"var(--space-4)",padding:"var(--space-4) var(--space-4)"}}>
        {side(home,homeWon)}
        <div style={{flex:"none",display:"flex",alignItems:"center",gap:8,fontFamily:"var(--font-display)",
          fontSize:"var(--text-h1)",lineHeight:1,color:"var(--text-heading)"}}>
          <span>{played?homeSets:"–"}</span><span style={{color:"var(--text-separator)"}}>:</span><span>{played?awaySets:"–"}</span>
        </div>
        {side(away,awayWon)}
      </div>
      {sets.length?<div style={{display:"flex",gap:"var(--space-2)",padding:"0 var(--space-4) var(--space-4)",
        fontSize:"var(--text-caption)",color:"var(--text-muted)",fontWeight:"var(--weight-emphasis)"}}>
        {sets.map((s,i)=><span key={i} style={{background:"var(--surface-sunken)",padding:"2px 8px",
          ...chamfer(4,2)}}>{s}</span>)}
      </div>:null}
    </div>
  </div>;
}
