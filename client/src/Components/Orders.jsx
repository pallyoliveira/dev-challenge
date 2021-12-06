import React , {useContext,  useState, useEffect} from "react";
// import {purchase_orders} from "../data/API/data";
import Context from '../Context/Context';
import {fetchPurchase} from "../api";

function Orders() {
  const {  filterMap } = useContext(Context);
  const [project, updateProject ] = useState([]);

  useEffect(() => {
    async function fetchA() {
      const json = await fetchPurchase();
      updateProject(json);
      console.log(json)
    }
    fetchA();
  }, []);

  return (
    <div className="border border-secondary">
    <div className="bord">
       <h5>Pedidos de Compra</h5>
       <p>(exibindo {filterMap(project, 'MaterialName').length}/{project.length} itens)</p>
       </div>
      {filterMap(project, 'MaterialName').map((e, key) => (
       <section key={key} className="quadro">
          <span className="grifo">#{e.PurchaseOrderID}</span>
           <span className="responsives">{e.MaterialName}</span>
           <span className="resp">Qtd: {e.Quantity} pç</span>
        </section>
      ))}

    </div>
  );
}

export default Orders;
