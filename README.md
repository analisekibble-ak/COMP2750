# COMP2750

# Campus Marketplace

A web application built for COMP2750/6750 Assessment 3.
Built with HTML, CSS, JavaScript, and Firebase.

---

## How to Run

1. Open the project folder in VS Code
2. Install the Live Server extension (if not already installed)
3. Right-click `login.html` and select **Open with Live Server**
4. The app will open in your browser at `http://127.0.0.1:5500/login.html`

---

## Firebase Configuration

```js
const firebaseConfig = {
  apiKey: "AIzaSyDOVPJqR5aYVz0QPqRCfHVDqlsxN2_763E",
  authDomain: "campusmarketplace-4f239.firebaseapp.com",
  projectId: "campusmarketplace-4f239",
  storageBucket: "campusmarketplace-4f239.firebasestorage.app",
  messagingSenderId: "142696098168",
  appId: "1:142696098168:web:1d22a27823d6050ec5808d"
};
```

---

## Test User Accounts

| Email            | Password    |
|------------------|-------------|
| user1@test.com   | password123 |
| user2@test.com   | password123 |
| user3@test.com   | password123 |

---

## Project Structure
├── login.html        # Sign-in page
├── index.html        # Welcome/home page
├── marketplace.html  # Browse all items (excludes own)
├── mylistings.html   # View own listings
├── shortlist.html    # View and remove shortlisted items
├── images/           # Item image files
└── README.md

---

## Group Members

- Quynh — index.html, mylistings.html, style.css, app.js, readme.md
- Analise — marketplace.html, shortlist.html, images, Firebase setup
- Fahmid — login.html, README, presentation slides
