import React , {useContext,  useState, useEffect} from "react";
// import {workforce} from "../data/API/data";
import Context from '../Context/Context';
import { fetchWorkforce } from "../api";

function Workforce() {
  const {  filterMap } = useContext(Context);
  const [project, updateProject ] = useState([]);

  useEffect(() => {
    async function fetchA() {
      const json = await  fetchWorkforce();
      updateProject(json);
      console.log(json)
    }
    fetchA();
  }, []);
  return (
    <div className="border border-secondary">
    <div className="bord">
       <h5>Mão de Obra</h5>
     
       <p>(exibindo {filterMap(project, 'Name').length}/{project.length} itens)</p>
       </div>
      {filterMap(project, 'Name').map((e, key) => (
       <section key={key} className="quadro">
          <span className="grifo">#{e.WorkforceID}</span>
           <span className="responsives">{e.Name}</span>
           <span>{e.Shift}</span>
        </section>
      ))}

    </div>
  );
}

export default Workforce;
