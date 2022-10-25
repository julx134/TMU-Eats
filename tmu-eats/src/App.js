import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../src/login-flow/LoginPage";
import Cart from "../src/item-flow/Cart";
import HomePage from "../src/home-flow/HomePage";
import "antd/dist/antd.min.css";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
  aapiKey: "AIzaSyAYa6kBVdSja_AgTSzVzekC0Pul7u-7NvE",
  authDomain: "tmu-eats.firebaseapp.com",
  projectId: "tmu-eats",
  storageBucket: "tmu-eats.appspot.com",
  messagingSenderId: "875772432483",
  appId: "1:875772432483:web:f8dea098c129eff6fbe856",
  measurementId: "G-KSZT30CR1X",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
export const app;
