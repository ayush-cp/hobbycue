import React from "react";
import Hero from "./Hero";
import AddYourOwnSection from "./AddYourOwn";
import Categories from "./Categories";
import TestimonialSection from "./testimonials";
import HobbyAndCommunity from "./HobbyAndCommunity";
const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <Hero />
      <Categories />
      <AddYourOwnSection />
      <TestimonialSection />
      <HobbyAndCommunity />
    </div>
  );
};

export default Home;
