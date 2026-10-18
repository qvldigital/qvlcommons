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
