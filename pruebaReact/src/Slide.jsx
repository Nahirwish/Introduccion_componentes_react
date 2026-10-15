
import Contador from "./Contador";
import Lista from "./Lista";
import Tabla from "./Tabla";
import ListaArchivos from "./ListaArchivos"

function mostrarComponente(name){
    switch(name){
        case "contador":
            return <Contador />;
        case "lista":
            return <Lista />;
        case "tabla":
            return <Tabla/>;
        case "lista_archivos":
            return <ListaArchivos/>;
        default:
            return null;
    }
}


function Slide(props){
    if(props.tipo === "titulo"){

        return(
            <section className="slide">
                <h1>{props.titulo}</h1>
                <p>{props.content}</p>
            </section>
        );
    }    
    if(props.tipo === "texto"){
        return(
            <section className="slide">
                <h1>{props.titulo}</h1>
                <p>{props.content}</p>
                <p>{props.content2}</p>
                
                {props.componentes?.map((name, index) => (
                    <div key={index}>
                        {mostrarComponente(name)}
                    </div>
                ))}   
            </section>

    );
    }

    if(props.tipo === "imagen"){
        return(
            <section className="slide">
                <h1>{props.titulo}</h1>
                <img src={props.imagen} alt={props.titulo} />
                <p>{props.content}</p>
                
                {props.componentes?.map((name, index) => (
                <div key={index}>
                    {mostrarComponente(name)}
                </div>
            ))}
            </section>
        );
    }


    return(
        <section className="slide">
            <h3>Tipo de diapositiva no definida</h3>
        </section>
    );


}

export default Slide;