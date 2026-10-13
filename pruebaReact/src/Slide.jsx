import reactImage from "./assets/react.svg";

function Slide(props){
    if(props.tipo === "titulo"){

        return(
            <section className="slide">
                <h1>{props.titulo}</h1>
                
            </section>
        );
    }    
    if(props.tipo === "texto"){
        return(
            <section className="slide">
                <h1>{props.titulo}</h1>
                <p>{props.content}</p>
            </section>
        );
    }

    if(props.tipo === "imagen"){
        return(
            <section className="slide">
                <h1>{props.titulo}</h1>
                <img src={props.imagen} alt={props.titulo} />
                <p>{props.content}</p>
            </section>
        );
    }

    if(props.tipo === "codigo"){
        return(
            <section className="slide">
                <h1>{props.titulo}</h1>
                <code>{props.codigo}</code>
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