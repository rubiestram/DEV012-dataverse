import { filterData, sortData, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

let arrayPilots = data;
let sortOption = null; // Para mantener el estado de la opción de ordenamiento

// HTML dinámico
const containerRoot = document.querySelector("#root");
containerRoot.appendChild(renderItems(arrayPilots));

// DOM filtrar
const filter = document.getElementById("select-filter");
filter.addEventListener('change', function (event) {
  const selectedValue = event.target.value;
  arrayPilots = filterData(data, "team", selectedValue);
  // Ordenar la data filtrada, si es necesario
  if (sortOption) {
    arrayPilots = sortData(arrayPilots, sortOption);
  }
  containerRoot.innerHTML = "";
  containerRoot.appendChild(renderItems(arrayPilots));
});

// DOM Order
const order = document.getElementById("sort-order");
order.addEventListener('change', function (event) {
  arrayPilots = sortData(arrayPilots, "name", event.target.value);
  containerRoot.innerHTML = "";
  containerRoot.appendChild(renderItems(arrayPilots));
});

// DOM limpiar (reiniciar la aplicación)
const clearButton = document.querySelector('[data-testid="button-clear"]');
clearButton.addEventListener('click', function () {
  // Restablece los filtros y ordenamientos
  filter.value = 'Todos';
  order.value = 'sin ordenar';

  arrayPilots = data;
  sortOption = null;
  containerRoot.innerHTML = "";
  containerRoot.appendChild(renderItems(arrayPilots));
});


