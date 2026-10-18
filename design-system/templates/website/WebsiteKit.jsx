(function(){
const {NetHero,PatternBand,Card,Button,Badge,LevelBadge,MatchCard,StandingsTable,Alert,Icon,BallIcon}=window.QueerLeagueDesignSystem_ae47b3;

function HomeScreen({go}){
  return <div>
    <NetHero background="grey-petrol" eyebrow="Saison 2026/27" title="Volleyball, wie es sein soll"
      lead="Rund 1.000 Mitglieder, Levels A–D, fünf Regionen — und Platz für dich. Seit 1992."
      minHeight={420}
      actions={<>
        <Button variant="accent" size="lg" onClick={()=>go("mitmachen")}>Team anmelden</Button>
        <Button variant="primary" size="lg" onClick={()=>go("liga")}>Zur Liga</Button>
      </>}/>

    <section style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"var(--space-16) var(--gutter-desktop)"}}>
      <div style={{display:"flex",alignItems:"flex-end",gap:"var(--space-4)",marginBottom:"var(--space-6)"}}>
        <h2 style={{margin:0,fontSize:"var(--text-display-2)",lineHeight:1}}>Die Liga</h2>
        <span style={{marginBottom:6,fontSize:"var(--text-small)",color:"var(--text-muted)"}}>Vier Levels, fünf Regionen, zwei Spielklassen</span>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"var(--space-4)"}}>
        {[["A","Ambitioniert","Wer schon lange spielt und es wissen will."],
          ["B","Solide","Das Herz der Liga — die meisten Teams spielen hier."],
          ["C","Entspannt","Spielpraxis ohne Leistungsdruck."],
          ["D","Einstieg","Neu dabei? Hier fängt alles an."]].map(([l,t,d])=>
          <Card key={l} tone="default">
            <LevelBadge level={l} size="lg"/>
            <h3 style={{margin:"var(--space-4) 0 var(--space-2)"}}>{t}</h3>
            <p style={{margin:0,fontSize:"var(--text-small)",color:"var(--text-muted)"}}>{d}</p>
          </Card>)}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"var(--space-4)",marginTop:"var(--space-4)"}}>
        <Card tone="soft"><h3 style={{margin:"0 0 var(--space-2)"}}>FLINTA*-Spielklasse</h3>
          <p style={{margin:0,fontSize:"var(--text-small)"}}>Eigene Runde, eigener Spielplan, gleiche Liga.</p></Card>
        <Card tone="soft"><h3 style={{margin:"0 0 var(--space-2)"}}>Senior*innen</h3>
          <p style={{margin:0,fontSize:"var(--text-small)"}}>Ab 40 — mit Turnierwochenenden.</p></Card>
        <Card tone="brand"><h3 style={{margin:"0 0 var(--space-2)",color:"var(--text-on-inverse)"}}>Fünf Regionen</h3>
          <p style={{margin:0,fontSize:"var(--text-small)"}}>Nord · Ost · Süd · West · Mitte</p></Card>
      </div>
    </section>

    <PatternBand pattern="table" plate height={220}>
      <h2 style={{margin:"0 0 var(--space-2)",fontSize:"var(--text-display-2)"}}>Ergebnisse & Tabellen</h2>
      <p style={{margin:"0 0 var(--space-4)",color:"var(--text-muted)"}}>Jedes Spiel, jeder Satz, jede Saison seit 1992.</p>
      <Button variant="accent" onClick={()=>go("liga")}>Zu den Tabellen</Button>
    </PatternBand>

    <section style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"var(--space-16) var(--gutter-desktop)",
      display:"grid",gridTemplateColumns:"minmax(0,1.2fr) minmax(0,1fr)",gap:"var(--space-8)"}}>
      <div>
        <h2 style={{fontSize:"var(--text-h1)"}}>Nächste Spiele</h2>
        <div style={{display:"flex",flexDirection:"column",gap:"var(--space-3)"}}>
          <MatchCard date="Sa 14.11." time="14:00" level="B" region="Nord" home="Berlin Bumpers" away="Hamburg Hurricanes" status="geplant"/>
          <MatchCard date="Sa 14.11." time="16:30" level="C" region="Nord" home="Bremen Blockers" away="Kiel Kraken" status="geplant"/>
          <MatchCard date="So 15.11." time="11:00" level="B" region="West" home="Köln Kicks" away="Aachen Aces" status="geplant"/>
        </div>
        <Alert tone="safe" title="Safe Space" style={{marginTop:"var(--space-4)"}}>
          Hallenadressen veröffentlichen wir nicht. Angemeldete Teams finden sie im Queer League Manager.
        </Alert>
      </div>
      <div>
        <h2 style={{fontSize:"var(--text-h1)"}}>Tabelle Level B · Nord</h2>
        <StandingsTable promotion={1} relegation={1} rows={[
          {rank:1,team:"Hamburg Hurricanes",played:10,won:9,lost:1,sets:"28:7",points:27},
          {rank:2,team:"Berlin Bumpers",played:10,won:8,lost:2,sets:"26:11",points:24},
          {rank:3,team:"Bremen Blockers",played:10,won:5,lost:5,sets:"18:18",points:15},
          {rank:4,team:"Kiel Kraken",played:10,won:3,lost:7,sets:"12:23",points:9},
          {rank:5,team:"Praha Pride Spikers",played:10,won:1,lost:9,sets:"6:29",points:3}]}/>
      </div>
    </section>

    <section style={{background:"var(--surface-inverse)",color:"var(--text-on-inverse)",padding:"var(--space-16) var(--gutter-desktop)"}}>
      <div style={{maxWidth:"var(--container-narrow)",margin:"0 auto",textAlign:"center"}}>
        <BallIcon tone="white" size={64} style={{margin:"0 auto var(--space-5)"}}/>
        <h2 style={{color:"var(--text-on-inverse)",fontSize:"var(--text-display-2)",margin:"0 0 var(--space-3)"}}>Wir spielen dir den Ball zu</h2>
        <p style={{margin:"0 0 var(--space-6)",fontSize:"var(--text-lead)"}}>
          Egal ob du seit 20 Jahren spielst oder das erste Mal in einer Halle stehst — melde dich, wir finden ein Team für dich.
        </p>
        <Button variant="accent" size="lg" iconLeft={<Icon name="user-plus" size={22}/>} onClick={()=>go("mitmachen")}>Mitmachen</Button>
      </div>
    </section>
  </div>;
}
Object.assign(window,{HomeScreen});
})();

