import React, { useRef } from "react";
import { ChevronUp } from "lucide-react";
import { motion, useInView } from "framer-motion";

const HobbyAndCommunity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col pt-8 pb-2 bg-[#F7FDFF]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="ml-[8vw]"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="mb-5 text-[18px] md:text-[36px] font-medium italic">
          Your <span className="text-[#8064A2]">Hobby</span>, Your
          <span className="text-[#0096C8]"> Community...</span>
        </h2>
        <motion.button
          className="text-[#FFFFFF] bg-[#8064A2] rounded-md md:w-[140px] w-[100px] h-[45px] md:text-[20px] text-[14px] font-[600]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get started
        </motion.button>
      </motion.div>

      <div className="flex justify-end">
        <motion.div
          className="hidden md:flex flex-col gap-1 justify-center items-center mr-3"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="#hero"
            className="cursor-pointer rounded-full text-center h-[40px] w-[40px] bg-[#FFFFFF] shadow-md flex justify-center items-center"
          >
            <ChevronUp className="text-[#939CA3]" />
          </a>
          <p
            style={{ boxShadow: "0px 0px 5px 0px #78787824" }}
            className="bg-[#FFFFFF] text-[#8064A2] text-[10px] p-1 font-medium"
          >
            Go to top (Ctrl+Home)
          </p>
        </motion.div>
      </div>

      <motion.div
        className="w-full flex justify-center mt-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <img
          className="w-[90%]"
          src="/images/Group 99.png"
          alt="Community Group"
        />
      </motion.div>
    </motion.div>
  );
};

export default HobbyAndCommunity;
