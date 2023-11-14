export const renderItems = (data) => {
  const ul = document.createElement("ul");

  data.forEach((element) => { 
    const li = document.createElement("li");
    li.classList.add("list"); // Rubi: Agrega la clase "list" (Confirmar porque no funciona)
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "PilotsF1");
    li.setAttribute("data-id", element.id);

    li.innerHTML = `
      <dl class="root-list" itemscope itemtype="PilotsF1">
        <img src="${element.imageUrl}" itemprop="image" />
        <dt></dt><dd itemprop="name">${element.name}</dd>
        <dt></dt><dd itemprop="placeOfBirth">${element.facts.placeOfBirth}</dd>
        <dt></dt><dd itemprop="lastTeam">${element.facts.lastTeam}</dd>
        <dt></dt><dd itemprop="championshipsWon">Campeonatos: ${element.extraInfo.championshipsWon}</dd>
      </dl>
    `;

    ul.appendChild(li);
  });

  return ul;
};
