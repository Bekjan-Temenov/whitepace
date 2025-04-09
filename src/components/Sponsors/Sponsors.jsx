import React from "react";
import apple from "/svg/apple.svg";
import microsoft from "/svg/microsoft.svg";
import slack from "/svg/slack.svg";
import google from "/svg/google.svg";
import Container from "../../shared/container/Container";

const Sponsors = () => {
  const icons = [apple, microsoft, slack, google];
  return (
    <div className="bg-white flex flex-col  py-[100px]">
      <Container>
        <h1 className="sm:text-6xl text-[36px] gap-5  flex mb-[100px]  text-[#212529] justify-center  font-bold leading-tight ">
          <span>Our</span>
          <span className="relative">
            <img
              className="absolute z-0 bottom-[-0px]"
              src="/whitepace/img/Vector.png"
              alt=""
            />
            <p className="relative z-50">Sponsors</p>
          </span>
        </h1>
        <div className="flex flex-col flex-wrap md:flex-row gap-[100px] items-center justify-between">
          {icons.map((icon ,index) => (
            <img key={index} src={icon} alt="" />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Sponsors;
