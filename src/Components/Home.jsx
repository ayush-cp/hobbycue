import React from "react";
import Hero from "./Hero";
import Navbar from "./navbar";
import Categories from "./Categories";
import AddYourOwnSection from "./AddYourOwn";
import TestimonialSection from "./testimonials";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <Hero />
      <Categories />
      <AddYourOwnSection />
      <TestimonialSection />
    </div>
  );
};

export default Home;
