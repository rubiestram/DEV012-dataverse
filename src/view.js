export const renderItems = (data) => {
  // Llamando al elemento padre que se encuentra en index.html
  const containerRoot  = document.getElementById("root");
  
  // Creando la ul dentro del div con id root
  const ul =  document.createElement("ul");

  // For para crear todas las li dentro de la ul
  for(let i = 0; i < data.length; i++){
    // Variable donde alamacenara la info de cada piloto
    const element = data[i];
    // Creamos un li por cada piloto
    const li = document.createElement("li");
    li.innerHTML = ""; 
    li.innerHTML = `
    <dl class="liPilot" itemscope itemtype="PilotsF1">
    <img src="${element.imageUrl}"/>
    <dt>Nombre:</dt><dd itemprop="name">${element.name}</dd>
    <dt>Descripción corta:</dt><dd itemprop="shortDescription">${element.shortDescription}</dd>
    <dt>Descripción:</dt><dd itemprop="description">${element.description}</dd>

    <dt>Año de nacimiento:</dt><dd itemprop="yearOfBirth">${element.facts.yearOfBirth}</dd>
    <dt>Año de fallecimiento:</dt><dd itemprop="yearOfDeath">${element.facts.yearOfDeath}</dd>
    <dt>Lugar de Nacimiento:</dt><dd itemprop="placeOfBirth">${element.facts.placeOfBirth}</dd>
    <dt>Campeonatos:</dt><dd itemprop="championshipsWon">${element.facts.championshipsWon}</dd>

    <dt>Podios:</dt><dd itemprop="podiums">${element.extraInfo.podiums}</dd>
    <dt>Carreras:</dt><dd itemprop="races">${element.extraInfo.races}</dd>
    <dt>Última Escuderia:</dt><dd itemprop="lastTeam">${element.extraInfo.lastTeam}</dd>
    <dt>Altura:</dt><dd itemprop="height">${element.extraInfo.height}</dd>
    </dl>
  `
   
    ul.appendChild(li);
  }

  containerRoot.appendChild(ul);

};




 
