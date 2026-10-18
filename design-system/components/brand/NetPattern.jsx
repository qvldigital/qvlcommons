import React from "react";

const dsBase=()=>{
  if(typeof document==="undefined") return "/";
  const l=document.querySelector('link[rel="stylesheet"][href$="styles.css"]')
    ||document.querySelector('link[rel="stylesheet"][href*="styles.css"]');
  if(l&&l.href) return l.href.replace(/styles\.css.*$/,"");
  return "/";
};
const asset=(p)=>dsBase()+p.replace(/^\//,"");

// Brand artwork: the fills are named CI hues and stay the same in light and night (like the HINTERGRUND_* PNGs), so they use the --qvl-* palette directly.
const BASES={
  petrol:"var(--qvl-petrol)",
  orange:"var(--qvl-orange)",
  "petrol-orange":"linear-gradient(135deg,var(--qvl-petrol) 0%,var(--qvl-petrol) 55%,var(--qvl-orange) 130%)",
  "orange-petrol":"linear-gradient(135deg,var(--qvl-orange) 0%,var(--qvl-orange) 45%,var(--qvl-petrol) 120%)",
  "petrol-mid":"linear-gradient(160deg,var(--qvl-petrol) 0%,var(--qvl-petrol-mid) 100%)",
  pink:"var(--qvl-pink)",
  "petrol-pink":"linear-gradient(135deg,var(--qvl-petrol) 0%,var(--qvl-petrol) 45%,var(--qvl-pink) 130%)",
  "pink-petrol":"linear-gradient(135deg,var(--qvl-pink) 0%,var(--qvl-pink) 45%,var(--qvl-petrol) 120%)",
  "orange-pink":"linear-gradient(135deg,var(--qvl-orange) 0%,var(--qvl-pink) 100%)",
  grey:"var(--surface-sunken)"
};
const BALLS={petrol:"ball-petrol.png","petrol-dark":"ball-petrol-dark.png",orange:"ball-orange.png",white:"ball-white.png"};

/**
 * Generative net-and-ball fill for arbitrary sections — a parametric alternative to the fixed
 * HINTERGRUND_* artwork, built only from CSS gradients (the wavy net) and the real extracted
 * ball PNG (tiled), never a hand-drawn or generated image.
 */
export function NetPattern({base="petrol",ball="white",meshOpacity=0.35,ballOpacity=0.16,ballSize=64,mesh=64,style,...rest}){
  const meshLine="rgba(255,255,255,"+meshOpacity+")";
  const meshBg=[
    `repeating-linear-gradient(45deg,${meshLine} 0 2px,transparent 2px ${mesh}px)`,
    `repeating-linear-gradient(-45deg,${meshLine} 0 2px,transparent 2px ${mesh}px)`
  ].join(",");
  return <div style={{position:"relative",background:BASES[base]||BASES.petrol,overflow:"hidden",...style}} {...rest}>
    <div aria-hidden="true" style={{position:"absolute",inset:"-50%",width:"200%",height:"200%",
      backgroundImage:meshBg,backgroundSize:`${mesh}px ${mesh}px`}}/>
    <div aria-hidden="true" style={{position:"absolute",inset:"-50%",width:"200%",height:"200%",opacity:ballOpacity,
      backgroundImage:`url(${asset("assets/icons/"+(BALLS[ball]||BALLS.white))})`,
      backgroundSize:`${ballSize}px ${ballSize}px`,backgroundRepeat:"repeat",
      transform:"rotate(18deg)"}}/>
    <div style={{position:"relative"}}>{rest.children}</div>
  </div>;
}
