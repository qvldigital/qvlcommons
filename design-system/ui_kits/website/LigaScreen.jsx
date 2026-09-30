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
