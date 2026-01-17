import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import HotelsSearch from "../../components/hotelsSearch/HotelsSearch"
import "./hotels.css"
import HotelsResult from "../../components/hotelsResult/HotelsResult"

export default function Hotels() {
    return (
        <div className="hotels">
            {/* navbar */}
            <Navbar />
            {/* header */}
            <Header type={"hotels"}/>
            <div className="hotelsContainer">
                <div className="hotelsWrapper">
                    {/* hotelsSearch */}
                    <HotelsSearch />
                    {/* hotelsResult */}
                    <HotelsResult />
                </div>
            </div>
        </div>
    )
}