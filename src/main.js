import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';
 
let arregloPilotos = data;
// renderItems(arregloPilotos);

// HTML dinámico
const containerRoot  = document.querySelector("#root");
containerRoot.appendChild(renderItems(arregloPilotos));

// DOM
const filter = document.getElementById("select-filter");
filter.addEventListener('change', function (event) {
    arregloPilotos = filterData(arregloPilotos, "team", event.target.value);
    console.log(event.target.value);
    console.log(arregloPilotos);
    containerRoot.innerHTML = "";
    containerRoot.appendChild(renderItems(arregloPilotos));
});




