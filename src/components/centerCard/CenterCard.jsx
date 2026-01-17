import { Link } from "react-router-dom"
import "./centerCard.css"

export default function CenterCard({children}) {
    return (
        <div className="centerCard">
            <div className="card">
                <div className="cardLogo"><Link to="/">booking</Link></div>
                <form className="cardContent">
                    {children}
                </form>
            </div>
        </div>
    )
}