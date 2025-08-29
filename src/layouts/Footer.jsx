// src/layouts/Footer.jsx
import { MdOutlineFacebook } from "react-icons/md";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaPinterest } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";



const Footer = () => {
  return (
<footer className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-gray-100 py-6 mt-20">
  <div className="flex justify-center space-x-6 text-2xl">
    <a href="#" className="text-blue-500 transition hover:opacity-80"><MdOutlineFacebook /></a>
    <a href="#" className="text-black transition hover:opacity-80"><BsTwitterX /></a>
    <a href="#" className="text-pink-500 transition hover:opacity-80"><PiInstagramLogoLight /></a>
    <a href="#" className="text-red-600 transition hover:opacity-80"><FaPinterest /></a>
  </div>
  <p className="text-center mt-4 text-sm">&copy; 2024 Meals Recipe App</p>
</footer>

  );
};

export default Footer;