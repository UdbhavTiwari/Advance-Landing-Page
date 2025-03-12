import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div   id="about" className=" flex flex-col items-center mt-6 lg:mt-20">
      <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Internship Opportunities
        <span className=" bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        The Cognifyz Internship Program is designed to provide hands-on
        experience and practical knowledge in a real-world work environment.
        This program allows interns to work on industry-relevant projects,
        enhance their technical skills, and gain exposure to professional
        workflows.
      </p>

      <div className="mt-10 text-lg text-neutral-500 max-w-4xl space-y-4">
        <p className="pl-6 relative">
          <span className="absolute left-0 text-white">🔹</span>{" "}
          <span className="font-semibold text-white">Duration:</span> Typically
          lasts <span className="text-orange-400">4 to 12 weeks</span>,
          depending on the specific internship track.
        </p>
        <p className="pl-6 relative">
          <span className="absolute left-0 text-white">🔹</span>{" "}
          <span className="font-semibold text-white">Mode:</span>{" "}
          <span className="text-orange-400">Remote / On-site</span> (as per
          availability).
        </p>
        <p className="pl-6 relative">
          <span className="absolute left-0 text-white">🔹</span>{" "}
          <span className="font-semibold text-white">Key Benefits:</span>{" "}
          Mentorship, project-based learning, skill development, and a{" "}
          <span className="text-orange-400">certificate</span> upon successful
          completion.
        </p>
      </div>
    </div>
  );
};

export default Header;
