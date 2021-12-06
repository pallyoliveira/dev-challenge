import React, { useContext, useState, useEffect } from "react";
import Context from '../Context/Context';
import { fetchOrder } from "../api";



function Sales() {
  const { filterMap } = useContext(Context);
  const [project, updateProject] = useState([]);

  useEffect(() => {
    async function fetchA() {
      const json = await fetchOrder();
      updateProject(json);
      console.log(json)
    }
    fetchA();
  }, []);

  return (

    <div className="border border-secondary">


      <div className="bord">

        <h5> Pedidos de Venda </h5>
        <p>(exibindo {filterMap(project, 'MaterialName').length}/{project.length} itens)</p>
      </div>

      {filterMap(project, 'MaterialName').map((e, key) => (
        <section key={key} className="quadro">
          <span className="grifo">#{e.SalesOrderID}</span>
          <span className="responsives">{e.MaterialName}</span>
          <span>Qtd: {e.Quantity} pç</span>
        </section>

      ))}


    </div>





  );
}

export default Sales;
