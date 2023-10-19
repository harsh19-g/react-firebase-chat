import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Profilee from "./pages/Profilee";
import AuthProvider from "./context/auth";
import PrivatRoute from "./components/PrivatRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profilee />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
