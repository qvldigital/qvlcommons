(function(){
const {Input,Button,Card,Logo,Alert,Icon}=window.QueerLeagueDesignSystem_ae47b3;
function Login({onLogin}){
  return <div style={{minHeight:"100%",display:"flex",flexDirection:"column",justifyContent:"center",
    padding:"var(--space-6)",background:"var(--surface-page)"}}>
    <div style={{textAlign:"center",marginBottom:"var(--space-8)"}}>
      <Logo variant="long-petrol" height={40} style={{margin:"0 auto"}}/>
      <div style={{marginTop:"var(--space-3)",fontFamily:"var(--font-display)",letterSpacing:"var(--tracking-eyebrow)",
        textTransform:"uppercase",fontSize:"var(--text-eyebrow)",color:"var(--text-muted)"}}>Manager</div>
    </div>
    <Card padding="var(--space-5)">
      <h2 style={{margin:"0 0 var(--space-4)"}}>Anmelden</h2>
      <div style={{display:"grid",gap:"var(--space-4)"}}>
        <Input label="E-Mail" defaultValue="alex@bumpers.berlin"/>
        <Input label="Passwort" type="password" defaultValue="········"/>
        <Button variant="accent" size="lg" fullWidth onClick={onLogin}>Einloggen</Button>
        <Button variant="ghost" fullWidth>Passwort vergessen?</Button>
      </div>
    </Card>
    <Alert tone="safe" title="Safe Space" style={{marginTop:"var(--space-5)"}}>
      Hallen- und Personendaten sind nur für dein Team sichtbar.
    </Alert>
    <div style={{marginTop:"var(--space-5)",textAlign:"center",display:"flex",gap:6,justifyContent:"center",
      alignItems:"center",color:"var(--text-muted)",fontSize:"var(--text-small)"}}>
      <Icon name="globe" size={16}/> Deutsch · English · Polski · +8
    </div>
  </div>;
}
Object.assign(window,{Login});
})();

(function(){
const {Card,Badge,Button,MatchCard,LevelBadge,Alert,StandingsTable,Icon}=window.QueerLeagueDesignSystem_ae47b3;
function Dashboard({go}){
  return <div style={{padding:"var(--space-4)",display:"grid",gridTemplateColumns:"minmax(0,1fr)",gap:"var(--space-4)"}}>
    <Card tone="brand" padding="var(--space-5)">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"var(--space-3)"}}>
        <div>
          <div style={{fontFamily:"var(--font-display)",fontSize:"var(--text-eyebrow)",letterSpacing:"var(--tracking-eyebrow)",
            textTransform:"uppercase",opacity:.85}}>Mein Team</div>
          <h2 style={{color:"var(--text-on-inverse)",margin:"var(--space-1) 0 var(--space-3)",fontSize:"var(--text-h1)"}}>Berlin Bumpers</h2>
          <LevelBadge level="B" region="Nord"/>
        </div>
        <Badge tone="orange">Platz 2</Badge>
      </div>
    </Card>

    <Alert tone="warn" title="Spielbericht offen">
      Für das Spiel vom 31.10. fehlt noch die Bestätigung.
    </Alert>

    <div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"var(--space-3)"}}>
        <h3 style={{margin:0}}>Nächstes Spiel</h3>
        <Button variant="ghost" size="sm" onClick={()=>go("spiele")}>Alle</Button>
      </div>
      <MatchCard date="Sa 14.11." time="14:00" level="B" region="Nord" home="Berlin Bumpers" away="Hamburg Hurricanes" status="geplant"/>
    </div>

    <div style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:"var(--space-3)"}}>
      <Card padding="var(--space-4)"><div style={{fontFamily:"var(--font-display)",fontSize:"var(--text-display-2)",
        color:"var(--text-heading)",lineHeight:1}}>11</div>
        <div style={{fontSize:"var(--text-small)",color:"var(--text-muted)"}}>Spieler*innen gemeldet</div></Card>
      <Card padding="var(--space-4)"><div style={{fontFamily:"var(--font-display)",fontSize:"var(--text-display-2)",
        color:"var(--text-heading)",lineHeight:1}}>24</div>
        <div style={{fontSize:"var(--text-small)",color:"var(--text-muted)"}}>Punkte</div></Card>
    </div>

    <div>
      <h3>Tabelle</h3>
      <StandingsTable columns={[{key:"rank",label:"#",align:"right",width:34},{key:"team",label:"Team"},
        {key:"points",label:"PKT",align:"right",width:54}]} highlightTeam="Berlin Bumpers" rows={[
        {rank:1,team:"Hamburg Hurricanes",points:27},{rank:2,team:"Berlin Bumpers",points:24},
        {rank:3,team:"Bremen Blockers",points:15},{rank:4,team:"Kiel Kraken",points:9}]}/>
    </div>

    <Button variant="accent" size="lg" fullWidth iconLeft={<Icon name="clipboard-list" size={20}/>} onClick={()=>go("bericht")}>
      Spielbericht starten
    </Button>
  </div>;
}
Object.assign(window,{Dashboard});
})();

