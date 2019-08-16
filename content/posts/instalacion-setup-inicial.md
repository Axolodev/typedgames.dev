---
title: Instalación y setup inicial
date: 2019-08-02
---

En este post haremos la instalación del ambiente de trabajo que usaremos en el
resto del curso. Como lenguaje de desarrollo estaremos utilizando 
[TypeScript](https://www.typescriptlang.org), un lenguaje superset de JavaScript
 que permite el uso de características extras como tipeado de datos e uso de 
 **Interfaces de objetos**.

Para poder utilizar TypeScript es necesario tener instalado 
[Node js](https://nodejs.org), un intérprete que permite utilizar y ejecutar 
código de JavaScript en la computadora.

Finalmente, al ser una implementación especial de Javascript, necesitamos un 
compilador que nos permita ejecutar nuestro código de TypeScript en el 
navegador. Para esto, haremos uso de [Parcel](https://parceljs.org/), un 
*Bundler* que no requiere configuración y nos permitirá iniciar rápidamente 
nuestro trabajo. 

Teniendo todo esto listo, podemos empezar.

## Creación de espacio de trabajo

Empezaremos creando una carpeta llamada `videojuegos` y abriéndola en una 
consola de comandos, donde ejecutaremos el comando `npm init -y`. Esto hará que 
la carpeta se configure como un espacio en el que *Node* puede ejecutar e 
instalar paquetes.

Instalaremos ahora nuestro bundler en este espacio haciendo uso del comando 
`npm install --save-dev parcel-bundler`, que marcará el paquete como una 
*dev dependency*.

Ahora configuraremos los comandos para ejecutar nuestro proyecto. Para esto, 
abriremos el archivo `package.json` creado por npm y modificaremos el contenido 
de la sección `scripts`, borrando el contenido existente y pegando lo siguiente:

```json
"build": "parcel build index.html",
"develop": "parcel index.html -p 8000"
```

Nuestro `package.json` debe verse algo así:

```json
{
  "name": "vj",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "parcel build index.html",
    "develop": "parcel index.html -p 8000"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel-bundler": "..."
  }
}
```



### Configuración de punto de entrada

Para empezar a trabajar, necesitamos un punto de entrada para Parcel; si
revisaron el contenido de los scripts en el `package.json`, podrán notar que
este está definido como un archivo llamado `index.html`  que se encuentra en la
raíz del proyecto, por lo que procederemos a crear este archivo y poner el
siguiente contenido en él: 

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Desarrollo de juegos en Typescript</title>
</head>

<body>
  <h1></h1>
  <script src="./src/index.ts"></script>
</body>
</html>
```

Podrán notar que en el bloque de `script` que se encuentra al final del `body`
se utiliza un archivo llamado `index.ts` que se encuentra en la carpeta `src/`,
este será el archivo de entrada para todos nuestros proyectos. 

### Creación de archivo para iniciar a programar

Para empezar a trabajar necesitamos crear el archivo mencionado en la sección
anterior, por lo que crearemos una carpeta llamada `src`, en donde pondremos
nuestro `index.ts`. 

En este archivo, pondremos el siguiente contenido: 

```tsx
const header = document.querySelector('h1');

header.innerHTML = '¡Hola, mundo!';
```

Con esto, estamos obteniendo el encabezado marcado por `h1` de nuestro 
`index.html` y cambiando su contenido por el mensaje `¡Hola, mundo!`. Esto es
solo una manera de probar que nuestra configuración hasta el momento ha sido
correcta.

## Ejecución

Finalmente, y para validar todo lo que hicimos en los pasos anteriores,
ejecutaremos el comando `npm run develop` en la raíz del proyecto usando la
consola de comando que abrimos previamente. Si hicimos todo correctamente,
deberíamos ver un mensaje similar a este en la consola de comandos: 

```
Server running at http://localhost:8000
```

Podemos también comprobar esto abriendo
[http://localhost:8000/](http://localhost:8000/) en una ventana del navegador,
en el que podemos ver el mensaje "¡Hola, mundo!" que escribimos previamente en
nuestro archivo de TypeScript.

---

Y... ¡eso es todo! Tenemos nuestro entorno ya listo y configurado para empezar a
 trabajar. 

En la siguiente publicación empezaremos a trabajar con un `canvas` y veremos
cómo utilizarlo para crear una figura sencilla dentro del navegador.