(function(){
const {Card,SetScoreInput,PlayerRow,Button,Badge,Alert,Checkbox,Dialog,Toast,ToastStack,LevelBadge,Tabs,Icon}=window.QueerLeagueDesignSystem_ae47b3;

function ReportSheet(){
  const [sets,setSets]=React.useState([{home:25,away:21},{home:23,away:25},{home:15,away:12}]);
  const [tab,setTab]=React.useState("saetze");
  const [confirm,setConfirm]=React.useState(false);
  const [done,setDone]=React.useState(false);
  const won=sets.filter(s=>s.home>s.away).length, lost=sets.filter(s=>s.away>s.home).length;
  return <div style={{maxWidth:520,margin:"0 auto",padding:"var(--space-4)",display:"grid",gridTemplateColumns:"minmax(0,1fr)",gap:"var(--space-4)"}}>
    <Card tone="brand" padding="var(--space-4)">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"var(--space-3)"}}>
        <div>
          <div style={{fontFamily:"var(--font-display)",fontSize:"var(--text-eyebrow)",letterSpacing:"var(--tracking-eyebrow)",
            textTransform:"uppercase",opacity:.85}}>Spielberichtsbogen</div>
          <div style={{fontFamily:"var(--font-display)",fontSize:"var(--text-h2)",textTransform:"uppercase",
            letterSpacing:"var(--tracking-display)",lineHeight:1.05}}>Bumpers · Hurricanes</div>
        </div>
        <div style={{fontFamily:"var(--font-display)",fontSize:"var(--text-display-2)",lineHeight:1}}>
          {won}<span style={{color:"var(--text-separator)"}}>:</span>{lost}</div>
      </div>
      <div style={{marginTop:"var(--space-3)"}}><LevelBadge level="B" region="Nord" size="sm"/></div>
    </Card>

    <Tabs value={tab} onChange={setTab} items={[{value:"saetze",label:"Sätze"},{value:"kader",label:"Aufstellung"},{value:"schiri",label:"Schiri"}]}/>

    {tab==="saetze"?<>
      {sets.map((s,i)=><SetScoreInput key={i} setNumber={i+1} home={s.home} away={s.away}
        homeLabel="Bumpers" awayLabel="Hurricanes" onChange={n=>setSets(sets.map((x,j)=>j===i?n:x))}/>)}
      <Button variant="ghost" fullWidth onClick={()=>setSets([...sets,{home:0,away:0}])}>+ Satz</Button>
    </>:null}

    {tab==="kader"?<Card padding="0">
      <PlayerRow number={7} name="Alex Winter" pronouns="they/them" role="Zuspiel" status="auf dem Feld"/>
      <PlayerRow alt number={12} name="Mira Kowalski" pronouns="sie/ihr" role="Außen" status="auf dem Feld"/>
      <PlayerRow number={4} name="Jon Sørensen" role="Mitte" status="auf dem Feld"/>
      <PlayerRow alt number={2} name="Kim Novák" pronouns="dey/deren" role="Libero" status="Bank"/>
    </Card>:null}

    {tab==="schiri"?<Card padding="var(--space-5)" style={{display:"grid",gap:"var(--space-4)"}}>
      <Checkbox label="Schiedsrichter*in gestellt" defaultChecked/>
      <Checkbox label="Netzhöhe geprüft" defaultChecked/>
      <Checkbox label="Besondere Vorfälle" description="Nur intern sichtbar."/>
    </Card>:null}

    <Alert tone="safe" title="Safe Space">Kein Spielort, keine Adressen — nur Ergebnis und Aufstellung.</Alert>
    <Button variant="accent" size="lg" fullWidth iconLeft={<Icon name="check" size={20}/>} onClick={()=>setConfirm(true)}>
      Bericht einreichen
    </Button>

    <Dialog open={confirm} title="Bericht einreichen" onClose={()=>setConfirm(false)}
      footer={<><Button variant="secondary" onClick={()=>setConfirm(false)}>Zurück</Button>
        <Button variant="accent" onClick={()=>{setConfirm(false);setDone(true)}}>Einreichen</Button></>}>
      <p style={{margin:"0 0 var(--space-3)"}}>Ergebnis {won}:{lost} — {sets.map(s=>s.home+":"+s.away).join(" / ")}</p>
      <Checkbox label="Beide Teams haben das Ergebnis gesehen" defaultChecked/>
    </Dialog>
    {done?<ToastStack><Toast message="Bericht eingereicht — wartet auf Gegenbestätigung" onClose={()=>setDone(false)}/></ToastStack>:null}
  </div>;
}
Object.assign(window,{ReportSheet});
})();
