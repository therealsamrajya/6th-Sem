import React from "react";
import { FeedbackForm, Header } from "../../components";
import { image1 } from "../../assets/assets";

const Home = () => {
  return (
    <div>
      <h1 className="h-7 py-1 font-semibold uppercase bg-one text-center max-sm:text-[0.6rem]">
        ALERT: if you have any symptoms regarding covid19 please contact the
        nearby health center
      </h1>
      <Header />
      <div className="flex lg:flex-row flex-col">
        <FeedbackForm />
        <img src={image1} className="mt-6 max-sm:w-fit" alt="" />
      </div>
    </div>
  );
};

export default Home;
