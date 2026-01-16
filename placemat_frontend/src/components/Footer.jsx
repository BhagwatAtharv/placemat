import React from "react";
export default function Footer() {
return (
<footer className="bg-gray-50 py-12 mt-20">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-gray-700">
<div>
<h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
<span className="bg-linear-to-r from-indigo-500 to-purple-500 p-2 rounded-lg text-white"> </span>
CodApti
</h2>
<p className="mt-3 text-sm">Your complete placement prep platform</p>
</div>


<div>
<h3 className="font-semibold mb-3">Product</h3>
<ul className="space-y-2 text-sm">
<li>Aptitude</li>
<li>Coding</li>
<li>Leaderboard</li>
</ul>
</div>


<div>
<h3 className="font-semibold mb-3">Company</h3>
<ul className="space-y-2 text-sm">
<li>About</li>
<li>Contact</li>
<li>Careers</li>
</ul>
</div>


<div>
<h3 className="font-semibold mb-3">Legal</h3>
<ul className="space-y-2 text-sm">
<li>Privacy Policy</li>
<li>Terms of Service</li>
<li>Cookie Policy</li>
</ul>
</div>
</div>


<div className="text-center text-xs text-gray-500 mt-10">
© 2025 CodApti. All rights reserved.
</div>
</footer>
);
}