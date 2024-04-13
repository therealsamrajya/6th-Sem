import React from "react";

const Card = ({ picture, attireName, hiringPrice, buyingOption, category }) => {
  return (
    <div className=" bg-buttontext text-primary rounded-lg p-2 mb-6 flex flex-col items-center w-[18rem] mt-4 max-sm:w-[14rem] font-merriweather-regular transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="h-60 w-full overflow-hidden rounded-lg mb-4">
        <img
          src={picture}
          alt={attireName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">{attireName}</h2>
        <p className="mb-1">Hiring Price: ${hiringPrice}</p>
        <p className=" font-great-vibes text-xl font-bold text-red-700">
          {" "}
          {buyingOption}
        </p>
        <p className="italic"> {category}</p>
      </div>
    </div>
  );
};

export default Card;
