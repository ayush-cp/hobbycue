import React, { useEffect, useState } from "react";
import { IoAddCircle, IoLocationSharp } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";

const AddNew = () => {
  const [hover, setHover] = useState(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMobile(true);
      } else setMobile(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobile]);

  const categories = [
    {
      id: 1,
      title: "People",
      image: (
        <MdGroups
          style={{
            fontSize: `${mobile?'2rem':'2.5rem'}`,
            color: `${hover == 1 ? "white" : "#8064A2"}`,
          }}
        />
      ),
      desc: "An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association.",
      color: "#8064A2",
    },
    {
      id: 2,
      title: "Place",
      image: (
        <IoLocationSharp
          style={{
            fontSize: `${mobile?'2rem':'2.5rem'}`,
            color: `${hover == 2 ? "white" : "#77933C"}`,
          }}
        />
      ),
      desc: "An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.",
      color: "#77933C",
    },
    {
      id: 3,
      title: "Product",
      image: (
        <PiShoppingCartSimpleFill
          style={{
            fontSize: `${mobile?'2rem':'2.5rem'}`,
            color: `${hover == 3 ? "white" : "#C0504D"}`,
          }}
        />
      ),
      desc: "An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit.",
      color: "#C0504D",
    },
    {
      id: 4,
      title: "Program",
      image: (
        <BsCalendar2CheckFill
          style={{
            fontSize: `${mobile?'2rem':'2.5rem'}`,
            color: `${hover == 4 ? "white" : "#0096C8"}`,
          }}
        />
      ),
      desc: "An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition.",
      color: "#0096C8",
    },
  ];
  const handleMouseHover = (e) => {
    setHover(e.target.id);
  };
  const handleMouseLeave = (e) => {
    setHover(null);
  };

  return (
    <div className="w-full h-[120vh] bg-[#F8F9FA]  flex justify-center items-start pt-32">
      <div className="md:w-[60%] w-full md:min-h-[63%] md:h-max h-max bg-white flex flex-col items-center gap-4 p-10">
        <div className="flex flex-row gap-5">
          <IoAddCircle
            style={{
              color: "#0096C8",
              fontSize: `${mobile?'2rem':'2.5rem'}`,
              cursor: "pointer",
              transition: "ease 300",
            }}
          />
          <h3 className="font-poppins font-semibold md:text-2xl text-xl text-[#08090A]">
            Add New Listing
          </h3>
        </div>
        <div className="w-full h-max grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              style={{
                borderColor: category.color,
                backgroundColor: `${
                  hover == category.id ? category.color : "white"
                }`,
              }}
              className={`w-[100%] cursor-pointer overflow-hidden md:h-44 min-h-36 h-max border-2 transition-all ease-linear duration-300  hover:text-white flex flex-col items-start md:gap-6 gap-5 p-4 rounded-lg`}
              onMouseEnter={handleMouseHover}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-row gap-2 items-center">
                {category.image}
                <h3 className="font-poppins font-semibold md:text-2xl text-lg ">
                  {category.title}
                </h3>
              </div>
              <p className="text-justify font-poppins font-normal md:text-sm text-xs leading-5 ">
                {category.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddNew;
