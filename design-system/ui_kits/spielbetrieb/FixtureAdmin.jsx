(function(){
const {Card,Tabs,Tag,Select,Button,Badge,MatchCard,StandingsTable,Breadcrumb,Alert,IconButton,Icon,Tooltip,EmptyState}=window.QueerLeagueDesignSystem_ae47b3;

function FixtureAdmin(){
  const [tab,setTab]=React.useState("plan");
  const [region,setRegion]=React.useState("Nord");
  return <div style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"var(--space-6) var(--gutter-desktop)"}}>
    <Breadcrumb items={[{value:"tool",label:"Spielbetrieb"},{value:"b",label:"Level B"},`Gruppe ${region}`]}/>
    <div style={{display:"flex",flexWrap:"wrap",alignItems:"flex-end",gap:"var(--space-4)",margin:"var(--space-4) 0 var(--space-5)"}}>
      <h1 style={{margin:0,fontSize:"var(--text-display-2)"}}>Spielbetrieb</h1>
      <Badge tone="soft">Saison 2026/27</Badge>
      <div style={{marginLeft:"auto",display:"flex",gap:"var(--space-2)"}}>
        <Button variant="secondary" iconLeft={<Icon name="download" size={18}/>}>Export</Button>
        <Button variant="accent" iconLeft={<Icon name="calendar-plus" size={18}/>}>Spieltag anlegen</Button>
      </div>
    </div>

    <div style={{display:"flex",flexWrap:"wrap",gap:"var(--space-3)",alignItems:"flex-end",marginBottom:"var(--space-5)"}}>
      <Select label="Level" options={["A","B","C","D"]} style={{minWidth:110}}/>
      <div>
        <div style={{fontFamily:"var(--font-display)",fontSize:"var(--text-eyebrow)",letterSpacing:"var(--tracking-eyebrow)",
          textTransform:"uppercase",color:"var(--text-heading)",marginBottom:"var(--space-2)"}}>Region</div>
        <div style={{display:"flex",gap:"var(--space-2)",flexWrap:"wrap"}}>
          {["Nord","Ost","Süd","West","Mitte"].map(r=><Tag key={r} selected={r===region} onClick={()=>setRegion(r)}>{r}</Tag>)}
        </div>
      </div>
      <div style={{marginLeft:"auto",display:"flex",gap:6,alignItems:"center"}}>
        <Tooltip label="Spiele ohne Ergebnis"><Badge tone="orange">3 offen</Badge></Tooltip>
      </div>
    </div>

    <Tabs value={tab} onChange={setTab} style={{marginBottom:"var(--space-5)"}} items={[
      {value:"plan",label:"Spielplan",count:20},{value:"erg",label:"Ergebnisse",count:12},
      {value:"tab",label:"Tabelle"},{value:"berichte",label:"Spielberichte",count:3}]}/>

    {tab==="plan"?<div style={{display:"grid",gridTemplateColumns:"minmax(0,2fr) minmax(0,1fr)",gap:"var(--space-5)"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"var(--space-3)"}}>
        <MatchCard date="Sa 14.11." time="14:00" level="B" region={region} home="Berlin Bumpers" away="Hamburg Hurricanes" status="geplant"/>
        <MatchCard date="Sa 14.11." time="16:30" level="B" region={region} home="Bremen Blockers" away="Kiel Kraken" status="läuft"/>
        <MatchCard date="So 29.11." time="11:00" level="B" region={region} home="Praha Pride Spikers" away="Berlin Bumpers" status="geplant"/>
        <MatchCard date="Sa 31.10." time="14:00" level="B" region={region} home="Berlin Bumpers" away="Kiel Kraken"
          homeSets={3} awaySets={1} status="gespielt" sets={["25:21","23:25","25:19","25:17"]}/>
      </div>
      <div style={{display:"grid",gap:"var(--space-4)",alignContent:"start"}}>
        <Alert tone="safe" title="Safe Space">Hallen werden intern zugeordnet, aber nie veröffentlicht.</Alert>
        <Card padding="var(--space-4)">
          <h3 style={{margin:"0 0 var(--space-3)"}}>Spieltag 6</h3>
          <div style={{display:"grid",gap:"var(--space-2)",fontSize:"var(--text-small)"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}><span>Spiele</span><strong>4</strong></div>
            <div style={{display:"flex",justifyContent:"space-between"}}><span>Bestätigt</span><strong>1</strong></div>
            <div style={{display:"flex",justifyContent:"space-between"}}><span>Offen</span><strong style={{color:"var(--qvl-orange)"}}>3</strong></div>
          </div>
          <div style={{display:"flex",gap:"var(--space-2)",marginTop:"var(--space-4)"}}>
            <Button size="sm" variant="primary">Erinnern</Button>
            <IconButton label="Spieltag bearbeiten" size="sm" variant="secondary"><Icon name="pencil" size={16}/></IconButton>
          </div>
        </Card>
      </div>
    </div>:null}

    {tab==="tab"?<StandingsTable caption={`Level B · Gruppe ${region}`} promotion={1} relegation={1} rows={[
      {rank:1,team:"Hamburg Hurricanes",played:10,won:9,lost:1,sets:"28:7",points:27},
      {rank:2,team:"Berlin Bumpers",played:10,won:8,lost:2,sets:"26:11",points:24},
      {rank:3,team:"Bremen Blockers",played:10,won:5,lost:5,sets:"18:18",points:15},
      {rank:4,team:"Kiel Kraken",played:10,won:3,lost:7,sets:"12:23",points:9},
      {rank:5,team:"Praha Pride Spikers",played:10,won:1,lost:9,sets:"6:29",points:3}]}/>:null}

    {tab==="erg"?<StandingsTable caption="Ergebnisse · Spieltag 5" columns={[
      {key:"date",label:"Datum",width:110},{key:"home",label:"Heim"},{key:"away",label:"Gast"},
      {key:"result",label:"Sätze",align:"right",width:80},{key:"status",label:"Status",align:"right",width:120}]} rows={[
      {date:"Sa 31.10.",home:"Berlin Bumpers",away:"Kiel Kraken",result:"3:1",status:"bestätigt"},
      {date:"Sa 31.10.",home:"Hamburg Hurricanes",away:"Bremen Blockers",result:"3:0",status:"bestätigt"},
      {date:"So 18.10.",home:"Praha Pride Spikers",away:"Hamburg Hurricanes",result:"0:3",status:"offen"}]}/>:null}

    {tab==="berichte"?<EmptyState title="Drei Berichte warten"
      description="Spielberichte werden erst öffentlich, wenn beide Teams bestätigt haben."
      action={<Button variant="accent">Offene Berichte prüfen</Button>}/>:null}
  </div>;
}
Object.assign(window,{FixtureAdmin});
})();
