import { filterData, sortData } from "../src/dataFunctions.js";
import { data as dataFake } from "./data.js";

// describe("filterData", () => {
//   it("Filtrar por escuderia - Williams", () => {
//     const arrayEntrada = [
//       {
//         id: "alain-prost",
//         name: "Alain Prost",
//         shortDescription:
//           "Piloto francés conocido como: El Profesor. Con 4 campeonatos mundiales, es una leyenda de la Fórmula 1.",
//         description:
//           "Apodado: El Profesor, este piloto legendario es ampliamente considerado uno de los mejores pilotos en la historia de la Fórmula 1. Con una astucia estratégica y un estilo de conducción calculado, ganó 4 campeonatos mundiales y es una verdadera leyenda del deporte. Su rivalidad con Ayrton Senna se ha convertido en un capítulo legendario en la historia del automovilismo. A lo largo de su carrera, demostró una habilidad excepcional para gestionar carreras y equipos, consolidando su estatus como una verdadera leyenda del deporte.",
//         imageUrl: "./data/images/alain_prost.png",
//         facts: {
//           yearOfBirth: 1955,
//           yearOfDeath: "Sigue vivo",
//           placeOfBirth: "Lorette, Francia",
//           team: "Williams",
//         },
//         extraInfo: {
//           podiums: 106,
//           championshipsWon: 4,
//         },
//       },
//       {
//         id: "michael-schumacher",
//         name: "Michael Schumacher",
//         shortDescription:
//           "Icónico piloto alemán con 7 campeonatos mundiales y un legado duradero en la Fórmula 1.",
//         description:
//           "El legendario piloto alemán de Fórmula 1, es conocido por sus 7 campeonatos mundiales y su destacado paso por Ferrari, marcando una era dorada en la escudería italiana. Su regreso a la Fórmula 1 con Mercedes, aunque menos exitoso, resaltó su pasión por las carreras. Trágicamente, en 2013, sufrió un grave accidente de esquí que cambió su vida. Desde entonces, su salud es motivo de privacidad y preocupación. A pesar de las adversidades, Schumacher sigue siendo un símbolo de valentía y determinación, dejando un legado duradero como uno de los más grandes en la historia de la Fórmula 1.",
//         imageUrl: "./data/images/michael_shumacher.png",
//         facts: {
//           yearOfBirth: 1969,
//           yearOfDeath: "Sigue vivo",
//           placeOfBirth: "Hürth-Hermülheim, Alemania",
//           team: "Mercedes",
//         },
//         extraInfo: {
//           podiums: 155,
//           championshipsWon: 7,
//         },
//       },
//     ];
//     const resultado = [
//       {
//         id: "alain-prost",
//         name: "Alain Prost",
//         shortDescription:
//           "Piloto francés conocido como: El Profesor. Con 4 campeonatos mundiales, es una leyenda de la Fórmula 1.",
//         description:
//           "Apodado: El Profesor, este piloto legendario es ampliamente considerado uno de los mejores pilotos en la historia de la Fórmula 1. Con una astucia estratégica y un estilo de conducción calculado, ganó 4 campeonatos mundiales y es una verdadera leyenda del deporte. Su rivalidad con Ayrton Senna se ha convertido en un capítulo legendario en la historia del automovilismo. A lo largo de su carrera, demostró una habilidad excepcional para gestionar carreras y equipos, consolidando su estatus como una verdadera leyenda del deporte.",
//         imageUrl: "./data/images/alain_prost.png",
//         facts: {
//           yearOfBirth: 1955,
//           yearOfDeath: "Sigue vivo",
//           placeOfBirth: "Lorette, Francia",
//           team: "Williams",
//         },
//         extraInfo: {
//           podiums: 106,
//           championshipsWon: 4,
//         },
//       },
//     ];
//     expect(filterData(arrayEntrada, "team", "Williams")).toEqual(resultado);
//   });
// });

describe("filterData", () => {
  it("debe filtrar los pilotos por escudería - Williams", () => {
    const filteredData = filterData(dataFake, "team", "Williams");
    expect(filteredData.length).toBe(2);
  });

  it("debe filtrar los pilotos por escudería - Mercedes", () => {
    const filteredData = filterData(dataFake, "team", "Mercedes");
    expect(filteredData.length).toBe(2);
  });

  it("debe filtrar los pilotos por escudería - McLaren", () => {
    const filteredData = filterData(dataFake, "team", "McLaren");
    expect(filteredData.length).toBe(1);
  });
});


describe("sortData", () => {
  it("debe ordenar los nombres ascendentemente", () => {
    const fakeData = [
      "Niki Lauda",
      "Lewis Hamilton",
      "Nigel Mansell",
      "Alain Prost",
      "Michael Schumacher",
    ];

    const sortedData = sortData([...fakeData], "name", "asc");

    const resultSortData = [
      "Alain Prost",
      "Lewis Hamilton",
      "Michael Schumacher",
      "Nigel Mansell",
      "Niki Lauda",
    ];
    
    expect(sortedData).toEqual(resultSortData);
  });
});




