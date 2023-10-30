export const renderItems = (data) => {
  const ul =  document.createElement("ul");

  for(let i = 0; i < data.length; i++){
    const element = data[i];
    const li = document.createElement("li");
    li.innerHTML = ""; 
    li.innerHTML = `
    <dl class="cards" itemscope itemtype="PilotsF1">
    <img src="${element.imageUrl}"/>
    <dd itemprop="name">${element.name}</dd>
    <dd itemprop="placeOfBirth">${element.facts.placeOfBirth}</dd>
    <dd itemprop="team">${element.facts.team}</dd>
    <dt>Campeonatos:</dt><dd itemprop="championshipsWon">${element.extraInfo.championshipsWon}</dd>
    </dl>
  `
    ul.appendChild(li);
  }
  return ul;
};



 
