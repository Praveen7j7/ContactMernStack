# 📇 Contact Management App (MERN Stack)

A full-stack **Contact Management Application** built using the **MERN stack (MongoDB, Express.js, React, Node.js)**.
This app allows users to **add, view, paginate, and delete contacts** with validation and user feedback (Snackbar notifications).

---

## 🚀 Features

* Add new contacts (with validation for unique email & phone number).
* View paginated contact list (4 contacts per page).
* Delete contacts with one click.
* Snackbar notifications for success/error messages.
* MongoDB Atlas for database.
* Deployed on **Render (Backend)** & **Vercel (Frontend)**.

---

## 🛠️ Tech Stack

* **Frontend**: React, Vite, TailwindCSS, Axios
* **Backend**: Node.js, Express.js, MongoDB, Zod (for validation)
* **Database**: MongoDB Atlas
* **Deployment**:
  * Frontend → Vercel
  * Backend → Render

---

## 📂 Project Structure

```
ContactUploadedProject/
│── backend/                  # Express backend
│   ├── config/               # MongoDB connection
│   ├── controller/           # Controller logic
│   ├── model/                # Mongoose models
│   ├── routes/               # API routes
│   ├── index.js              # Main backend entry
│   ├── package.json
│   └── .env                  # Environment variables
│
│── frontend/                 # React frontend (Vite + Tailwind)
│   ├── src/
│   │   ├── App.jsx           # Main React component
│   │   ├── utils/Snackbar.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── .env
│
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Praveen7j7/ContactMernStack

cd ContactMernStack
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside **backend/**:

```env
MONGO_URI=your_mongodb_connection_string
PORT= https://contactmernstackbackend.onrender.com ||8000
```

Run the backend server:

```bash
npm start
```

> Runs at: `https://contactmernstackbackend.onrender.com`||`http://localhost:8000`

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
```

Create a `.env` file inside **frontend/**:

```env
VITE_API_BASE_URL=http://localhost:8000
```

Run the frontend:

```bash
npm run dev
```

> Runs at: `https://contact-mern-stack.vercel.app` || `http://localhost:5173`

---

## 🌐 API Endpoints

### Base URLs

* **Local** → `http://localhost:8000`
* **Production** → `https://contactmernstackbackend.onrender.com`

| Method | Endpoint          | Description                    |
| ------ | ----------------- | ------------------------------ |
| GET    | `/api/users`      | Fetch all contacts (paginated) |
| POST   | `/api/create`     | Create a new contact           |
| DELETE | `/api/delete/:id` | Delete contact by ID           |

---

## 📸 Screenshots

(Add screenshots of your app UI and API responses here)

---

## 🌍 Live Demo

* **Frontend (Vercel)** → https://contact-mern-stack.vercel.app
* **Backend (Render)** → https://contactmernstackbackend.onrender.com

---

## 🤝 Contribution

Contributions are welcome!

1. Fork the repo
2. Create a new branch (`feature/my-feature`)
3. Commit your changes
4. Push and open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.
