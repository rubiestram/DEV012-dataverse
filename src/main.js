import { filterData } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';
import { computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';
 
let arrayPilots = data;
// renderItems(arregloPilotos);

// HTML dinámico
const containerRoot  = document.querySelector("#root");
containerRoot.appendChild(renderItems(arrayPilots));

// DOM filtrar
const filter = document.getElementById("select-filter");
filter.addEventListener('change', function (event) {
    arrayPilots = filterData(arrayPilots, "team", event.target.value);
    console.log(event.target.value);
    console.log(arrayPilots);
    containerRoot.innerHTML = "";
    containerRoot.appendChild(renderItems(arrayPilots));
});

// DOM ordenar
const order = document.getElementById("sort-order");
order.addEventListener('change', function (event) {
    const sortOrder = event.target.value; // Obtén el valor seleccionado ('asc' o 'desc') del select.
    // Aquí llamamos a la función sortData para ordenar el arreglo de pilotos (arrayPilots).
    arrayPilots = sortData(arrayPilots, 'nombre', event.target.value);
    containerRoot.innerHTML = "";
    containerRoot.appendChild(renderItems(arrayPilots));
});


