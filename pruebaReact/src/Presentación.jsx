import { useState } from "react"
import slides from "./slides";
import Slide from "./Slide";

function Presentacion(){
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
        <div className="presentacion">
            <Slide tipo={sl.tipo}
                    titulo={sl.titulo}
                    content ={sl.content}
                    contet2 ={sl.content2}
                    imagen = {sl.imagen}
            
            />
            <div className="navegacion">
                <button onClick={previousSlide}>  ← </button>

                <span>
                    {currentSlide +1}/ {slides.length }

                </span>

                <button onClick={nextSlide}>  → </button>
            </div>



        </div>
    )
}

export default Presentacion;