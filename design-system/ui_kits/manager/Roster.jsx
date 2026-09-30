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
