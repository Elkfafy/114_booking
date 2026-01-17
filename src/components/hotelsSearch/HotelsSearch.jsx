import { useState } from "react";
import "./hotelsSearch.css"
import HsOptionsItem from "./hsOptionsItem/HsOptionsItem"
import { DateRange } from "react-date-range";
import { format } from "date-fns";

export default function HotelsSearch() {
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    const [openCalender, setOpenCalender] = useState(false);
    const handleDateSelect = (ranges) => {
        setSelectionRange(ranges.selection)
    }
    return (
        <div className="hotelsSearch">
            <h1 className="hsTitle">Search</h1>
            <div className="hsItem">
                <label>Destination</label>
                <input type="text" />
            </div>
            <div className="hsItem">
                <label>Check-in Date</label>
                <span  onClick={() => setOpenCalender(!openCalender)}>{format(selectionRange.startDate, "dd/MM/yyyy")} to {format(selectionRange.endDate, "dd/MM/yyyy")}</span>
                {openCalender && <DateRange 
                                    ranges={[selectionRange]}
                                    onChange={handleDateSelect}
                                /> }
            </div>
            <div className="hsItem">
                <label>Options</label>
                <div className="hsOptions">
                    <HsOptionsItem text={"Min price per night"}/>
                    <HsOptionsItem text={"Max price per night"}/>
                    <HsOptionsItem text={"Adult"} placeholder={"1"}/>
                    <HsOptionsItem text={"Children"} placeholder={"0"}/>
                    <HsOptionsItem text={"Rooms"} placeholder={"1"}/>
                </div>
            </div>
            <button>Search</button>
        </div>
    )
}