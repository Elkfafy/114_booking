import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./headerList.css"
import { faBed, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"

export default function HeaderList() {
    return (
        <div className="headerList">
            <div className="headerListItem">
                {/* icon */}
                <FontAwesomeIcon icon={faBed} />
                {/* text */}
                <span>Stays</span>
            </div>
            <div className="headerListItem active">
                {/* icon */}
                <FontAwesomeIcon icon={faPlane} />
                {/* text */}
                <span>Flights</span>
            </div>
            <div className="headerListItem">
                {/* icon */}
                <FontAwesomeIcon icon={faCar} />
                {/* text */}
                <span>Car rentals</span>
            </div>
            <div className="headerListItem">
                {/* icon */}
                <FontAwesomeIcon icon={faBed} />
                {/* text */}
                <span>Attractions</span>
            </div>
            <div className="headerListItem">
                {/* icon */}
                <FontAwesomeIcon icon={faTaxi} />
                {/* text */}
                <span>Airport taxis</span>
            </div>
        </div>
    )
}