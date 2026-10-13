import ejemplo from "./assets/htmlestado.png";
import js from "./assets/ejemplo-js.png";
import cambiarEstado from "./assets/jscambiarestado.png";
import componente1 from "./assets/componente1.png"
import componenteanidado from "./assets/componenteanidado.png"

const slides =[
    {
        tipo: "titulo",
        titulo:"Introduccion a React",
        content: ""
    },
    {
        tipo: "imagen",
        titulo:"Interfaz con JS",
        content: "contenido de la presentacion",
        imagen: ejemplo
    },

    {
        tipo:"imagen",
        titulo:"Codigo en js",
        content: "contenido de la presentacion",
        imagen: cambiarEstado
    },
    {
        tipo: "texto",
        titulo:"El problema de JS vanilla",
        content: "Con JavaScript puro, el desarrollador debe encargarse explicitamente de seleccionar los elementos, gestionar elementos, y modificar el DOM"
                    
    },
    {
        tipo:"imagen",
        titulo:"Que pasa cuando el codigo empieza a crecer",
        imagen: js
    },
    {
        tipo:"texto",
        titulo:"Paradigma imperativo / declarativo",
        content: "En un enfoque imperativo, describimos los pasos que deben ejecutarse. En uno declarativo, expresamos el resultado que queremos obtener a partir de los datos disponibles.",
        content2: "Cambiamos manualmente el contenido del elemento.	Actualizamos el estado y React se encarga de reflejarlo en la interfaz.Gestionamos explícitamente las operaciones sobre el DOM.	Delegamos en React la actualización de la interfaz."
    },
    {
        tipo: "texto",
        titulo: "Programación orientada a componentes",
        content: "Un componente es una pieza de UI que tiene su propia apariencia y comportamiento. Son funciones de JS que devuelven un marcado (Etquetas HTML)",
        content: "La programación orientada a componentes es un paradigma centrado en laconstrucción de software mediante unidades autónomas, encapsuladas y reutilizables que se comunican a través de interfaces bien definidas."
    },
    {
        tipo: "imagen",
        titulo: "Estructura de un componente",
        imagen: componente1
    },
    {
        tipo: "imagen",
        titulo: "Componente anidado",
        imagen: componenteanidado
    },
    {
        tipo:"texto",
        titulo: "El uso de export en los componentes",
        content: "La declaración export se utiliza al crear módulos de JavaScript para exportar funciones, objetos o tipos de dato primitivos del módulo para que puedan ser utilizados por otros programas con la sentencia import."
    }




];
export default slides;