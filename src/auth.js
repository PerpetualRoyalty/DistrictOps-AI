/**
 * DistrictOps AI — Authentication Module
 * Shared auth utilities for Firebase Authentication
 */

// Firebase config — TODO: Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyAIBq5l9TLbRxFe0it0k0QnIzcqET5xAlI",
  authDomain: "districtops-ai.firebaseapp.com",
  projectId: "districtops-ai",
  storageBucket: "districtops-ai.firebasestorage.app",
  messagingSenderId: "433345366803",
  appId: "1:433345366803:web:48d51b4c5d726dd6e668e6",
  measurementId: "G-LPS1VYF7DW"
};

// Initialize Firebase (only once)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

/**
 * Check if the current page requires authentication.
 * Call this from pages that should be gated behind login.
 */
function requireAuth() {
  return new Promise((resolve) => {
    auth.onAuthStateChanged(user => {
      if (!user) {
        window.location.href = 'login.html';
      } else {
        resolve(user);
      }
    });
  });
}

/**
 * Sign out the current user and redirect to login.
 */
async function signOut() {
  try {
    await auth.signOut();
    window.location.href = 'login.html';
  } catch (err) {
    console.error('Sign out error:', err);
  }
}

/**
 * Get the current user's display info.
 * Returns { name, email, photoURL, emailVerified }
 */
function getUserInfo() {
  const user = auth.currentUser;
  if (!user) return null;
  return {
    name: user.displayName || user.email.split('@')[0],
    email: user.email,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified,
    uid: user.uid
  };
}

/**
 * Generate initials from a name string for avatar fallback.
 */
function getInitials(name) {
  if (!name) return '?';
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}
