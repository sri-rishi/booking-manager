const db = require("../config/db");

exports.createBooking = (req, res) => {
    const {name, email, date} = req.body;

    if(!name || !email|| !date) {
        return res.status(400).json(
            {message: "All fields are required"}
        )
    }

    // Append current time when booking is saved (user only selects date)
    const now = new Date();
    const timeStr = now.toTimeString().slice(0, 8); // "HH:mm:ss"
    const dateForDb = `${date} ${timeStr}`;

    const sql = "INSERT INTO bookings  (name, email, date) VALUES (?, ?, ?)";
    db.query(sql, [name, email, dateForDb], (err, result) => {
        if(err) return res.status(500).json(err);
        res.status(201).json({message: "Booking created successfully", bookingId: result.insertId});
    })
}

exports.getAllBookings = (req, res) => {
    const sql = "SELECT * FROM bookings ORDER BY id DESC";

    db.query(sql, (err, results) => {
        if(err) return res.status(500).json(err);
        res.json(results);
    });
};