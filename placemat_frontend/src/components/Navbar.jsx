import React from "react";
import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";


export default function Navbar() {
return (
<nav className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center fixed top-0 z-50">
    <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PlaceMate
              </span></div>


<div className="hidden md:flex gap-8 text-gray-700 font-medium">
<Link to="/">Home</Link>
<Link to="/dashbord">Practice</Link>
<Link to="/leaderboard">Leaderboard</Link>
</div>


<div className="flex gap-3">
<Link to="/auth?mode=login" className="px-5 py-2 bg-gray-100 rounded-lg shadow text-sm font-semibold">
Login
</Link>
<Link
to="/auth?mode=signup"
className="px-5 py-2 bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow text-sm font-semibold"
>
Sign Up
</Link>
</div>
</nav>
);
}