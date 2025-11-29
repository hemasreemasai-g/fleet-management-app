# Mini Fleet Management App

A simple DOM-based Fleet Management Application built using **HTML, CSS, and JavaScript**.  
The app allows an admin to login, add fleet vehicles, view them as cards, update driver names, change availability status, delete vehicles, and filter fleets based on category and availability.

---

## 🚀 Features

### 🔐 Login Page
- Email: **admin@gmail.com**
- Password: **admin1234**
- Shows success alert on correct login
- Redirects to admin dashboard
- Shows error alert on incorrect login

---

## 🖥️ Dashboard (admin.html)

### 📌 Sidebar – Add Fleet
Allows the admin to add a new vehicle with:
- Registration Number  
- Category (Auto, Car, Truck, Bus)  
- Driver Name  
- Availability (Available / Unavailable)  
- On clicking **Add Fleet**, a new card is created in the main area  

Input validation is included to prevent blank fields.

---

## 📦 Fleet Cards (Main Content)
Each card displays:
- Fleet image  
- Registration Number  
- Category  
- Driver Name  
- Availability Status  

Each card includes the following actions:
1. **Update Driver** – Uses `prompt()` to change driver name  
2. **Change Availability** – Toggles Available ↔ Unavailable  
3. **Delete Vehicle** – Includes confirmation before deletion  

Fleet data updates instantly using DOM rendering.

---

## 🔍 Navbar Filters
The top navbar includes:
- **Category Filter** → Auto, Car, Truck, Bus  
- **Availability Filter** → Available, Unavailable  
- **Clear Filter** → Resets all filters

Filtering is dynamic and can be combined:
- Example: Show **Car + Available** only

---

## 🧩 Technologies Used
- **HTML5**
- **CSS3**
- **Vanilla JavaScript (DOM Manipulation)**

No backend, no frameworks.

---

## 📁 Project Structure

Mini-Fleet-App/
│
├── index.html # Login Page
├── admin.html # Dashboard Page
├── style.css # Styling
└── script.js # All JavaScript Logic

## 🛠️ How to Run the Project
1. Clone the repository  
2. Open **index.html** in your browser  
3. Login using admin credentials  
4. Start adding and managing fleet vehicles  

You can also run using Live Server in VS Code.

---

## 🎯 Learning Outcomes
- DOM manipulation  
- Creating and updating UI dynamically  
- Event handling (click, change)  
- Filtering and rendering data  
- Layout using Flexbox & Grid  
- Form validation  
- Prompt, alert, confirm usage  

---

## 📸 Screenshots
(Add your own screenshots here after deploying)

---

## 🌐 Deployment
(Optional)  
You can deploy using any of the following:
- GitHub Pages  
- Netlify  
- Vercel  

---

## 👩‍💻 Author
Gogudupalem Hemasree  

---

## ✔️ Status
**Completed and Submitted**
