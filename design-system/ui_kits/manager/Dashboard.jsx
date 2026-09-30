(function(){
const {Card,Badge,Button,MatchCard,LevelBadge,Alert,StandingsTable,Icon}=window.QueerLeagueDesignSystem_ae47b3;
function Dashboard({go}){
  return <div style={{padding:"var(--space-4)",display:"grid",gridTemplateColumns:"minmax(0,1fr)",gap:"var(--space-4)"}}>
    <Card tone="brand" padding="var(--space-5)">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"var(--space-3)"}}>
        <div>
          <div style={{fontFamily:"var(--font-display)",fontSize:"var(--text-eyebrow)",letterSpacing:"var(--tracking-eyebrow)",
            textTransform:"uppercase",opacity:.85}}>Mein Team</div>
          <h2 style={{color:"var(--qvl-white)",margin:"var(--space-1) 0 var(--space-3)",fontSize:"var(--text-h1)"}}>Berlin Bumpers</h2>
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
        color:"var(--qvl-petrol)",lineHeight:1}}>11</div>
        <div style={{fontSize:"var(--text-small)",color:"var(--text-muted)"}}>Spieler*innen gemeldet</div></Card>
      <Card padding="var(--space-4)"><div style={{fontFamily:"var(--font-display)",fontSize:"var(--text-display-2)",
        color:"var(--qvl-petrol)",lineHeight:1}}>24</div>
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
