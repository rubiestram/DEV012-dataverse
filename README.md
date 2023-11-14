# Dataverse Pilotos F1
![pagina-principal](https://github.com/XatAlcantara/DEV012-dataverse/blob/main/Pagina-inicio.png?raw=true)


## Indice

* [Introduccion](#Introduccion)
* [Historia de Usuaria](#Historia-de-usuario)
* [Prototipos](#Prototipos)
* [Generacion de Prompting](#Generacion-de-Prompting)
* [Funcionalidades](#Funcionalidades)
* [Desarrollo](#Desarrollo)
* [Pruebas Unitarias](#Pruebas-Unitarias)
* [Tecnologias Utilizadas](#Tecnologias-Utilizadas)
* [Desarrolladoras](#Desarrolladoras)


## Introduccion 
Según Forbes, el 90% de los datos existentes hoy en día se ha creado en los últimos dos años. Esta explosión de información nos lleva a la necesidad de estructurar y presentar estos datos de manera clara y comprensible. En este contexto, surge nuestro proyecto: una página web diseñada para desplegar tarjetas informativas sobre los talentosos pilotos de la Fórmula 1.

En la imagen adjunta, observarás cómo se construyo una interfaz amigable y fácil de entender. Nuestra misión fue crear una plataforma web que no solo exhiba la información detallada sobre los pilotos, sino que también permita a los usuarios filtrarla, ordenarla y realizar cálculos estadísticos para obtener una visión aún más completa.


## Historias de Usuaria
Las principales usuarias del producto serian aquellas personas con un interés genuino en conocer más detalles sobre los pilotos de la F1. Su objetivo principal es sumergirse en la carrera de cada piloto destacado, obteniendo una comprensión mas detallada de su historial y logros.

En cuanto a la interfaz, estas usuarias buscarian información clave como su fotografía, nombre, año de nacimiento, campeonatos y última escudería de cada piloto. La relevancia de estos datos radica en proporcionar una visión completa y rápida de la trayectoria de cada corredor.

El producto se utiliza en diversas situaciones, desde antes hasta después de un gran premio. Las usuarias pueden explorar la plataforma para entender las referencias y datos de los pilotos, brindándoles una perspectiva más rica y significativa al ver una carrera. 


## Prototipo de Baja y Alta Fidelidad 

### Diseño Baja Fidelidad
Al iniciar el desarrollo de nuestra página web, creamos dos prototipos de baja fidelidad para esbozar la disposición de las tarjetas y la ubicación general de los filtros de manera eficiente. Aunque se trate de un boceto inicial, también dimos un vistazo aproximado de cómo se adaptaría a dispositivos móviles. 


![diseño-baja-fidelidad](https://user-images.githubusercontent.com/12631491/218505816-c6d11758-9de4-428f-affb-2a56ea4d68c4.png)

### Diseño Alta Fidelidad:
En la fase subsecuente del proyecto, nos dedicamos a desarrollar el prototipo de alta fidelidad, dedicando especial atención a la optimización del menú desplegable para dispositivos móviles. Nos hemos enfocado en perfeccionar esta función para garantizar una experiencia de usuario fluida y eficiente.

En cuanto a la elección de colores, hemos seleccionado una paleta que evoca la asociación tradicional que las personas tienen con la Fórmula 1.

![imagen-pantone](https://user-images.githubusercontent.com/12631491/218505816-c6d11758-9de4-428f-affb-2a56ea4d68c4.png)

![diseño-alta-fidelidad](https://user-images.githubusercontent.com/12631491/218505816-c6d11758-9de4-428f-affb-2a56ea4d68c4.png)


## Generación de Prompting

### Chat GPT 

La data obtenida se almaceno en ./src/data/dataset.js

### Imagenes
Las fotografías de los pilotos fueron obtenidas de diversas fuentes en internet. Sin embargo, al presentar fondos heterogéneos, decidimos descargarlas y emplear la aplicación móvil Photoroom. Esta aplicación nos permitió eliminar los fondos de las imágenes, proporcionándoles una uniformidad al convertirlos en fondos blancos. 

Este proceso contribuyó a la cohesión estética y presentación homogénea de las fotografías en el contexto del proyecto.

![diseño-fondo-blanco](https://user-images.githubusercontent.com/12631491/218505816-c6d11758-9de4-428f-affb-2a56ea4d68c4.png)

Estas imagenes estan almacenadas en ./src/data/images

## Funcionalidades

* `filterData(data, filterBy, value)`: esta función recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `filterBy`, nos dice con respecto a cuál de los campos de
  la data se quiere filtrar.
  El tercer parámetro, `value`, indica el valor de campo que queremos filtrar.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada, esta función debe usar el método reduce.

## Desarrollo

### src/index.html
El diseño de nuestra página web se centra en hacer las cosas de manera organizada y fácil de entender, utilizamos etiquetas especiales, Para que todo sea claro y accesible, todas las cajas de texto, menús desplegables y botones tienen etiquetas descriptivas que explican lo que son.

### src/style.css
En la disposición general de la página, utilizamos flexbox para el elemento que contiene nuestros elementos clave, permitiéndonos ajustar dinámicamente su posición y distribución.

Además, para los controles de usuario, como las cajas de texto y los menús desplegables, hemos creado un diseño que se ajusta a diferentes tamaños de pantalla. Esto garantiza que la experiencia de usuario sea igualmente atractiva en dispositivos móviles gracias al uso de media queries.


### src/main.js
Este archivo se encarga de interactuar con el Document Object Model (DOM), que es básicamente la estructura de nuestra página web, responde a las acciones del usuario y se actualiza dinámicamente según sea necesario. Utiliza selectores del DOM, específicamente querySelector, para localizar y acceder a los elementos deseados.

En cuanto al manejo de eventos, el archivo emplea addEventListener para estar atento a diferentes acciones del usuario, como click o changes es el boton y selects utilizados. 

Una característica clave es la manipulación dinámica del DOM. Se actualizan áreas específicas de la página utilizando el atributo innerHTML. Además, se crean y agregan nuevos elementos al DOM mediante createElement y appendChild, mediante la manipulación de cadenas de plantillas (template strings).

### src/dataFunctions.js
Este conjunto de funciones es como el motor de la aplicación, trabajando detrás de escena para hacer que todo funcione sin complicaciones. 

La función filterData es nuestro filtro, seleccionando y mostrando solo la información relacionada con una escudería específica, simplificando así la visualización de los datos.

Por otro lado, la función sortData se encarga de organizar la información, ya sea en orden ascendente o descendente. Es como poner en fila a los pilotos según ciertos criterios, facilitando la búsqueda y comparación de la información.

Finalmente, la función computeStats realiza cálculos estadísticos para ofrecer un promedio sobre los podios obtenidos entre esos pilotos que se filtraron.

Estas funciones trabajan juntas para dar vida a la experiencia de usuario, facilitando la exploración de datos sobre los pilotos de la Fórmula 1 de manera sencilla y clara.

### src/view.js
Este bloque de código es como el arquitecto de la página, encargado de construir y organizar visualmente la información sobre los pilotos de la Fórmula 1. La función renderItems se encarga de recibir un conjunto de datos y transformarlos en elementos visuales que luego se muestran en la página.

Imagina esta función como un constructor de tarjetas informativas. Por cada piloto en la lista de datos, crea un elemento de lista y le asigna una clase y algunos atributos que ayudan a darle estilo y contexto. Luego, dentro de cada elemento de lista, construye una estructura visual utilizando imágenes y texto, representando datos clave como el nombre del piloto, lugar de nacimiento, último equipo y los campeonatos ganados.



## Desarrollo de Pruebas Unitarias

### test/dataFunctions.spec.js
Evaluamos las funciones esenciales que impulsan la funcionalidad de la aplicación. Estas pruebas son esenciales para confirmar que estas funciones centrales operen sin problemas, garantizando así la confiabilidad y precisión de la aplicación en su conjunto. La función filterData se encarga de seleccionar pilotos según la escudería,  sortData organiza la información de los pilotos según diferentes criterios, permitiendo clasificarlos en orden ascendente o descendente,  computeStats realiza cálculos estadísticos, especialmente el cálculo del promedio de podios de los pilotos. 

![Imagen-test-passed](https://user-images.githubusercontent.com/12631491/218505816-c6d11758-9de4-428f-affb-2a56ea4d68c4.png)

## Tecnologías Utilizadas
* JavaScript
* CSS
* HTML
* NodeJS
* Jest

## Desarrolladoras
Rubi Estrada y Xatzibe Alcantara

