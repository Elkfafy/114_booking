import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./headerSearch.css"
import { faBed, faCalendar, faPerson } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from "react-date-range"
import { useState } from "react"
import { format } from "date-fns"
import { Link } from "react-router-dom"

export default function HeaderSearch() {
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    const [options, setOptions] = useState({
        adult: 2,
        children: 0,
        room: 1
    })
    const [openCalender, setOpenCalender] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const handleDateSelect = (ranges) => {
        setSelectionRange(ranges.selection)
    }

    const handleOption = (option, isIncrement) => {
        options[option] = options[option] + (isIncrement? 1 : -1);
        setOptions({...options})
    }
    return (
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerSearchIcon" />
                <input 
                    type="text"
                    placeholder="Where are you going?"
                    className="headerSearchInput"
                />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendar} className="headerSearchIcon" />
                <span className="headerSearchText" onClick={() => setOpenCalender(!openCalender)}>{format(selectionRange.startDate, "dd/MM/yyyy")} to {format(selectionRange.endDate, "dd/MM/yyyy")}</span>
                {openCalender && <DateRange 
                    ranges={[selectionRange]}
                    onChange={handleDateSelect}
                    className="headerSearchDate"
                /> }
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerSearchIcon" />
                <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>{options.adult} adult · {options.children} children · {options.room} room</span>
                {openOptions &&
                <div className="headerSearchOptions">
                    <div className="headerSearchOptionItem">
                        <div className="headerSearchOptionText">
                            Adult
                        </div>
                        <div className="headerSearchOptionCounter">
                            <button className="headerSearchOptionCounterButton" onClick={() => handleOption("adult", false)}>-</button>
                            <span>{options.adult}</span>
                            <button className="headerSearchOptionCounterButton" onClick={() => handleOption("adult", true)}>+</button>
                        </div>
                    </div>
                    <div className="headerSearchOptionItem">
                        <div className="headerSearchOptionText">
                            Children
                        </div>
                        <div className="headerSearchOptionCounter">
                            <button className="headerSearchOptionCounterButton" onClick={() => handleOption("children", false)}>-</button>
                            <span>{options.children}</span>
                            <button className="headerSearchOptionCounterButton" onClick={() => handleOption("children", true)}>+</button>
                        </div>
                    </div>
                    <div className="headerSearchOptionItem">
                        <div className="headerSearchOptionText">
                            Room
                        </div>
                        <div className="headerSearchOptionCounter">
                            <button className="headerSearchOptionCounterButton" onClick={() => handleOption("room", false)}>-</button>
                            <span>{options.room}</span>
                            <button className="headerSearchOptionCounterButton" onClick={() => handleOption("room", true)}>+</button>
                        </div>
                    </div>
                </div>
            }
            </div>
            <div className="headerSearchItem">
                <button className="headerSearchButton">
                    <Link to="/hotels">Search</Link>
                </button>
                
            </div>
        </div>
    )
}