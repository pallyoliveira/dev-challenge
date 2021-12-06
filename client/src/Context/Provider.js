import React, { useState} from 'react';
import Context from './Context';



export default function Provider({ children }) {

  const [searchText, setSearchText] = useState('');

  
   const filterMap = (data, key) => {
    const filterName = data.filter((n) => n[key].toLowerCase().includes(searchText.toLowerCase()));
    return filterName;
  };



    const valuesContext = {
    searchText,
    setSearchText,
    filterMap,
   
  
    };

  return (
    <Context.Provider value={ valuesContext }>
      {children}
    </Context.Provider>
  );
}

