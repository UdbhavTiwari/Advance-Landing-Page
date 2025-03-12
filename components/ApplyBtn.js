import React from "react";

const ApplyForInternship = () => {
  return (
    <section id="applySection" className="bg-neutral-900 py-12 px-6 text-center rounded-xl shadow-md">
      <h2 className="text-4xl font-bold text-gray-900">
        Ready to Kickstart Your Career?
      </h2>
      <p className="text-lg text-gray-100 mt-4">
        Apply for our internship program and gain hands-on experience in a
        dynamic environment!
      </p>
      <button className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-orange-700 transition duration-300">
        Apply Now
      </button>
    </section>
  );
};

export default ApplyForInternship;
