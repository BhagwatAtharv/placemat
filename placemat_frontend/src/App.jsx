import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import Navbar2 from "./components/Navbar2";
import DashBord from "./pages/DashBord";


export default function App() {
return (
<BrowserRouter>

<Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/auth" element={<AuthPage />} />
<Route path="/dashbord" element={<DashBord />} />

</Routes>
</BrowserRouter>
);
}