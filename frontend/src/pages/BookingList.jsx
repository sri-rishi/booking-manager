function formatDateTime(booking) {
  const dateStr = booking.date;       // User's selected date
  const createdStr = booking.created_at; // Time when booking was saved (from MySQL)

  if (!dateStr) return "";

  // Use user's date + save time from created_at for correct time display
  const datePart = new Date(dateStr + "T12:00:00").toLocaleDateString(undefined, {
    dateStyle: "medium",
  });
  const timePart = createdStr
    ? new Date(createdStr).toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "2-digit",
      })
    : "";

  return timePart ? `${datePart}, ${timePart}` : datePart;
}

export default function BookingList({ bookings }) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-3">Booking List</h2>
  
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td className="border p-2">{b.name}</td>
                <td className="border p-2">{b.email}</td>
                <td className="border p-2">{formatDateTime(b)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  