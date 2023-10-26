import {filterData} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const arregloPilotos = data;
renderItems(arregloPilotos);

// Aquí deberemos llamar a las funciones incluidas en dataFuntions.js

const selectFilter = document.querySelector('#select-filter'); //Llamando al elemento del dom
selectFilter.addEventListener('change', function () {
    const selected = selectFilter.value; // Obtiene el valor seleccionado
    //const filteredData = filterData(data, `team`, result);

    renderItems(filteredData)
}); 

//const teamFilter = document.querySelector('#select-filter'); //Llamando al elemento del dom
//selectElement.addEventListener('change', (event) => {
  //  const result = event.target.value;
  //  const filteredData = filterData(data, `escuderia`, result);

    // renderItems(filteredData)
    //}); 

