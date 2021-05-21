import axios from 'axios'
import React , {useState, useEffect}from 'react'
import Booking from "./Booking"

function MinaBookningar() {

const [bookings, setBookings] = useState([])
const [userId, setUserId] = useState(localStorage.getItem("userId"))


useEffect(()=>{
  


   //"http://localhost:1337/user-bookings?users_permissions_user.id=14"

   console.log(userId)

   const fetchData = async ()=>{
        const res = await axios.get(`http://localhost:1337/user-bookings?users_permissions_user.id=${userId}`)

        setBookings(res.data)
   }
   
   fetchData()
}, [])




    return (
        <div>
 <h1>Mina Bookningar</h1>
{bookings.map( (booking)=>{
    
    return(
    <Booking key={booking.id} name={booking.name} time={booking.timeToAppointment} />
    )
})
}

           


        </div>
    )
}

export default MinaBookningar
