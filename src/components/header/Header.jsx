import { Link } from "react-router-dom"
import "./header.css"
import HeaderList from "./headerList/HeaderList"
import HeaderSearch from "./headerSearch/HeaderSearch"

export default function Header({type}) {
    return (
        <div className="header">
            <div className={type == "hotels"? "headerContainer" : "headerContainer headerHome"}>
                {/* header list */}
                <HeaderList />
                {type == "hotels" ||
                    <>
                        {/* h1 */}
                        <h1>A lifetime of discounts? It's Genius.</h1>
                        {/* p */}
                        <p className="headerDescription">Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account</p>
                        {/* button */}
                        <button className="headerButton"><Link to="/login">Sign in / Register</Link></button>
                        {/* header search */}
                        <HeaderSearch />
                    </>
                }
            </div>
        </div>
    )
}