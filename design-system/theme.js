/* QVL theme switch. window.QVLTheme.get()/set("light"|"dark"|"system")/toggle(). Persists in localStorage("qvl-theme"); "system" follows the OS live. Include in <head> before paint. */
(function(){var K="qvl-theme",r=document.documentElement,mq=matchMedia("(prefers-color-scheme:dark)");
var T={get:function(){try{return localStorage.getItem(K)||"system"}catch(e){return"system"}},
resolved:function(){var m=T.get();return m==="system"?(mq.matches?"dark":"light"):m},
apply:function(){r.setAttribute("data-theme",T.resolved());dispatchEvent(new CustomEvent("qvl-theme",{detail:T.resolved()}))},
set:function(m){try{m==="system"?localStorage.removeItem(K):localStorage.setItem(K,m)}catch(e){}T.apply()},
toggle:function(){T.set(T.resolved()==="dark"?"light":"dark")}};
mq.addEventListener("change",function(){if(T.get()==="system")T.apply()});T.apply();window.QVLTheme=T})();
