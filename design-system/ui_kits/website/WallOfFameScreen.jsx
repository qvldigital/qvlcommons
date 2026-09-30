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
