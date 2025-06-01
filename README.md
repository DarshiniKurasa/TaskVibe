# 🌟 Advanced MERN B2B Teams Project Management SaaS - *TaskVibe*  


## 📌 Project Overview  

Welcome to **Task Vibe**, a powerful and scalable multi-tenancy project management system built with **Node.js**, **MongoDB**, and **React**. Designed for real-world B2B needs, this project delivers features like Google Sign-In, workspace management, project tracking, task collaboration, role-based permissions, and more. Perfect for developers aiming to create SaaS-based team collaboration platforms.  

---

## 🌟 Key Features  

- 🔐 **Authentication** (Google Sign-In, Email, Password)  
- 🏢 **Create & Manage Multiple Workspaces**  
- 📊 **Projects & Epics Management**  
- ✅ **Tasks** (CRUD, Status, Priority, Assignee)  
- 👥 **Roles & Permissions** (Owner, Admin, Member)  
- ✉️ **Invite Members to Workspaces**  
- 🔍 **Filters & Search** (Status, Priority, AssignedTo)  
- 📈 **Analytics Dashboard**  
- 📅 **Pagination & Load More**  
- 🔒 **Cookie Session Management**  
- 🚪 **Logout & Session Termination**  
- 🌱 **Seeding** for Test Data  
- 💾 **Mongoose Transactions** for Robust Data Integrity  
- 🌐 **Built with MERN Stack** (Node.js, MongoDB, React, TypeScript)  

---

## 🚀 Tools & Technologies  

This project leverages the latest tools and frameworks for modern development:  

- **Node.js**: Scalable backend architecture  
- **React.js**: Dynamic frontend framework  
- **MongoDB & Mongoose**: Flexible and scalable database solutions  
- **Google OAuth**: Seamless Google Sign-In integration  
- **TypeScript**: For a type-safe codebase  
- **TailwindCSS & Shadcn UI**: Beautiful, responsive design  
- **Vite.js**: Lightning-fast frontend development  

---

## 🔄 Getting Started  



### 1. Set Up Environment Variables  

Create a `.env` file in the root of your project and configure these variables:  

```plaintext  
PORT=8000
NODE_ENV=development
MONGO_URI="mongodb+srv://<username>:<password>@<>.mongodb.net/TaskVibe_db"  

SESSION_SECRET="session_secret_key"

GOOGLE_CLIENT_ID=<your-google-client-id>  
GOOGLE_CLIENT_SECRET=<your-google-client-secret>  
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback

FRONTEND_ORIGIN=http://localhost:3000
FRONTEND_GOOGLE_CALLBACK_URL=http://localhost:3000/google/callback
```  

### 2. Run the Application  

Install dependencies and start the development server:  

```bash  
npm install  
npm run dev  
```  

Access the backend at `http://localhost:8000`.  

---

## 🌐 Deploying TaskVibe  

### 1. Add Environment Variables  
Add the `.env` variables to your hosting platform (e.g., Vercel).  

### 2. Deploy  
Deploy your app using your preferred method to make it live.  

---




Now, let’s dive into the demo of **TaskVibe**! 🚀

