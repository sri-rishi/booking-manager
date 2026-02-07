import { useState } from "react";
import axios from "axios";

export default function BookingForm({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/bookings", form);
    setForm({ name: "", email: "", date: "" });
    refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-4"
    >
      <h2 className="text-xl font-semibold mb-3">Create Booking</h2>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="date"
        className="border p-2 w-full mb-2"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Booking
      </button>
    </form>
  );
}
