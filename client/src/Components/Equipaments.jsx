import React , {useContext, useState, useEffect} from "react";
import Context from '../Context/Context';
import {fetchAPI} from "../api";


function Equipaments() {
  const {  filterMap} = useContext(Context);
  const [project, updateProject ] = useState([]);


  useEffect(() => {
    async function fetchA() {
      const json = await fetchAPI();
      updateProject(json);
      console.log(json)
    }
    fetchA();
  }, []);



   return (
    <div className="border border-secondary">
         
       <div className="bord">
   <h5>Equipamentos</h5> 
 
 
      <p >(exibindo {filterMap(project, 'EquipmentName').length}/{project.length} itens)</p>
      </div>
     
  
      {filterMap(project, 'EquipmentName').map((e, key) => (
        <section key={key}  className="quadro">
          <span className="grifo">#{e.EquipmentID}</span>
          <span className="responsives">{e.EquipmentName}</span>
        </section>
      ))}
      
    </div>

  );
}

export default Equipaments;