(function(){
const {Tabs,Tag,Card,Breadcrumb,StandingsTable,MatchCard,Select,Alert,Badge,Tooltip}=window.QueerLeagueDesignSystem_ae47b3;

function LigaScreen(){
  const [tab,setTab]=React.useState("tabelle");
  const [region,setRegion]=React.useState("Nord");
  const [level,setLevel]=React.useState("B");
  const regions=["Nord","Ost","Süd","West","Mitte"];
  return <div style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"var(--space-8) var(--gutter-desktop) var(--space-16)"}}>
    <Breadcrumb items={[{value:"home",label:"Start"},{value:"liga",label:"Liga"},`Level ${level} · ${region}`]}/>
    <h1 style={{fontSize:"var(--text-display-2)",margin:"var(--space-4) 0 var(--space-5)"}}>Liga {level} · Gruppe {region}</h1>

    <div style={{display:"flex",flexWrap:"wrap",gap:"var(--space-3)",alignItems:"flex-end",marginBottom:"var(--space-5)"}}>
      <Select label="Level" value={level} onChange={e=>setLevel(e.target.value)} options={["A","B","C","D"]} style={{minWidth:120}}/>
      <div>
        <div style={{fontFamily:"var(--font-display)",fontSize:"var(--text-eyebrow)",letterSpacing:"var(--tracking-eyebrow)",
          textTransform:"uppercase",color:"var(--text-heading)",marginBottom:"var(--space-2)"}}>Region</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:"var(--space-2)"}}>
          {regions.map(r=><Tag key={r} selected={r===region} onClick={()=>setRegion(r)}>{r}</Tag>)}
        </div>
      </div>
      <div style={{marginLeft:"auto",display:"flex",gap:"var(--space-2)",alignItems:"center"}}>
        <Badge tone="soft">Saison 2026/27</Badge>
        <Tooltip label="Satzverhältnis"><Badge tone="outline">SV</Badge></Tooltip>
      </div>
    </div>

    <Tabs value={tab} onChange={setTab} style={{marginBottom:"var(--space-6)"}} items={[
      {value:"plan",label:"Spielplan",count:20},{value:"tabelle",label:"Tabelle",count:5},{value:"erg",label:"Ergebnisse",count:12}]}/>

    {tab==="tabelle"?<StandingsTable caption={`Level ${level} · Gruppe ${region}`} promotion={1} relegation={1} rows={[
      {rank:1,team:"Hamburg Hurricanes",played:10,won:9,lost:1,sets:"28:7",points:27},
      {rank:2,team:"Berlin Bumpers",played:10,won:8,lost:2,sets:"26:11",points:24},
      {rank:3,team:"Bremen Blockers",played:10,won:5,lost:5,sets:"18:18",points:15},
      {rank:4,team:"Kiel Kraken",played:10,won:3,lost:7,sets:"12:23",points:9},
      {rank:5,team:"Praha Pride Spikers",played:10,won:1,lost:9,sets:"6:29",points:3}]}/>:null}

    {tab==="plan"?<div style={{display:"flex",flexDirection:"column",gap:"var(--space-3)"}}>
      <Alert tone="safe" title="Safe Space">Spielorte sind nur im Manager sichtbar — für angemeldete Teams.</Alert>
      <MatchCard date="Sa 14.11." time="14:00" level={level} region={region} home="Berlin Bumpers" away="Hamburg Hurricanes" status="geplant"/>
      <MatchCard date="Sa 14.11." time="16:30" level={level} region={region} home="Bremen Blockers" away="Kiel Kraken" status="geplant"/>
      <MatchCard date="So 29.11." time="11:00" level={level} region={region} home="Praha Pride Spikers" away="Berlin Bumpers" status="geplant"/>
    </div>:null}

    {tab==="erg"?<div style={{display:"flex",flexDirection:"column",gap:"var(--space-3)"}}>
      <MatchCard date="Sa 31.10." time="14:00" level={level} region={region} home="Berlin Bumpers" away="Kiel Kraken"
        homeSets={3} awaySets={1} status="gespielt" sets={["25:21","23:25","25:19","25:17"]}/>
      <MatchCard date="Sa 31.10." time="16:30" level={level} region={region} home="Hamburg Hurricanes" away="Bremen Blockers"
        homeSets={3} awaySets={0} status="gespielt" sets={["25:18","25:22","25:14"]}/>
      <MatchCard date="So 18.10." time="11:00" level={level} region={region} home="Praha Pride Spikers" away="Hamburg Hurricanes"
        homeSets={0} awaySets={3} status="gespielt" sets={["19:25","17:25","21:25"]}/>
    </div>:null}
  </div>;
}
Object.assign(window,{LigaScreen});
})();

