# 💸 Expense Tracker Web App

A modern, full-stack **Expense Tracker** built with the MERN stack (MongoDB, Express, React, Node.js) — designed to help users efficiently manage their income, expenses, and finances with beautiful charts, emojis, and insights.

🚀 **Live Demo**: [expense-tracker-kyxy.onrender.com](https://expense-tracker-kyxy.onrender.com)

---

## 📸 Screenshots
<img width="1536" alt="image" src="https://github.com/user-attachments/assets/c42c51ce-0451-4a81-8d39-49b86920c70f" />

---

## 🔧 Tech Stack

**Frontend:**

* React.js (with Tailwind CSS)
* React Router
* Recharts (Charts & Graphs)
* Emoji Picker API
* Axios

**Backend:**

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Multer (for image uploads)
* JWT (Authentication)

---

## ✨ Features

* ✅ User Authentication (Register / Login)
* 💸 Add & track incomes with category, amount, date, emoji icon
* 📉 Add & track expenses with the same features
* 📊 Dashboard with financial summary: total balance, income, expenses
* 🗖️ Last 30 days bar chart for expenses
* 📈 Last 60 days donut chart for income
* 📂 Export income & expense logs to Excel
* 🧠 Fully responsive and intuitive UI
* 🌐 Live hosted frontend + backend

---

## 🛠️ Installation & Setup (Local)

1. **Clone the repository**

```bash
git clone https://github.com/<your-username>/expense-tracker.git
cd expense-tracker
```

2. **Backend Setup**

```bash
cd backend
npm install
```

3. **Frontend Setup**

```bash
cd ../frontend
npm install
```

4. **Environment Variables**

Create a `.env` file in the `backend/` directory with the following:

```env
PORT=8000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret>
```

5. **Run Locally**

Open two terminals:

* Terminal 1 (backend):

```bash
cd backend
npm run dev
```

* Terminal 2 (frontend):

```bash
cd frontend
npm start
```

---

* **Backend**:

  * Language: Node
  * Root Directory: `backend`
  * Build Command: `npm install`
  * Start Command: `npm start`
  * Add MongoDB URI and JWT\_SECRET in Environment tab
  * Whitelist Render’s outbound IPs in MongoDB Atlas

* **Frontend**:

  * Root: `frontend`
  * Build Command: `npm run build`
  * Publish Directory: `frontend/build`
  * Add Rewrite Rule: `/* → /index.html (Rewrite)`

---

## 📁 Folder Structure

```
expense-tracker/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── App.js
├── README.md
└── .env (local only)
```

---

## 🤝🏼 Author

**Sai Mehetre**
🌍 India

Happy coding! 💻
