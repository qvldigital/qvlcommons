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
