# Dataverse Pilotos F1
Nuestro proyecto es una página web diseñada para desplegar tarjetas informativas sobre los talentosos pilotos de la Fórmula 1. En la imagen adjunta, observarás cómo se construyo una interfaz amigable y fácil de entender. Nuestro proposito fue crear una plataforma web que no solo exhiba la información detallada sobre los pilotos, sino que también permita a los usuarios filtrarla, ordenarla y obtener el promedio de podios ganados por los pilotos. 

![pagina-principal](https://github.com/XatAlcantara/DEV012-dataverse/blob/main/Pagina-inicio.png?raw=true)


## Indice

* [Historia de Usuario](#Historia-de-usuario)
* [Prototipos](#Prototipos)
* [Generacion de Prompting](#Generacion-de-Prompting)
* [Funcionalidades](#Funcionalidades)
* [Desarrollo](#Desarrollo)
* [Pruebas Unitarias](#Pruebas-Unitarias)
* [Tecnologias Utilizadas](#Tecnologias-Utilizadas)
* [Desarrolladoras](#Desarrolladoras)



## Historias de Usuario
Los principales usuarios del producto serian aquellas personas con un interés genuino en conocer más detalles sobre los pilotos de la F1. 

En cuanto a la interfaz, estoss usuarios buscarian información clave como su fotografía, nombre, nacionalidad, campeonatos y última escudería de cada piloto. La relevancia de estos datos radica en proporcionar una visión rápida de la trayectoria de cada corredor.

La pagina se podria utilizar en diversas situaciones, desde antes hasta después de un gran premio. Los usuarios pueden explorar la plataforma para entender las referencias y datos de los pilotos, brindándoles una perspectiva más rica y significativa al ver una carrera. 


## Prototipo de Baja y Alta Fidelidad 

### Diseño Baja Fidelidad
Al iniciar el desarrollo de nuestra página web, creamos dos prototipos de baja fidelidad para esbozar la disposición de las tarjetas y la ubicación general de los filtros de manera eficiente. Aunque se trate de un boceto inicial, también dimos un vistazo aproximado de cómo se adaptaría a dispositivos móviles. 


![diseño-baja-fidelidad](https://github.com/XatAlcantara/DEV012-dataverse/blob/main/Prototipo-baja-fidelidad.png?raw=true)

### Diseño Alta Fidelidad:
En la fase subsecuente del proyecto, nos dedicamos a desarrollar el prototipo de alta fidelidad, dedicando especial atención a la optimización del menú desplegable para dispositivos móviles. Nos hemos enfocado en perfeccionar esta función para garantizar una experiencia de usuario fluida y eficiente.

En cuanto a la elección de colores nos apoyamos en la pagina [ColorHunt](https://colorhunt.co/), hemos seleccionado una paleta que evoca la asociación tradicional que las personas tienen con la Fórmula 1.

![imagen-pantone](https://github.com/XatAlcantara/DEV012-dataverse/blob/main/pantone.png?raw=true)

![diseño-alta-fidelidad](https://github.com/XatAlcantara/DEV012-dataverse/blob/main/Prototipo-alta.png?raw=true)


## Generación de Prompting

### Chat GPT 
Con el propósito de agilizar la obtención de los datos, se empleó ChatGPT. Esta herramienta nos permitió evitar el proceso manual de recopilación biográfica de cada piloto, obteniendo rápidamente datos clave, así como breves descripciones de sus vidas. Logramos obtener información que abarca desde aspectos generales hasta detalles más precisos.

Estas fueron las instrucciones que le dimos a la inteligencia artificial para que nos ayudara a generar la data que necesitabamos y el orden de esta. 
![Promptings](https://github.com/XatAlcantara/DEV012-dataverse/blob/main/Promptings.png?raw=true)

Y esta fue la estructura y un ejemplo de los datos que nos proporciono:
![Data-estructurada](https://github.com/XatAlcantara/DEV012-dataverse/blob/main/imagen-promptin3.png?raw=true)
La data obtenida se almaceno en ./src/data/dataset.js

### Imagenes
Las fotografías de los pilotos fueron obtenidas de diversas fuentes en internet. Sin embargo, al presentar fondos heterogéneos, decidimos descargarlas y emplear la aplicación móvil Photoroom. Esta aplicación nos permitió eliminar los fondos de las imágenes, proporcionándoles una uniformidad al convertirlos en fondos blancos. 

Este proceso contribuyó a la cohesión estética y presentación homogénea de las fotografías en el contexto del proyecto.

![diseño-fondo-blanco](https://github.com/XatAlcantara/DEV012-dataverse/blob/main/Fotografia-fondo-blanco.png?raw=true)

Estas imagenes estan almacenadas en ./src/data/images

## Funcionalidades
La aplicación web proporciona herramientas esenciales para manipular y analizar datos relacionados. 

* La función filterData: Permite a los usuarios filtrar la información según una escudería específica, ayudándoles a centrarse en datos relevantes para un equipo en particular. 
* La función sortData: Facilita la visualización de datos al permitir la ordenación ascendente o descendente de la información en función de un campo seleccionado, mejorando la legibilidad y comprensión de la información presentada.
* La función estadística con computeStats, calcula el promedio de podios para los equipos en los datos proporcionados. Esta funcionalidad proporciona a los usuarios una visión general de los logros de cada escudería en términos de podios, agregando un elemento analítico valioso a la experiencia de usuario. 
![pagina-principal](https://github.com/XatAlcantara/DEV012-dataverse/raw/main/Gif-pagina-principal.webp)

## Desarrollo

### src/index.html
El diseño de nuestra página web se centra en hacer las cosas de manera organizada y fácil de entender, utilizamos etiquetas especiales, Para que todo sea claro y accesible, todas las cajas de texto, menús desplegables y botones tienen etiquetas descriptivas que explican lo que son.

### src/style.css
En la disposición general de la página, utilizamos flexbox para el elemento que contiene nuestros elementos clave, permitiéndonos ajustar dinámicamente su posición y distribución.

Además, para los controles de usuario, como las cajas de texto y los menús desplegables, hemos creado un diseño que se ajusta a diferentes tamaños de pantalla. Esto garantiza que la experiencia de usuario sea igualmente atractiva en dispositivos móviles gracias al uso de media queries.

Obteniendo asi un diseño responsive para nuestra pagina, creando un menu desplegable con ayuda de iconos. 

![Diseño-movile](https://github.com/XatAlcantara/DEV012-dataverse/blob/main/Diseño-mobile.png?raw=true)


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

![Imagen-test-passed](https://github.com/XatAlcantara/DEV012-dataverse/blob/main/passed-pruebas.png?raw=true)

## Tecnologías Utilizadas
* JavaScript
* CSS
* HTML
* NodeJS
* Jest

## Desarrolladoras
Rubi Estrada y Xatzibe Alcantara

