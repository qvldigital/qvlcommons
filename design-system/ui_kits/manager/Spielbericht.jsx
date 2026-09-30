(function(){
const {SetScoreInput,Button,Card,Badge,Dialog,Toast,ToastStack,LevelBadge,Alert}=window.QueerLeagueDesignSystem_ae47b3;
function Spielbericht(){
  const [sets,setSets]=React.useState([{home:25,away:21},{home:23,away:25},{home:0,away:0}]);
  const [confirm,setConfirm]=React.useState(false);
  const [saved,setSaved]=React.useState(false);
  const won=sets.filter(s=>s.home>s.away&&(s.home>=15)).length;
  const lost=sets.filter(s=>s.away>s.home&&(s.away>=15)).length;
  return <div style={{padding:"var(--space-4)",display:"grid",gridTemplateColumns:"minmax(0,1fr)",gap:"var(--space-4)"}}>
    <Card tone="soft" padding="var(--space-4)">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"var(--space-3)"}}>
        <div>
          <div style={{fontFamily:"var(--font-display)",fontSize:"var(--text-h3)",textTransform:"uppercase",
            letterSpacing:"var(--tracking-display)",color:"var(--qvl-petrol)"}}>Bumpers vs. Hurricanes</div>
          <div style={{fontSize:"var(--text-small)",color:"var(--text-muted)"}}>Sa 14.11. · 14:00</div>
        </div>
        <LevelBadge level="B" region="Nord" size="sm"/>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:"var(--space-3)",marginTop:"var(--space-4)"}}>
        <span style={{fontFamily:"var(--font-display)",fontSize:"var(--text-display-2)",lineHeight:1,color:"var(--qvl-petrol)"}}>
          {won}<span style={{color:"var(--qvl-orange)"}}>:</span>{lost}</span>
        <Badge tone="orange">läuft</Badge>
      </div>
    </Card>

    {sets.map((s,i)=><SetScoreInput key={i} setNumber={i+1} home={s.home} away={s.away}
      homeLabel="Bumpers" awayLabel="Hurricanes"
      onChange={(n)=>setSets(sets.map((x,j)=>j===i?n:x))}/>)}

    <Button variant="ghost" fullWidth onClick={()=>setSets([...sets,{home:0,away:0}])}>+ Satz</Button>
    <Alert tone="safe" title="Safe Space">Der Spielort wird nicht mitgespeichert.</Alert>
    <Button variant="accent" size="lg" fullWidth onClick={()=>setConfirm(true)}>Ergebnis einreichen</Button>

    <Dialog open={confirm} title="Ergebnis bestätigen" onClose={()=>setConfirm(false)}
      footer={<><Button variant="secondary" onClick={()=>setConfirm(false)}>Zurück</Button>
        <Button variant="accent" onClick={()=>{setConfirm(false);setSaved(true)}}>Bestätigen</Button></>}>
      <p style={{margin:"0 0 var(--space-3)"}}>Beide Teams bestätigen: {sets.map(s=>s.home+":"+s.away).join(" / ")}</p>
      <p style={{margin:0,fontSize:"var(--text-small)",color:"var(--text-muted)"}}>Danach ist das Ergebnis öffentlich sichtbar.</p>
    </Dialog>
    {saved?<ToastStack><Toast message="Ergebnis gespeichert" action="Rückgängig" onAction={()=>setSaved(false)} onClose={()=>setSaved(false)}/></ToastStack>:null}
  </div>;
}
Object.assign(window,{Spielbericht});
})();
