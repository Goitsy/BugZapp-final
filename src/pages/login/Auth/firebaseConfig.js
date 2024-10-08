// Import the functions you need from the SDKs you need
//SDK: software development kit/ a set of tools to build software for a particular platform
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjgIhzOH01L8977N6mgvUe4nF12HUQozw",
  authDomain: "bugzapp-88022.firebaseapp.com",
  projectId: "bugzapp-88022",
  storageBucket: "bugzapp-88022.appspot.com",
  messagingSenderId: "643458689035",
  appId: "1:643458689035:web:206db83c3a81daf6e17f0e",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
