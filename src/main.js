import { filterData, sortData, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

let arrayPilots = data;
let sortOption = null; // Para mantener el estado de la opción de ordenamiento

// HTML dinámico
const containerRoot = document.querySelector("#root");
containerRoot.appendChild(renderItems(arrayPilots));

// Rubi: DOM Estadística inicial 
updateAveragePodiums(arrayPilots);
// Función para actualizar el promedio de podios
function updateAveragePodiums(data) {
  const averagePodiumsElement = document.getElementById('averagePodiums');
  const averagePodiums = computeStats(data);
  averagePodiumsElement.textContent = averagePodiums;
}

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
  // Rubi: Probando estadistica
  updateAveragePodiums(arrayPilots);
});

// DOM Order
const order = document.getElementById("sort-order");
order.addEventListener('change', function (event) {
  arrayPilots = sortData(arrayPilots, "name", event.target.value);
  containerRoot.innerHTML = "";
  containerRoot.appendChild(renderItems(arrayPilots));
  // Rubi: probando estadistica
  updateAveragePodiums(arrayPilots);
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
  // Probando estadistica
  updateAveragePodiums(arrayPilots);
});

// Menú hamburguesa
const filters = document.querySelector('.cajamenu');
const hamburguerButton = document.getElementById('hamburguer');
const closeButton = document.getElementById('close');

function handleResize() {
  if (window.innerWidth > 600) {
    filters.classList.remove('noWidth');
    filters.classList.add('haflWidth');
    hamburguerButton.classList.add('noDisplay');
    closeButton.classList.add('noDisplay');
  } else {
    filters.classList.add('noWidth');
    filters.classList.remove('haflWidth');
    hamburguerButton.classList.remove('noDisplay');
    closeButton.classList.add('noDisplay');
  }
}

// Llama a la función handleResize en la carga inicial de la página
handleResize();

// Agrega un evento de redimensionamiento para manejar cambios en el tamaño de la ventana
window.addEventListener('resize', handleResize);

hamburguerButton.addEventListener('click', function () {
  filters.classList.add('haflWidth');
  filters.classList.remove('noWidth');
  hamburguerButton.classList.add('noDisplay');
  closeButton.classList.remove('noDisplay');
});

closeButton.addEventListener('click', function () {
  filters.classList.remove('haflWidth');
  filters.classList.add('noWidth');
  closeButton.classList.add('noDisplay');
  hamburguerButton.classList.remove('noDisplay');
});



