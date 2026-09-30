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
