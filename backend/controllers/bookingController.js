const db = require("../config/db");

exports.createBooking = (req, res) => {
    const {name, email, date} = req.body;

    if(!name || !email|| !date) {
        return res.status(400).json(
            {message: "All fields are required"}
        )
    }

    const sql = "INSERT INTO bookings  (name, email, date) VALUES (?, ?, ?)";
    db.query(sql, [name, email, date]), (err, result) => {
        if(err) return res.status(500).json(err);
        res.status(201).json({message: "Booking created successfully", bookingId: result.insertId});
    }
}

exports.getAllBookings = (req, res) => {
    const sql = "SELECT * FROM booking ORDER BY id DESC";

    db.query(sql, (err, results) => {
        if(err) return res.status(500).json(err);
        res.json(results);
    });
};