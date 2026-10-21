import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

const COLS=[
  {key:"rank",label:"#",align:"right",width:44},
  {key:"team",label:"Team",align:"left"},
  {key:"played",label:"SP",align:"right",width:48},
  {key:"won",label:"S",align:"right",width:44},
  {key:"lost",label:"N",align:"right",width:44},
  {key:"sets",label:"SV",align:"right",width:64},
  {key:"points",label:"PKT",align:"right",width:60}
];

export function StandingsTable({rows=[],columns=COLS,highlightTeam,caption,promotion=0,relegation=0,minWidth,style,...rest}){
  const min=minWidth!==undefined?minWidth:Math.max(240,columns.length*74);
  return <div style={{background:"var(--border-default)",padding:3,minWidth:0,...chamfer(10,4),...style}} {...rest}>
    <div style={{background:"var(--surface-card)",overflowX:"auto",minWidth:0,...chamfer(8,4)}}>
      <table style={{width:"100%",minWidth:min,borderCollapse:"collapse",fontSize:"var(--text-small)"}}>
        {caption?<caption style={{captionSide:"top",textAlign:"left",padding:"10px 12px",background:"var(--table-head-bg)",
          color:"var(--table-head-fg)",fontFamily:"var(--font-display)",fontSize:"var(--text-body)",
          letterSpacing:"var(--tracking-display)",textTransform:"uppercase"}}>{caption}</caption>:null}
        <thead>
          <tr style={{background:"var(--table-head-bg)"}}>
            {columns.map(c=><th key={c.key} scope="col" style={{textAlign:c.align||"left",
              padding:"10px 10px",width:c.width,color:"var(--table-head-fg)",fontFamily:"var(--font-display)",
              fontWeight:400,letterSpacing:"var(--tracking-table)",textTransform:"uppercase"}}>{c.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r,i)=>{
            const me=highlightTeam&&r.team===highlightTeam;
            const zone=i<promotion?"var(--border-default)":i>=rows.length-relegation?"var(--border-accent)":"transparent";
            return <tr key={r.team+i} style={{background:me?"var(--surface-accent-soft)":(i%2?"var(--table-row-bg-alt)":"var(--table-row-bg)"),
              borderLeft:`4px solid ${zone}`}}>
              {columns.map(c=><td key={c.key} style={{textAlign:c.align||"left",padding:"10px 10px",
                borderTop:"1px solid var(--table-border)",
                fontWeight:c.key==="points"||c.key==="team"?"var(--weight-emphasis)":"var(--weight-body)",
                fontFamily:c.key==="rank"||c.key==="points"?"var(--font-display)":"var(--font-body)",
                fontSize:c.key==="rank"||c.key==="points"?"var(--text-body)":"inherit",
                color:c.key==="points"&&!me?"var(--text-heading)":"inherit"}}>{r[c.key]}</td>)}
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  </div>;
}
