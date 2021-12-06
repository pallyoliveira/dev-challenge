// import lupa from '../images/lupa.svg'
import logo from '../images/logo_multisearch.png'
import React, { useContext, useState, useEffect} from 'react';
import Context from '../Context/Context';


function Header() {
  const { setSearchText, searchText } = useContext(Context);
  const [upTotal, setTotal] = useState(0);
  useEffect(() => { 
    const total = document.querySelectorAll('.responsives').length
     setTotal(total);
   }, [searchText]);
 

  return (
   
      <section className="header"> 
      
      <img src={logo} alt=""  width="300px" />
      
      <input
        type="text"
        placeholder="Buscar pelo nome do produto"
        value={ searchText }
        onChange={ (e) => setSearchText(e.target.value)}
      />
    
      <p className="total">Exibindo {upTotal} resultados</p>
        {/* <p>(exibindo {filterMap(searchText).length} itens)</p> */}
      {/* <button
       class="btn btn-outline-dark">
      <img src={lupa} alt="lupa" height="18px" />
       </button> */}
     
    </section>
  
  );
}


export default Header;
