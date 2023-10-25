// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};

//Dentro de dataFuntions irán todas las funciones de como filtrar, ordenar, etc

function clearFilters() {
  document.getElementById('escuderia').value = '';
  document.getElementById('podiums-win').value = '';
  document.getElementById('alive-filter').checked = false;
  document.getElementById('dead-filter').checked = false;
  document.getElementById('sort-order').value = 'asc'; // Restaura el selector de orden alfabético
  document.getElementById('sort-order-two').value = 'most-championships'; // Restaura el selector de campeonatos

  renderItems(data); // Muestra todos los pilotos sin filtros ni ordenamientos
}

// Agrega un evento para el botón "Limpiar"
const clearFiltersButton = document.getElementById('clear-filters');
clearFiltersButton.addEventListener('click', clearFilters);
