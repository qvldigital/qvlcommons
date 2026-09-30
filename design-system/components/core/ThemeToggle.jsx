import React from "react";
import { IconButton } from "./IconButton.jsx";
import { Icon } from "./Icon.jsx";

export function ThemeToggle({mode,onChange,style,...rest}){
  const T=typeof window!=="undefined"?window.QVLTheme:null;
  const [own,setOwn]=React.useState(()=>T?T.resolved():"light");
  React.useEffect(()=>{const h=(e)=>setOwn(e.detail);addEventListener("qvl-theme",h);return()=>removeEventListener("qvl-theme",h)},[]);
  const cur=mode||own,next=cur==="dark"?"light":"dark";
  return <IconButton label={next==="dark"?"Dunkles Design":"Helles Design"} variant="ghost" style={style} {...rest}
    onClick={()=>{onChange?onChange(next):T&&T.set(next);setOwn(next)}}><Icon name={cur==="dark"?"sun":"moon"} size={20}/></IconButton>;
}
