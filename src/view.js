export const renderItems = (data) => {
  // Llamando al elemento padre que se encuentra en index.html
  const containerRoot  = document.getElementById("root");
  
  // Creando la ul dentro del div con id root
  const ul =  document.createElement("ul");

  // Por medio de appendChild podemos incluir en un nodo un nuevo hijo
  containerRoot.appendChild(ul);

  // For para crear todas las li dentro de la ul
  for(let i = 0; i < data.length; i++){

    // Creamos un li por cada piloto con el bucle
    let li = document.createElement("li");
    li.innerHTML = data[i].name;

    // Agrego a ul las li
    ul.appendChild(li);
      

  }

};

/* 
    (Check) 1. Crear un elemento padre <div id="root"> 
    (Check) 2. Crear una <ul> dentro del elemento padre (div con id root)
    () 3. Crear una serie de <li>
    () 4. Crear dentro de los li las propiedades y valores que contiene la data 
          Imagen, Nombre, Nacionalidad, Escuderia, Etc 
    () 5. Retornar las card creadas
    () 6. Llamar la función desde el main para la visualización   
*/




 
