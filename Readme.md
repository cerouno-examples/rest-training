# REST

Un estilo para definir la comunicación en una aplicación web. Este estilo asume que trabajamos con **Recursos** y que normalmente lo que queremos hacer es **crearlos**, **leerlos**, **actualizarlos** o **eliminarlos**.

## Requerimientos

* Node
* Sequelize 3
* [Postman](https://www.getpostman.com/apps)

## Para ver el contenido

`npm install`

Para correr un archivo read.js de cualquier sección

`npm run read [# de la seccion]`

Por ejemplo:

`npm run read 1`

Correrá el archivo en `/content/1-express/read.js`

## Conceptos Importantes

* Recurso
  * Canción
  * Usuario
  * Post
  * Comentario

* CRUD
  * Create, Read, Update && Delete

## URLs

Rest utiliza inteligentemente los métodos HTTP para lograr tener URLs expresivos que se entiendan de manera sencilla al leerlos.

![Rest URLs](/rest.png?raw=true)

## Formatos

Hay diferentes maneras de presentar información usando Rest, la manera más común es a través de JSON.

## Probar el API

Los requests GET los podemos probar directamente desde el navegador, pero los requests: POST, PUT y DELETE los probaremos usando la herramienta de [Postman](https://www.getpostman.com/apps):

![Postman](/postman.png?raw=true)
