import FList from "./fList/fList"
import "./footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="fLists">
                <FList list={["Countries","Regions", "Cities", "Districts", "Airports", "Hotels"]}/>
                <FList list={["Homes", "Apartments", "Resorts", "Villas", "Hostels", "Guest houses"]}/>
                <FList list={["Unique places to stay", "Reviews", "Unpacked: Travel articles", "Travel communities", "Seasonal and holiday deals"]}/>
                <FList list={["Car rental", "Flight Finder", "Restaurant reservations", "Travel Agents"]}/>
                <FList list={["Curtomer Service", "Partner Help", "Careers", "Sustainability", "Press center", "Safety Resource Center", "Investor relations", "Terms & conditions"]}/>
            </div>
            <div className="fText">
                Copyright © 2022 Lamabooking.
            </div>
        </div>
    )
}