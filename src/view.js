export const renderItems = (data) => {
  // Llamando al elemento padre que se encuentra en index.html
  const containerRoot  = document.getElementById("root");
  
  // Creando la ul dentro del div con id root
  const ul =  document.createElement("ul");

  // Por medio de appendChild podemos incluir en un nodo un nuevo hijo
  containerRoot.appendChild(ul);

  // Variable que contiene la data de los pilotos
  let pilotos = data[i];

  // For para crear todas las li dentro de la ul
  for(let i = 0; i < data.length; i++){

    // Creamos un li por cada piloto con el bucle
    let li = document.createElement("li");
    // * Bloqueo
    li.textContent = pilotos[i];
    
    // Agrego a ul las li
    ul.appendChild(li);
      

  }

      /* 
        (Check) 1. Crear un elemento padre <div id="root"> 
        (Check) 2. Crear una <ul> dentro del elemento padre (div con id root)
        () 3. Crear una serie de <li>
        () 4. Crear dentro de los li las propiedades y valores que contiene la data 
              Imagen, Nombre, Nacionalidad, Escuderia, Etc 
        () 5. Retornar las card creadas
        () 6. Llamar la función desde el main para la visualización   
      */
  
};


  let properties  = `
    <dl itemscope itemtype="PilotsF1">
      <img src="${piloto.imageUrl}" alt="${piloto.name}" />
      <dt>Nombre:</dt>
      <dd itemprop="name">${piloto.name}</dd>
      <dt>Año de nacimiento:</dt>
      <dd itemprop="yearOfBirth">${piloto.facts.yearOfBirth}</dd>
      <dt>Lugar de nacimiento:</dt>
      <dd itemprop="placeOfBirth">${piloto.facts.placeOfBirth}</dd>
      <dt>Campeonatos ganados:</dt>
      <dd itemprop="championshipsWon">${piloto.facts.championshipsWon}</dd>
      <dt>Último equipo:</dt>
      <dd itemprop="lastTeam">${piloto.extraInfo.lastTeam}</dd>
      <dt>Altura:</dt>
      <dd itemprop="height">${piloto.extraInfo.height}</dd>
    </dl>
  `;

 
