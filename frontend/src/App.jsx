import { useEffect, useState } from "react";
import axios from "axios";
import BookingForm from "./pages/BookingForm";
import BookingList from "./pages/BookingList";

export default function App() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await axios.get("http://localhost:5000/api/bookings");
    setBookings(res.data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <BookingForm refresh={fetchBookings} />
        <BookingList bookings={bookings} />
      </div>
    </div>
  );
}
