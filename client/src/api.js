export const fetchAPI = async () => {
  try {
    const response = await fetch('http://localhost:5000/equipaments/');
    const apiJson = response.json();
    console.log(apiJson)
    return apiJson;
  } catch (error) {
    console.log(error)
    return error;
  }
};

export const fetchOrder = async () => {
  try {
    const response = await fetch('http://localhost:5000/sales/');
    const apiJson = response.json();
    console.log(apiJson)
    return apiJson;
  } catch (error) {
    return error;
  }
};


export const fetchMaterials = async () => {
  try {
    const response = await fetch('http://localhost:5000/materials/');
    const apiJson = response.json();
    console.log(apiJson)
    return apiJson;
  } catch (error) {
    return error;
  }
};


export const fetchPurchase = async () => {
  try {
    const response = await fetch('http://localhost:5000/purchase/');
    const apiJson = response.json();
    console.log(apiJson)
    return apiJson;
  } catch (error) {
    return error;
  }
};


export const fetchWorkforce = async () => {
  try {
    const response = await fetch('http://localhost:5000/workforce/');
    const apiJson = response.json();
    console.log(apiJson)
    return apiJson;
  } catch (error) {
    return error;
  }
};