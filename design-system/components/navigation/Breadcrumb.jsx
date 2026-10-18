import React from "react";

export function Breadcrumb({items=[],onNavigate,style,...rest}){
  return <nav aria-label="Breadcrumb" style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--space-2)",
    fontSize:"var(--text-small)",...style}} {...rest}>
    {items.map((it,i)=>{
      const last=i===items.length-1;
      const label=typeof it==="string"?it:it.label;
      return <span key={i} style={{display:"inline-flex",alignItems:"center",gap:"var(--space-2)"}}>
        {last?<span style={{fontWeight:"var(--weight-emphasis)",color:"var(--text-muted)"}}>{label}</span>
          :<a href="#" onClick={(e)=>{e.preventDefault();onNavigate&&onNavigate(typeof it==="string"?it:it.value)}}
            style={{color:"var(--text-link)"}}>{label}</a>}
        {last?null:<span aria-hidden="true" style={{color:"var(--text-separator)",fontWeight:600}}>/</span>}
      </span>;
    })}
  </nav>;
}
