import React from "react";
import { ChevronUp } from "lucide-react";

const HobbyAndCommunity = () => {
  return (
    <div className="flex flex-col pt-8 pb-2 bg-[#F7FDFF]">
      <div className="ml-[8vw]">
        <h2 className="mb-5 text-[18px] md:text-[36px] font-medium italic">
          Your <span className="text-[#8064A2]">Hobby</span>, Your
          <span className="text-[#0096C8]"> Community...</span>
        </h2>
        <button className="text-[#FFFFFF] bg-[#8064A2] rounded-md md:w-[140px] w-[100px] h-[45px] md:text-[20px] text-[14px] font-[600]">
          Get started
        </button>
      </div>
      <div className="flex justify-end">
        <div className="hidden md:flex flex-col gap-1 justify-center items-center mr-3">
          <div className="cursor-pointer rounded-full text-center h-[40px] w-[40px] bg-[#FFFFFF] shadow-md flex justify-center items-center">
            <ChevronUp className="text-[#939CA3]" />
          </div>
          <p
            style={{ boxShadow: "0px 0px 5px 0px #78787824" }}
            className="bg-[#FFFFFF] text-[#8064A2] text-[10px] p-1 font-medium"
          >
            Go to top (Ctrl+Home)
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <img
          className="w-[90%]"
          src="/images/Group 99.png"
          alt="Community Group"
        />
      </div>
    </div>
  );
};

export default HobbyAndCommunity;
