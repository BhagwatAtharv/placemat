import React from "react";
import heroImage from "../assets/hero.png"; // Replace with your image
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function LandingPage() {
return (
    <><Navbar />
        <div className="pt-24 bg-linear-to-br from-indigo-50 via-purple-50 to-indigo-100 min-h-screen pb-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
                <h1 className="text-5xl font-extrabold text-indigo-600 leading-tight">
                    Master Aptitude & Coding — All in One Platform
                </h1>


                <p className="mt-5 text-gray-600 text-lg">
                    Practice real placement questions, track progress, and improve daily. Join thousands of students preparing for careers.
                </p>


                <div className="flex gap-4 mt-8">
                    <button className="px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow font-semibold">
                        Start Learning
                    </button>
                    <button className="px-6 py-3 bg-white border rounded-lg shadow font-semibold">
                        Sign Up Free
                    </button>
                </div>


                <div className="flex gap-8 mt-10 text-gray-700 text-sm">
                    <span className="flex items-center gap-2">✔ 1000+ Questions</span>
                    <span className="flex items-center gap-2">✔ Daily Updates</span>
                    <span className="flex items-center gap-2">✔ Free Forever</span>
                </div>
            </div>
            {/* RIGHT IMAGE */}
            <div>
                <img
                    src={heroImage}
                    alt="Coding"
                    className="rounded-3xl shadow-xl" />
            </div>
        </div>


        {/* Features Section */}
        <div className="mt-28 text-center">
            <h2 className="text-4xl font-bold text-gray-800">Everything You Need to Succeed</h2>
            <p className="mt-3 text-gray-500 text-lg">
                Comprehensive preparation tools for placement success
            </p>
        </div>


        {/* Feature Cards */}
        <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-8 px-6">
            <div className="p-6 bg-white rounded-2xl shadow-md border">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Aptitude Tests</h3>
                <p className="text-gray-600 text-sm">
                    Master quantitative, logical & verbal reasoning with 1000+ questions
                </p>
            </div>


            <div className="p-6 bg-white rounded-2xl shadow-md border">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Coding Challenges</h3>
                <p className="text-gray-600 text-sm">
                    Solve placement problems across Easy, Medium & Hard levels
                </p>
            </div>


            <div className="p-6 bg-white rounded-2xl shadow-md border">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Leaderboard</h3>
                <p className="text-gray-600 text-sm">
                    Compete globally & track your ranking progress
                </p>
            </div>
        </div>
    </div>
    <Footer/>
    </>
);
}