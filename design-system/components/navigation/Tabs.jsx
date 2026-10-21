import React from "react";
const chamfer=(ch=10,corners=2)=>({clipPath:corners===4
  ?`polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)`
  :`polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`});

export function Tabs({items=[],value,onChange,scrollable=true,panelPrefix,style,...rest}){
  const ids=items.map(it=>typeof it==="string"?it:it.value);
  const current=ids.includes(value)?value:ids[0];
  const refs=React.useRef({});
  // Roving tabindex: only the selected tab is in the Tab order, arrow keys / Home / End move between tabs.
  const onKey=(e,i)=>{
    const last=ids.length-1;
    const to={ArrowRight:i===last?0:i+1,ArrowLeft:i===0?last:i-1,Home:0,End:last}[e.key];
    if(to===undefined) return;
    e.preventDefault();
    const el=refs.current[ids[to]];
    if(el) el.focus();
    if(onChange) onChange(ids[to]);
  };
  return <div role="tablist" style={{display:"flex",gap:"var(--space-1)",borderBottom:"2px solid var(--surface-divider)",
    padding:"4px 4px 0",overflowX:scrollable?"auto":"visible",flexWrap:scrollable?undefined:"wrap",...style}} {...rest}>
    {items.map((it,i)=>{
      const id=typeof it==="string"?it:it.value;
      const label=typeof it==="string"?it:it.label;
      const active=id===value;
      return <span key={id} className="qvl-focus" style={scrollable?{flex:"none"}:{minWidth:0}}><button role="tab" aria-selected={active} tabIndex={id===current?0:-1}
        ref={el=>{refs.current[id]=el;}} onKeyDown={(e)=>onKey(e,i)}
        id={panelPrefix?`${panelPrefix}-tab-${id}`:undefined} aria-controls={panelPrefix?`${panelPrefix}-panel-${id}`:undefined}
        onClick={()=>onChange&&onChange(id)}
        style={{minWidth:0,border:"none",cursor:"pointer",background:active?"var(--surface-inverse)":"var(--qvl-ghost-bg,transparent)",
          color:active?"var(--text-on-inverse)":"var(--qvl-ghost-fg,var(--text-heading))",padding:"6px 16px",minHeight:44,
          fontFamily:"var(--font-display)",fontSize:"var(--text-body)",letterSpacing:"var(--tracking-display)",
          textTransform:"uppercase",lineHeight:1.1,textAlign:"center",overflowWrap:"break-word",transition:"background var(--duration-fast) var(--ease-standard)",
          ...chamfer(8,2)}}>{label}{typeof it!=="string"&&it.count!==undefined?
            <span style={{marginLeft:8,opacity:0.8,fontFamily:"var(--font-body)",fontWeight:400,fontSize:"var(--text-small)"}}>{it.count}</span>:null}</button></span>;
    })}
  </div>;
}
