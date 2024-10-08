//SDK: software development kit/ a set of tools to build software for a particular platform
/* What Is Google Firebase?
Google Firebase is a powerful backend-as-a-service platform that offers a suite of tools and 
services to help developers build, scale, and maintain web and mobile applications. It provides 
developers with easy-to-use features like real-time databases, authentication, hosting, storage, 
and machine learning capabilities. It was created in 2011 and acquired by Google in 2014.*/
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
