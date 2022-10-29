import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required : true,
  },
  phone:{
    type: String,
    required : true,
  },
  hotelId:{
    type: String,
  },
  selectedRooms: 
  {type: []},

  roomsNumber: {
    type: []
  },
  
  selectedDates:{
    type: [],
  }
})

export default mongoose.model("Reservation", ReservationSchema)