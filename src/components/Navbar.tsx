import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-[1.275rem] px-8 py-7 mt-4 bg-white ">
      {/* Left Side - Logo */}
      {/* <div className="text-2xl font-bold text-black">Dihaari</div>
       */}

      <Image
        className=""
        src="/newLogo.png"
        alt="Dihaari Logo"
        width={65}
        height={70}
      />

      {/* Center - Navigation Links */}
      <div
        className="flex space-x-10 custom-font 
 text-black"
      >
        <Link href="/" className="hover:text-blue-600 ">
          Home
        </Link>
        <Link href="#" className="hover:text-blue-600">
          Companies
        </Link>
        <Link href="#" className="hover:text-blue-600">
          Groups
        </Link>
        <Link href="#" className="hover:text-blue-600">
          Blogs
        </Link>
        <button
          type="button"
          className="flex items-center px-5 py-1 border-2 
  border-blue-500 rounded-full text-blue-800 gap-4 
  hover:bg-blue-50 transition"
        >
          <Search size={18} strokeWidth={2} className="text-blue-900" />
          <span>Search</span>
        </button>

      </div>

      {/* Right Side - Search Bar & Buttons */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}

        {/* Sign Up & Sign In Buttons */}
        <Link
          href="#"
          className="px-10 py-[4.5px] border-2  border-blue-600 rounded-full  text-black"
        >
          SIGN UP
        </Link>
        <Link
          href="#"
          className="px-10 py-[4.5px] bg-[#5177CC] text-white rounded-full"
        >
          SIGN IN
        </Link>
      </div>
    </nav>
  );

  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-lg font-bold">Dihaari</h1>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/notifications" className="hover:underline">
            Notifications
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
