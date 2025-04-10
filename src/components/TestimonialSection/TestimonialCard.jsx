import React from "react";

const TestimonialCard = ({ quote, name, title, avatar, highlighted }) => {
  return (
    <div className="flex items-center justify-center mx-auto group lg:pointer-events-none">
      <article
        className={`flex flex-col  xl:p-8 p-4  rounded-lg xl:py-12 gap-4 transition-colors duration-300  hover:text-white hover:bg-blue-500 lg:hover:text-white  shadow-lg w-[320px] lg:w-auto h-[450px] lg:h-[400px]  xl:h-[550px]  ${
          highlighted
            ? "bg-white text-gray-900 "
            : "lg:bg-[#4F9CF9] bg-white text-gray-900   lg:text-white"
        }`}
      >
        <div className="mb-4">
          <img
            style={{ fontSize: "40px" }}
            className={highlighted ? "text-white" : "text-white"}
            src="/whitepace/svg/QuoteIcon.svg"
            alt="Quote Icon"
          />
        </div>

        <p className="flex-1 mb-3 text-base xl:mb-6">{quote}</p>

        <hr className="my-[0px] xl:my-[30px]" />

        <div className="flex items-center">
          <img
            src={avatar}
            alt={`${name}'s avatar`}
            className="xl:w-[95px] w-[60px] h-[60px] xl:h-[95px] object-cover rounded-full mr-4 border-2 border-gray-300"
          />
          <div>
            <p className={`font-semibold text-md xl:text-lg ${
                highlighted ? "text-[#212529]" : "text-[#043873]"
              }`}>{name}</p>
            <p
              className={`text-xs xl:text-sm ${
                highlighted ? "text-[#212529]" : "text-white"
              }`}
            >
              {title}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default TestimonialCard;
