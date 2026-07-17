// 1. Go to https://console.firebase.google.com and create a free project (no credit card needed).
// 2. In the project, click "Build > Firestore Database" > "Create database" > start in "Test mode".
// 3. Click the gear icon > "Project settings" > scroll to "Your apps" > click the </> (web) icon to register a web app.
// 4. Copy the firebaseConfig object it gives you and paste the values below.

const firebaseConfig = {
  apiKey: "AIzaSyCQg_TCGsIMrwfBs86QF5kUimJSWTd4FBs",
  authDomain: "cleyton-paper.firebaseapp.com",
  projectId: "cleyton-paper",
  storageBucket: "cleyton-paper.firebasestorage.app",
  messagingSenderId: "412885167654",
  appId: "1:412885167654:web:c0afebc5a0c2c664fd80e7",
};
 
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
