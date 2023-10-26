export const renderItems = (data) => {
  const containerRoot  = document.getElementById("root");
  const ul =  document.createElement("ul");

  for(let i = 0; i < data.length; i++){
    const element = data[i]; // Variable donde alamacenara la info de cada piloto
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
    <dt>Escudería:</dt><dd itemprop="team">${element.facts.team}</dd>

    <dt>Podios:</dt><dd itemprop="podiums">${element.extraInfo.podiums}</dd>
    <dt>Campeonatos:</dt><dd itemprop="championshipsWon">${element.extraInfo.championshipsWon}</dd>
    </dl>
  `
   
    ul.appendChild(li);
  }
  
  containerRoot.appendChild(ul);

};




 
