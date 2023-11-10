import {filterBy} from "../src/dataFunctions.js";
import {data} from './data.js';

console.log(data);

describe('filterBy', () => {
  it('debe filtrar los elementos correctamente', () => {
    // Realiza las pruebas de filterBy aquí
    // Ejemplo: 
    const filteredData = filterBy(data, 'team', "Mercedes"); // Llama a la función filterBy con la data y un filtro
    // Asegúrate de que el resultado sea el esperado
    expect(filteredData("Mer")).toBe(2);
  });
});
// describe('anotherExample', () => {

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
