import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer  id="footer" className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Cognifyz Technologies</h2>
          <p className="text-gray-400 text-sm mt-2">
            Empowering future professionals with real-world experience.
          </p>
        </div>

      
        <nav className="flex flex-wrap justify-center gap-6 text-gray-300">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="#" className="hover:text-orange-500">Internships</a>
          <a href="#" className="hover:text-orange-500">About</a>
          <a href="#" className="hover:text-orange-500">Contact</a>
        </nav>

      
        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-orange-500">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Cognifyz Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
