
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
apiKey: "AIzaSyDGhKXBZZxPooWyZpu2dfPrF7yXY9wZcMY",
authDomain: "react-auth-4d2af.firebaseapp.com",
projectId: "react-auth-4d2af",
storageBucket: "react-auth-4d2af.appspot.com",
messagingSenderId: "33552147719",
appId: "1:33552147719:web:8c512e805912a39621d1a2",
measurementId: "G-0B3P26S7VS"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


