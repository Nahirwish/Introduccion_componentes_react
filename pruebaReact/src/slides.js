import ejemplo from "./assets/htmlestado.png";
import js from "./assets/ejemplo-js.png";
import cambiarEstado from "./assets/jscambiarestado.png";
import componente1 from "./assets/componente1.png"
import componenteanidado from "./assets/componenteanidado.png"
import contador from "./assets/contador.png"

const slides =[
    {
        tipo: "titulo",
        titulo:"Introduccion a React",
        content: "React es una biblioteca de JavaScript utilizada para construir interfaces de usuario. Permite organizar la interfaz en componentes y actualizar lo que se muestra cuando cambian los datos."
    },
    {
        tipo: "imagen",
        titulo:"Interfaz con JS",
        content: "La interfaz esta formada por elementos HTML. JS Permite acceder a los elementos y cambiar su contenido. Cuando cambia un dato hace falta actualizar los elementos relacionados",
        imagen: ejemplo
    },

    {
        tipo:"imagen",
        titulo:"Codigo en js",
        imagen: cambiarEstado,
        content: "Se seleccionan los elementos de la pagina y se modifica manualmente su contenido",
    },
    {
        tipo: "texto",
        titulo:"El problema de JS vanilla",
        content: "Con JavaScript puro, el desarrollador debe encargarse explicitamente de gestionar la relación entre los datos y los elementos de la interfaz. ",
        content2: "A medida que una aplicación crece, mantenerlos sincronizados puede requerir mas operaciones y aumentar la complejidad del código."
                    
    },
    {
        tipo:"imagen",
        titulo:"Que pasa cuando el codigo empieza a crecer",
        imagen: js,
        content: "Cuando una interfaz tiene muchos elementos que dependen de los mismos datos, una modificación puede requerir actualizar varias partes de la pagina"
    },
    {
        tipo:"texto",
        titulo:"Paradigma imperativo / declarativo",
        content: "En un enfoque imperativo, describimos los pasos que deben ejecutarse. En uno declarativo, expresamos el resultado que queremos obtener a partir de los datos disponibles.",
        componentes:["tabla"]
    },
    {
        tipo: "texto",
        titulo: "Programación orientada a componentes",
        content: "Un componente es una pieza de UI que tiene su propia apariencia y comportamiento. Son funciones de JS que devuelven un marcado (Etquetas HTML)",
        componentes: ["lista"]
    },
    {
        tipo: "imagen",
        titulo: "Estructura de un componente",
        imagen: componente1
    },
    {
        tipo: "imagen",
        titulo: "Componente anidado",
        imagen: componenteanidado,
        content: "Los componentes pueden combinarse para construir interfaces mas complejas. Un componente puede usar otros componentes formando una estructura jerárquica"
    },
    {
        tipo:"texto",
        titulo:"¿Como se conectan los componentes?",
        content: "Un componente puede usar otros componentes pra formar una estructura jerárquica"
    },
    {
        tipo:"texto",
        titulo:"¿Como organizan los componentes en los archivos?",
        content: "En un proyecto de React los componentes se organizan en distintos archivos",
        componentes: ["lista_archivos"]
    },
    {
        tipo:"imagen",
        titulo: "El estado en React",
        content:"El estado permite guardar información que puede cambiar durante la ejecución de un componente. Cuando el estado se actualiza, REact vuelve a ejecutar el componente para determinar como debe verse la interfaz.",
        imagen: contador,
        componentes : ["contador"]

    },

    {

        tipo:"texto",
        titulo: "Primera aplicación con Vite",
        content: "Vite es una herramienta de compilación cuyo objetivo es proporcionar una experiencia de desarrollo más rápida y sencilla para los proyectos web modernos.",
        content2: "npm create vite@latest my-app -- --template react"
    }




];
export default slides;