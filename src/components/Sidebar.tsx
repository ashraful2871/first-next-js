import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-6">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold mb-8">
        <Link href="/">MyWebsite</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col space-y-4">
        <Link href="/" className="hover:text-gray-300">
          Home{" "}
        </Link>
        <Link href="/profile">profile</Link>
        <Link href="/setting">Setting</Link>
      </div>
    </div>
  );
};

export default Sidebar;