(function(){
const {Card,PlayerRow,Button,IconButton,Icon,Input,Dialog,Badge,Alert,Tabs}=window.QueerLeagueDesignSystem_ae47b3;
function Roster(){
  const [open,setOpen]=React.useState(false);
  const [tab,setTab]=React.useState("kader");
  const [players,setPlayers]=React.useState([
    {number:7,name:"Alex Winter",pronouns:"they/them",role:"Zuspiel",status:"gemeldet"},
    {number:12,name:"Mira Kowalski",pronouns:"sie/ihr",role:"Außen",status:"gemeldet"},
    {number:4,name:"Jon Sørensen",role:"Mitte",status:"gemeldet"},
    {number:9,name:"Tessa Ferreira",pronouns:"sie/ihr",role:"Diagonal",status:"offen"},
    {number:2,name:"Kim Novák",pronouns:"dey/deren",role:"Libero",status:"gemeldet"}]);
  return <div style={{padding:"var(--space-4)",display:"grid",gridTemplateColumns:"minmax(0,1fr)",gap:"var(--space-4)"}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <h2 style={{margin:0}}>Kader</h2><Badge tone="soft">{players.length} Personen</Badge>
    </div>
    <Tabs value={tab} onChange={setTab} items={[{value:"kader",label:"Kader"},{value:"anfragen",label:"Anfragen",count:2}]}/>
    {tab==="kader"?<>
      <Card padding="0">
        {players.map((p,i)=><PlayerRow key={p.number} {...p} alt={i%2===1}
          action={<IconButton label="Bearbeiten" size="sm"><Icon name="pencil" size={16}/></IconButton>}/>)}
      </Card>
      <Button variant="primary" fullWidth size="lg" iconLeft={<Icon name="user-plus" size={20}/>} onClick={()=>setOpen(true)}>
        Spieler*in hinzufügen
      </Button>
      <Alert tone="info" title="Pronomen">Pronomen sind freiwillig und werden nur angezeigt, wenn sie angegeben wurden.</Alert>
    </>:<Card padding="var(--space-5)"><p style={{margin:0}}>Zwei Personen möchten dem Team beitreten.</p>
      <div style={{display:"flex",gap:"var(--space-2)",marginTop:"var(--space-4)"}}>
        <Button variant="accent" size="sm">Annehmen</Button><Button variant="secondary" size="sm">Ablehnen</Button></div></Card>}

    <Dialog open={open} title="Spieler*in hinzufügen" onClose={()=>setOpen(false)}
      footer={<><Button variant="secondary" onClick={()=>setOpen(false)}>Abbrechen</Button>
        <Button variant="accent" onClick={()=>{setPlayers([...players,{number:15,name:"Noa Berg",pronouns:"er/ihm",role:"Außen",status:"offen"}]);setOpen(false)}}>Hinzufügen</Button></>}>
      <div style={{display:"grid",gap:"var(--space-4)"}}>
        <Input label="Name" placeholder="Vor- und Nachname"/>
        <Input label="Pronomen" placeholder="optional" hint="Wird im Kader angezeigt."/>
        <Input label="Trikotnummer" type="number" placeholder="15"/>
      </div>
    </Dialog>
  </div>;
}
Object.assign(window,{Roster});
})();

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
            letterSpacing:"var(--tracking-display)",color:"var(--text-heading)"}}>Bumpers vs. Hurricanes</div>
          <div style={{fontSize:"var(--text-small)",color:"var(--text-muted)"}}>Sa 14.11. · 14:00</div>
        </div>
        <LevelBadge level="B" region="Nord" size="sm"/>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:"var(--space-3)",marginTop:"var(--space-4)"}}>
        <span style={{fontFamily:"var(--font-display)",fontSize:"var(--text-display-2)",lineHeight:1,color:"var(--text-heading)"}}>
          {won}<span style={{color:"var(--text-separator)"}}>:</span>{lost}</span>
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


(function(){
const {BottomNav,Icon,SiteHeader}=window.QueerLeagueDesignSystem_ae47b3;
function Phone({label,children}){
  return <div><p className="cap">{label}</p><div className="phone">{children}</div></div>;
}
function AppShell(){
  const [tab,setTab]=React.useState("start");
  const go=(t)=>setTab(t);
  return <div className="phone">
    <SiteHeader compact items={[{value:"start",label:"Start"},{value:"spiele",label:"Spiele"},{value:"kader",label:"Kader"}]}
      active={tab} onNavigate={go} language="DE"/>
    <div className="scroll">
      {tab==="start"?<window.Dashboard go={go}/>:null}
      {tab==="kader"?<window.Roster/>:null}
      {tab==="bericht"||tab==="spiele"?<window.Spielbericht/>:null}
      {tab==="mehr"?<div style={{padding:"var(--space-6)"}}><h2>Mehr</h2><p>Einstellungen, Sprache, Safe-Space-Regeln, Abmelden.</p></div>:null}
    </div>
    <BottomNav value={tab==="bericht"?"spiele":tab} onChange={go} items={[
      {value:"start",label:"Start",icon:<Icon name="house" size={20}/>},
      {value:"spiele",label:"Spiele",icon:<Icon name="calendar-days" size={20}/>},
      {value:"kader",label:"Kader",icon:<Icon name="users" size={20}/>},
      {value:"mehr",label:"Mehr",icon:<Icon name="ellipsis" size={20}/>}]}/>
  </div>;
}
function App(){
  const [logged,setLogged]=React.useState(false);
  return <div className="stage"><style>{"\n.stage{display:flex;gap:24px;justify-content:center;align-items:flex-start;flex-wrap:wrap}\n.phone{width:390px;height:712px;background:var(--surface-page);display:flex;flex-direction:column;overflow:hidden;\n  box-shadow:6px 6px 0 0 var(--qvl-petrol);border:3px solid var(--qvl-petrol)}\n.phone .scroll{flex:1;overflow-y:auto}\n.cap{font-family:var(--font-display);letter-spacing:.14em;text-transform:uppercase;font-size:var(--text-eyebrow);color:var(--text-muted);margin:0 0 8px 2px}"}</style>
    {logged?null:<Phone label="Login"><div className="scroll"><window.Login onLogin={()=>setLogged(true)}/></div></Phone>}
    <div><p className="cap">{logged?"App":"App (nach Login)"}</p><AppShell/></div>
  </div>;
}
Object.assign(window,{ManagerKit:App});
})();
