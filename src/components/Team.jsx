import Header from "./Header";
import TeamBody from "./TeamBody";

const Team = () => {
    return(
        <>
        <section className="teem" id="teem">
          <div className="container-fluid">
            <Header />        
            <TeamBody/>
            
          </div>
        </section>
      </>
    );
};
export default Team;