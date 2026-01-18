import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import Navbar2 from "./components/Navbar2";
import DashBord from "./pages/DashBord";
import TestPortal from "./pages/TestPortal";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";



export default function App() {
return (
<BrowserRouter>

<Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/auth" element={<AuthPage />} />
<Route path="/dashbord" element={<DashBord />} />
<Route path="/testportal" element={<TestPortal />} />
<Route path="/profile" element={<Profile />} /> 
<Route path="/leaderboard" element={<Leaderboard />} />


</Routes>
</BrowserRouter>
);
}