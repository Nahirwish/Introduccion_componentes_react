import { useState } from "react"
import slides from "./slides";
import Slide from "./Slide";

function Presentacion(){
    // useState para cambiar de slide
    const [currentSlide, setCurrentSlide] = useState(0);

    function previousSlide(){ 
        if(currentSlide > 0){
            setCurrentSlide(currentSlide -1)
        }
    }

    function nextSlide(){
        if(currentSlide < slides.length - 1){
            setCurrentSlide(currentSlide + 1)
        }
    }

    const sl = slides[currentSlide];

    return(
        <div className="contenedor">
            <div className="presentacion">
                <Slide tipo={sl.tipo}
                    titulo={sl.titulo}
                    content ={sl.content}
                    content2 ={sl.content2}
                    imagen = {sl.imagen}
                    componentes = {sl.componentes}
            
                />
                <div className="navegacion">
                    <button onClick={previousSlide}>  ← </button>

                    <span>
                        {currentSlide +1}/ {slides.length }

                    </span>

                    <button onClick={nextSlide}>  → </button>
                </div>



            </div>
        </div>
    )
}

export default Presentacion;