import {useState ,React}  from "react";
import "./header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons"
import {DateRange} from "react-date-range"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { format } from "date-fns";
import {useNavigate} from "react-router-dom"
import { useContext} from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({type}) => {

    const [openDate, setOpenDate] = useState(false)
    const [destination, setDestination] = useState("")
    
    const [dates, setDates] = useState([
        {startDate: new Date(),
        endDate: new Date(),
        key: 'selection'}
    ])

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1
    })

    const handleOption = (name, operation) =>{
        setOptions((prev)=>{
            return { 
                ...prev, [name]:operation === "i"? options[name]+1 :options[name]-1  
            }})}

    const {dispatch} = useContext(SearchContext)
    
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)

    const handleSearch=(e)=>{
    dispatch({type:"NEW_SEARCH", payload:{destination, dates, options}})
navigate("/hotels", {state: {destination, dates, options}})
    }

    return(<div className="header">
        <div className={type === "list"? "headerContainer listMode": "headerContainer"}>
        <div className="headerList">
            
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed}/>
    <span>Stays</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane}/>
    <span>Fights</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar}/>
    <span>Car Rental</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed}/>
    <span>Attractions</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi}/>
    <span>Airport Taxis</span>
            </div>
            </div>

            { type !== "list" && <><h1 className="headerTitle">Browse Hotels Around the World</h1>    
            <p className="headerDesc">Sign in to book hotels</p>
        {!user &&<button className="headerBtn" onClick={()=>{window.location = "/register"}}>Sign in/ Register</button>}
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
            <input type="text" placeholder="Where are you going?" className="headerSearchInput" onChange={e=>setDestination(e.target.value)}/>
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}` }</span>
            {openDate &&<DateRange 
            editableDateInputs={true} 
            onChange={(item)=> setDates([item.selection])} 
            moveRangeOnFirstSelection={false} 
            ranges={dates}
            minDate={new Date()}
            className="date"
            />}
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
            <span onClick={()=>{setOpenOptions(!openOptions)}} className="headerSearchText">{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
            { openOptions && <div className="options">
                <div className="optionItem">
                    
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                    <button disabled={options.adult<=1} className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                    </div>
                    </div>

                    <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                    <button disabled={options.children<=0} className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                    </div>
                    </div>
                    <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                    <button disabled={options.room<=1} className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                    </div>
                    </div>
                    </div>}
            </div>

            <div className="headerSearchItem">
               <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>
        </div></>}
        </div>
        </div>) 
}

export default Header