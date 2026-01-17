import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./slider.css"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons"

export default function Slider({img, setClose, handleLeft, handleRight}) {
    return (
        <div className="slider">
            <FontAwesomeIcon 
                icon={faCircleXmark}
                className="sliderClose"
                onClick={setClose}
            />
            <FontAwesomeIcon 
                icon={faCircleArrowLeft}
                className="sliderArrow"
                onClick={handleLeft}
            />
            <div className="sliderWrapper">
                <img src={img}
                className="sliderImg"
                />
            </div>
            <FontAwesomeIcon 
                icon={faCircleArrowRight}
                className="sliderArrow"
                onClick={handleRight}
            />
        </div>
    )
}