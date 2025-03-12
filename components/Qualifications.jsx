import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { qualifications } from "@/Constants";

const Qualifications = () => {
  return (
    <div id="qualification" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-tight">
        Qualifications
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for Internship
        </span>
      </h2>
     <div key="1" className="flex flex-wrap justify-between">
        <div key="2" className="p-3 w-full lg:w-1/2 justify-center flex flex-col  mt-6 ">
          <Image src="/computer.jpg" width={350} height={275} alt="computer" className="px-3 py-3  mb-3 rounded-3xl ml-75 mt-25 hidden sm:block" />
          <Image src="/thinking.jpg" width={350} height={275} alt="computer" className="px-3 py-3  mb-3 rounded-3xl ml-75 mt-5 hidden sm:block"/>
          <Image src="/monkey.jpg" width={350} height={275} alt="computer" className="px-3 py-3  mb-3 rounded-3xl ml-75 mt-5 hidden sm:block"/>
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {qualifications.map((item, index) => (
            <div className=" container justify-items-start">
                <div className="flex font-bold text-3xl px-4 py-4 m-4 rounded-xl mt-20 text-neutral-300">
                <div className="px-3 text-2xl">

              {item.icon}
                </div>

              <h2 className="">{item.title}</h2>
                </div>
              <p className=" font-semibold text-2xl p-2 rounded-l text-neutral-500">{item.description}</p>
            </div> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
