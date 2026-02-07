# Booking App

A full-stack booking management application where users can create and view bookings with name, email, and date.

## Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React 19, Vite 7, Tailwind CSS 4, Axios |
| **Backend** | Node.js, Express 5 |
| **Database** | MySQL (via mysql2 driver) |
| **Other** | dotenv (environment variables), CORS |

## Setup Steps

### Prerequisites

- Node.js (v18 or higher)
- MySQL Server
- npm or yarn

### 1. Clone the repository

```bash
git clone <repository-url>
cd booking-app
```

### 2. Database setup

Create the database and table in MySQL:

```bash
mysql -u root -p < backend/database/schema.sql
```

If you already have the table with a `DATE` column and need to store time, run the migration:

```bash
mysql -u root -p booking_db < backend/database/migrate-date-to-datetime.sql
```

### 3. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```
DB_PASSWORD=your_mysql_password
PORT=5000
```

Start the backend server:

```bash
node server.js
```

The API will run at `http://localhost:5000`.

### 4. Frontend setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The app will run at `http://localhost:5173`.

### 5. Run the app

With both backend and frontend running, open `http://localhost:5173` in your browser to use the booking app.

---

## What I Learned While Building This

- **Full-stack flow**: Connecting a React frontend to an Express API and MySQL database, from form submission to persistent storage.
- **REST API design**: Creating simple CRUD endpoints (GET, POST) and structuring routes and controllers.
- **Database integration**: Using connection pools with mysql2, working with DATE vs DATETIME types, and handling SQL schemas and migrations.
- **Environment variables**: Using dotenv to keep secrets (e.g. DB password) out of code and version control.
- **Date and time handling**: Dealing with MySQL date formats, auto-capturing save time with `created_at`, and formatting dates for display with `Intl.DateTimeFormat` and `toLocaleString`.
- **CORS**: Enabling cross-origin requests so the frontend and backend can communicate when running on different ports.
- **React state management**: Managing form state, calling APIs with `useEffect` and `axios`, and refreshing the list after creating a booking.
- **UI and UX**: Using Tailwind CSS for styling and ensuring form controls (e.g. buttons) have sufficient contrast and clear feedback.
