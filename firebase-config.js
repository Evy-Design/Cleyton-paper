// 1. Go to https://console.firebase.google.com and create a free project (no credit card needed).
// 2. In the project, click "Build > Firestore Database" > "Create database" > start in "Test mode".
// 3. Click the gear icon > "Project settings" > scroll to "Your apps" > click the </> (web) icon to register a web app.
// 4. Copy the firebaseConfig object it gives you and paste the values below.

const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
