import React from "react";
import people from "/public/images/people.png";
import product from "/public/images/product.png";
import program from "/public/images/program.png";
import place from "/public/images/place.png";

const Categories = () => {
  const categores = [
    {
      id: 1,
      title: "People",
      image: people,
      desc: "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
      action: "Connect",
      link: "",
    },
    {
      id: 2,
      title: "Place",
      image: place,
      desc: "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
      action: "Meet Up",
      link: "",
    },
    {
      id: 3,
      title: "Product",
      image: product,
      desc: "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
      action: "Get It",
      link: "",
    },
    {
      id: 4,
      title: "Program",
      image: program,
      desc: "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
      action: "Attend",
      link: "",
    },
  ];

  return (
    <div className="w-full min-h-[51.125rem] h-max bg-white grid place-items-center md:py-1 py-8">
      <div className="md:w-[86%] w-full min-h-[75%] h-max grid md:grid-cols-2 place-items-center grid-cols-1 gap-6">
        {categores.map((category) => (
          <div key={category.id} className="w-[94%] md:h-full h-[216px] border border-[#CED4DA] flex flex-col md:items-start items-center md:gap-6 gap-5 md:p-11 p-6 rounded-lg">
            <div className="flex flex-row gap-6 items-center">
              <img
                src={category.image}
                alt={category.title}
                className="md:w-10 w-8 md:h-10 h-8 object-contain"
              />
              <h3 className="font-poppins font-semibold md:text-2xl text-lg text-black">
                {category.title}
              </h3>
            </div>
            <p className="text-center md:text-justify font-poppins font-light md:text-lg text-xs leading-5 text-black">
              {category.desc}
            </p>
            <button className="font-poppins font-semibold md:text-sm text-xs transition-all ease-linear duration-200 text-[#8064A2] hover:bg-[#8064A2]  hover:text-white border border-[#8064A2] md:h-10 h-8 md:w-32 w-full rounded-lg">
              {category.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;