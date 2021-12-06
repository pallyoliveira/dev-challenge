import React , {useContext, useState, useEffect} from "react";
// import { materials } from "../data/API/data";
import Context from '../Context/Context';
import {fetchMaterials} from "../api";

function Materials() {
    const { filterMap } = useContext(Context);
    const [project, updateProject ] = useState([]);


    useEffect(() => {
      async function fetchA() {
        const json = await fetchMaterials();
        updateProject(json);
        console.log(json)
      }
      fetchA();
    }, []);
  
  return (
    <div className="border border-secondary">
         <div className="bord">
       <h5>Produtos</h5>
       <p >(exibindo {filterMap(project, 'MaterialName').length}/{project.length} itens) </p>
       </div>
      {filterMap(project, 'MaterialName').map((e, key) => (
        
        <section key={key} className="quadro">
          <span  className="grifo">#{e.MaterialID}</span>
          {' '}
          <span className="responsives">{e.MaterialName}</span>
        </section>
      ))}

    </div>
  );
}

export default Materials;
