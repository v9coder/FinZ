
# 💰 Finz – Smart Financial Assistant for Gen Z

**Finz** is an AI-powered financial advisor designed to help Gen Z manage money like pros. From tracking daily expenses to getting personalized financial tips and investment advice — Finz has your back!

<p align="center">
  <img src="https://github.com/v9coder/FinZ/blob/main/assets/logo.jpg?raw=true" alt="Finz Banner" width="200">
</p>

---

## 🔗 Live Demo
[Visit Finz Website]((https://finzzz.netlify.app/))

---

## 📌 Features

- ✅ User Authentication (Sign Up/Login)
- 💸 Expense Tracking Dashboard
- 📊 Budget Planning & Analytics
- 🤖 AI-powered Financial Advice
- 📈 Investment Recommendations
- 🎯 Savings Goal Tracker
- 🧠 Financial Literacy Content
- 🔐 Optional Bank Account Integration
- 📱 Mobile-Friendly Responsive Design

---

## 🛠️ Tech Stack

### Frontend:
- HTML5, CSS3, JavaScript (Vanilla or React)
- TailwindCSS or Bootstrap (optional for styling)
- Chart.js / Recharts for analytics

### Backend:
- Node.js or Python (Flask/FastAPI)
- Express (if Node.js)
- MongoDB / Firebase / PostgreSQL (choose one)
- JWT for secure authentication

### AI Integration:
- OpenAI API / Custom AI Model for financial advice
- NLP for intelligent responses

---

## 📂 Project Structure
```bash
FINZ/
├── .vscode/
│   └── settings.json                   # VSCode project settings
│
├── assets/
│   ├── css/
│   │   └── style.css                  # Custom styles
│   ├── js/
│   │   ├── chatbot.js                 # AI chatbot logic
│   │   ├── dashboard.js               # Dashboard interactions
│   │   ├── expenses.js                # Expense tracking logic
│   │   ├── firebase-auth.js           # Firebase auth functions
│   │   ├── firebase-config.js         # Firebase project config
│   │   ├── goals.js                   # Goal management
│   │   ├── login.js                   # Login form logic
│   │   ├── logout.js                  # Logout functionality
│   │   ├── main.js                    # Initialization and routing
│   │   └── signup.js                  # Signup form logic
│   └── logo.jpg                       # Logo used in UI
│
├── data/
│   └── mockData.json                  # Mock data for testing
│
├── expenses.html                      # Expenses page
├── goals.html                         # Goals page
├── index.html                         # Landing / Home page
├── learn.html                         # Financial literacy resources
├── login.html                         # Login page
├── navbar.html                        # Common navigation bar
├── profile.html                       # User profile page
├── signup.html                        # Signup page
├── README.md                          # Project documentation