(function(){
const {Card,Input,Select,Checkbox,RadioGroup,Radio,Button,Alert,PatternBand,Badge}=window.QueerLeagueDesignSystem_ae47b3;

function MitmachenScreen(){
  const [klasse,setKlasse]=React.useState("offen");
  const [sent,setSent]=React.useState(false);
  return <div>
    <PatternBand pattern="documents" plate height={220}>
      <h1 style={{margin:"0 0 var(--space-2)",fontSize:"var(--text-display-2)"}}>Mitmachen</h1>
      <p style={{margin:0,color:"var(--text-muted)"}}>Team melden, Spieler*innen registrieren, Saison starten.</p>
    </PatternBand>
    <div style={{maxWidth:"var(--container-narrow)",margin:"0 auto",padding:"var(--space-12) var(--gutter-desktop)"}}>
      {sent?<Alert tone="success" title="Danke!" style={{marginBottom:"var(--space-6)"}}>
        Wir melden uns innerhalb einer Woche bei dir.</Alert>:null}
      <Card padding="var(--space-8)">
        <div style={{display:"flex",gap:"var(--space-2)",marginBottom:"var(--space-5)"}}>
          <Badge tone="orange">Anmeldung offen</Badge><Badge tone="soft">Meldeschluss 30. Juni</Badge>
        </div>
        <div style={{display:"grid",gap:"var(--space-5)"}}>
          <Input label="Teamname" required placeholder="z. B. Berlin Bumpers" hint="So erscheint das Team im Spielplan."/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-4)"}}>
            <Select label="Gewünschtes Level" required options={["A","B","C","D"]} placeholder="Bitte wählen"/>
            <Select label="Region" required options={["Nord","Ost","Süd","West","Mitte"]} placeholder="Bitte wählen"/>
          </div>
          <RadioGroup legend="Spielklasse">
            <Radio name="kl" label="Offene Liga" checked={klasse==="offen"} onChange={()=>setKlasse("offen")}/>
            <Radio name="kl" label="FLINTA*" description="Eigene Runde mit eigenem Spielplan." checked={klasse==="flinta"} onChange={()=>setKlasse("flinta")}/>
            <Radio name="kl" label="Senior*innen" description="Ab 40." checked={klasse==="senior"} onChange={()=>setKlasse("senior")}/>
          </RadioGroup>
          <Input label="Kontakt-E-Mail" required placeholder="team@example.org"/>
          <Input label="Erzähl uns kurz von euch" multiline rows={3} placeholder="Wie lange spielt ihr schon zusammen?"/>
          <Checkbox label="Wir haben die Safe-Space-Regeln gelesen" description="Keine Weitergabe von Hallen- und Personendaten."/>
          <div style={{display:"flex",gap:"var(--space-3)"}}>
            <Button variant="accent" size="lg" onClick={()=>setSent(true)}>Anmeldung senden</Button>
            <Button variant="ghost" size="lg">Erst Fragen stellen</Button>
          </div>
        </div>
      </Card>
    </div>
  </div>;
}
Object.assign(window,{MitmachenScreen});
})();

