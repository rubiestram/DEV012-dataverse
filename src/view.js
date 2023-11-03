export const renderItems = (data) => {
  const ul = document.createElement("ul");

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const li = document.createElement("li");
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "PilotsF1");

    li.innerHTML = `
      <dl class="root-list">
        <img src="${element.imageUrl}" itemprop="image" />
        <dd itemprop="name">${element.name}</dd>
        <dd itemprop="placeOfBirth">${element.facts.placeOfBirth}</dd>
        <dd itemprop="team">${element.facts.team}</dd>
        <dt>Campeonatos:<dd itemprop="championshipsWon">${element.extraInfo.championshipsWon}</dd></dt>
      </dl>
    `;

    ul.appendChild(li);
  }
  return ul;
};



 
