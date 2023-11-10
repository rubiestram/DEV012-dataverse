export const renderItems = (data) => {
  const ul = document.createElement("ul");

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const li = document.createElement("li");
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "PilotsF1");
    li.setAttribute("data-id", element.id);

    li.innerHTML = `
      <dl class="root-list" itemscope itemtype="PilotsF1">
        <img src="${element.imageUrl}" itemprop="image" />
        <dt></dt><dd itemprop="name">${element.name}</dd>
        <dt></dt><dd itemprop="placeOfBirth">${element.facts.placeOfBirth}</dd>
        <dt></dt><dd itemprop="team">${element.facts.team}</dd>
        <dt></dt><dd itemprop="championshipsWon">Campeonatos: ${element.extraInfo.championshipsWon}</dd>
      </dl>
    `;

    ul.appendChild(li);
  }
  return ul;
};