(function(){
const {Card,Badge,StandingsTable,PatternBand,LevelBadge,Select,BallIcon}=window.QueerLeagueDesignSystem_ae47b3;

function WallOfFameScreen(){
  const [season,setSeason]=React.useState("2025/26");
  return <div>
    <PatternBand pattern="table" plate height={200}>
      <h1 style={{margin:"0 0 var(--space-2)",fontSize:"var(--text-display-2)"}}>Wall of Fame</h1>
      <p style={{margin:0,color:"var(--text-muted)"}}>Meister*innen seit 1992.</p>
    </PatternBand>
    <div style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"var(--space-12) var(--gutter-desktop)"}}>
      <div style={{display:"flex",flexWrap:"wrap",gap:"var(--space-4)",alignItems:"flex-end",marginBottom:"var(--space-6)"}}>
        <Select label="Saison" value={season} onChange={e=>setSeason(e.target.value)}
          options={["2025/26","2024/25","2023/24","2022/23"]} style={{minWidth:160}}/>
        <Badge tone="soft">34 Saisons</Badge>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"var(--space-4)",marginBottom:"var(--space-8)"}}>
        {[["A","Amsterdam Ace Attack"],["B","Hamburg Hurricanes"],["C","Wien Wildcats"],["D","Lisboa Libero Love"]].map(([l,t])=>
          <Card key={l} tone="default" block={l==="A"}>
            <div style={{display:"flex",alignItems:"center",gap:"var(--space-3)",marginBottom:"var(--space-3)"}}>
              <LevelBadge level={l} size="lg"/><BallIcon size={30} tone="orange"/>
            </div>
            <h3 style={{margin:"0 0 var(--space-1)"}}>{t}</h3>
            <p style={{margin:0,fontSize:"var(--text-small)",color:"var(--text-muted)"}}>Meister*innen {season}</p>
          </Card>)}
      </div>
      <h2 style={{fontSize:"var(--text-h1)"}}>Titel nach Team</h2>
      <StandingsTable columns={[{key:"rank",label:"#",align:"right",width:44},{key:"team",label:"Team"},
        {key:"titles",label:"Titel",align:"right",width:80},{key:"first",label:"Erster",align:"right",width:90},
        {key:"last",label:"Letzter",align:"right",width:90}]} rows={[
        {rank:1,team:"Hamburg Hurricanes",titles:7,first:"1998",last:"2025/26"},
        {rank:2,team:"Amsterdam Ace Attack",titles:6,first:"2001",last:"2025/26"},
        {rank:3,team:"Berlin Bumpers",titles:5,first:"1994",last:"2021/22"},
        {rank:4,team:"Wien Wildcats",titles:3,first:"2010",last:"2025/26"}]}/>
    </div>
  </div>;
}
Object.assign(window,{WallOfFameScreen});
})();


(function(){
const {SiteHeader,SiteFooter}=window.QueerLeagueDesignSystem_ae47b3;
const NAV=[{value:"home",label:"Start"},{value:"liga",label:"Liga"},{value:"turniere",label:"Turniere"},
  {value:"fame",label:"Wall of Fame"},{value:"mitmachen",label:"Mitmachen"}];
function App(){
  const [page,setPage]=React.useState("home");
  const [lang,setLang]=React.useState("DE");
  const go=(p)=>{setPage(p);window.scrollTo(0,0)};
  return <div>
    <SiteHeader items={NAV} active={page} onNavigate={go} language={lang} onLanguage={setLang} cta="Team anmelden"/>
    {page==="home"?<window.HomeScreen go={go}/>:null}
    {page==="liga"||page==="turniere"?<window.LigaScreen/>:null}
    {page==="mitmachen"?<window.MitmachenScreen/>:null}
    {page==="fame"?<window.WallOfFameScreen/>:null}
    <SiteFooter note="Queer Volleyball League e.V. — seit 1992 europaweit am Netz. Rund 1.000 Mitglieder."
      columns={[{title:"Liga",links:["Spielplan","Tabellen","Ergebnisse","Regelwerk"]},
        {title:"Community",links:["Mitmachen","Wall of Fame","FLINTA*","Senior*innen"]},
        {title:"Verein",links:["Über uns","Safe Space","Kontakt","Impressum"]}]}/>
  </div>;
}
Object.assign(window,{WebsiteKit:App});
})();
