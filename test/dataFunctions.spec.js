import { filterData } from './dataFunctions'; 
import { data as fakeData } from "./data.js";

describe('Data Functions', () => {
  it('Filtrar por escuderia - Williams', () => {
    const filteredData = filterData(fakeData, 'Williams');
    expect(filteredData.every(driver => driver.facts.team === 'Williams')).toBe(true);
  });

  it('Filtrar por escuderia - Mercedes', () => {
    const filteredData = filterData(fakeData, 'Mercedes');
    expect(filteredData.every(driver => driver.facts.team === 'Mercedes')).toBe(true);
  });

});
