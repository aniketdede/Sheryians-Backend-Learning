### 🗓️ Day - 5 : Folder Structure, Databases

---

## 🗂️ Folder Structure in Real-World Projects

Folder structure refers to how you organize your project files and directories. It becomes **very important and complex** as the project grows.

### 🔍 Why is it Important?
- Helps in managing large codebases  
- Makes collaboration easier in teams  
- Improves maintainability and scalability  

### 📁 Common Folder Structure Example in Node.js Projects
```
project-root/
│
├── node_modules/       # Installed dependencies
├── src/                # Source code
│   ├── controllers/    # Business logic
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── utils/          # Utility/helper functions
│   └── app.js          # Main app logic
│
├── .env                # Environment variables
├── .gitignore
├── package.json
└── server.js           # Entry point
```

---

## 🗃️ What is a Database (DB)?

A **Database** is a system that stores and manages your application's persistent data.