//Dentro de dataFuntions irán todas las funciones de como filtrar, ordenar, etc
import data from './data/dataset.js';


export function filterData (data, filterBy ,value){

  if (!Array.isArray(data) || typeof filterBy !==`string`) {
    return[];
  }
  
  const filteredData = data.filter(item => {
    if (item.hasOwnProperty (filterBy)){
      return item[filterBy]=== value;
    }
    return false;
});
    return filteredData;

}




