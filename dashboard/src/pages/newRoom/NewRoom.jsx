import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./newRoom.scss"
import { useState } from "react";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { axiosInstance } from "../../config";
import { useNavigate } from "react-router-dom";

const NewRoom = () => {

  const [info, setInfo] = useState({})
  const [hotelId, setHotelId] = useState(undefined)
  const [rooms, setRooms] = useState([])
  const navigate = useNavigate()
  const {data,loading,error} = useFetch("/hotels")
  const handleChange = (e) =>{
    setInfo((prev) => ({...prev, [e.target.id]: e.target.value}))
  }

  const handleClick = async (e) =>{
    e.preventDefault()
    const roomNumbers = rooms.split(",").map((room)=>({number: room}))
                                                                                                                                                                                                                                                                                                      
      try{
        await axiosInstance.post(`/rooms/${hotelId}`,{...info,roomNumbers})
        navigate('/rooms') 
      }catch(err){console.log(err)}
  }
  return (
       <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add new Room</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form >
              
              {roomInputs.map((input) =>(

                <div className="formInput" key={input.id}>
                <label >{input.label}</label>
                <input id={input.id} type={input.type} onChange={handleChange} placeholder={input.placeholder} />
              </div>
                ))}<div className="formInput" >
                <label >Rooms</label>
                <textarea onChange={e=>setRooms(e.target.value)} placeholder="Give a comma between room numbers "></textarea>
              </div>
                <div className="formInput" >
                <label >Choose a Hotel</label>
                <select id="hotelId" 
                onChange={(e)=>setHotelId(e.target.value)}>
                  {loading ? "loading" : data && data.map((hotel)=>(
                    <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                  ))}
                </select>
                
              </div>
            
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default NewRoom
