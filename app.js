import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ---------- Firebase configuration ----------
const firebaseConfig = {
  apiKey: "AIzaSyDOVPJqR5aYVz0QPqRCfHVDqlsxN2_763E",
  authDomain: "campusmarketplace-4f239.firebaseapp.com",
  projectId: "campusmarketplace-4f239",
  storageBucket: "campusmarketplace-4f239.firebasestorage.app",
  messagingSenderId: "142696098168",
  appId: "1:142696098168:web:1d22a27823d6050ec5808d",
  measurementId: "G-0Q1TQLT08G"
};

// ---------- Initialise Firebase ----------
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ---------- Auth helpers ----------

/**
 * requireAuth(callback)
 * Redirects to login.html if no user is signed in.
 * If signed in, runs callback(user).
 * Use on: index, marketplace, mylistings, shortlist pages.
 */
export function requireAuth(callback) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "login.html";
      return;
    }
    callback(user);
  });
}

/**
 * redirectIfSignedIn()
 * Redirects to index.html if a user is already signed in.
 * Use on: login page only.
 */
export function redirectIfSignedIn() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "index.html";
    }
  });
}

/**
 * setupSignOut(buttonId)
 * Attaches sign-out logic to a button by its ID.
 * After signing out, redirects to login.html.
 */
export function setupSignOut(buttonId = "signOutBtn") {
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  btn.addEventListener("click", () => {
    signOut(auth).then(() => {
      window.location.href = "login.html";
    });
  });
}

// ---------- UI helpers ----------

/**
 * showLoading(containerId)
 * Shows a loading spinner inside a container element.
 */
export function showLoading(containerId) {
  const el = document.getElementById(containerId);
  if (el) {
    el.innerHTML = `
      <div class="loading-spinner">
        <div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">Loading...</p>
      </div>
    `;
  }
}

/**
 * showEmpty(containerId, message, icon)
 * Shows an empty state message inside a container element.
 */
export function showEmpty(containerId, message = "Nothing to show yet.", icon = "📭") {
  const el = document.getElementById(containerId);
  if (el) {
    el.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">${icon}</div>
        <p>${message}</p>
      </div>
    `;
  }
}

/**
 * formatPrice(price)
 * Returns "$XX.XX" or "Trade" if price is 0 or the string "trade".
 */
export function formatPrice(price) {
  if (!price || price === 0 || String(price).toLowerCase() === "trade") {
    return "Trade";
  }
  return `$${parseFloat(price).toFixed(2)}`;
}