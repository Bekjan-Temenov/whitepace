import React from "react";
import Slider from "react-slick";
import PricingCard from "./PricingCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "../../shared/container/Container";

const plans = [
  {
    title: "Free",
    price: "$0",
    description: "Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    highlighted: false,
  },
  {
    title: "Personal",
    price: "$11.99",
    description: "Keep home and family on track",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    highlighted: true,
    bannerText: "Keep home and family on track",
  },
  {
    title: "Organization",
    price: "$49.99",
    description: "Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    highlighted: false,
  },
];
const PricingSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="py-[100px] gap-[24px] bg-white flex flex-col">
      <Container>
      <h1 className="text-center relative flex flex-wrap items-center justify-center text-[#212529] font-[700] text-[41px] md:text-[72px]">
        <span className="relative z-50">Choose Your Plan</span>
        <img
          className="absolute z-0 bottom-[-8px] md:right-[350px] w-[106px] h-[30px]"
          src="/whitepace/img/Vector.png"
          alt=""
        />
      </h1>
      <p className="text-center mb-[30px] w-full md:w-[60%] mx-auto text-[#212529] font-[400] text-[18px]">
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </p>
      <div className="block md:hidden mx-auto  px-1">
        <Slider {...settings}>
          {plans.map((plan, index) => (
            <div key={index} className=" w-[315px]">
              <PricingCard
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
                bannerText={plan.bannerText}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className=" hidden md:block">
        <div className="flex    w-full  items-center h-auto  gap-6">
          {plans.map((plan, index) => (
            <div key={index} className=" w-[450px]">
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
              bannerText={plan.bannerText}
            />
            </div>
          ))}
        </div>
      </div>
      </Container>
    </section>
  );
};

export default PricingSection;
