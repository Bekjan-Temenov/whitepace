import React, { useState } from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import Container from "../../shared/container/Container";
import useMediaQuery from "@mui/material/useMediaQuery";

const avatar1 =
  "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww";
const avatar2 =
  "https://media.istockphoto.com/id/1335941248/fr/photo/plan-dun-beau-jeune-homme-debout-sur-un-fond-gris.jpg?s=612x612&w=0&k=20&c=YK04b0z7MLjvJ1V88YvIDn8F5B_LUMP9CTaj4ffm6V0=";
const avatar3 =
  "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const TestimonialSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 3;

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  const getLeftmostSlide = (centerSlide) => {
    let leftmost = centerSlide;
    if (leftmost < 0) {
      leftmost = totalSlides - 1;
    }
    return leftmost;
  };

  const leftmostSlide = getLeftmostSlide(activeSlide);

  const testimonials = [
    {
      quote:
        "Taskey is designed as a collaboration tool for businesses that is a full project management solution.",
      name: "Oberon Shaw, MCH",
      title: "Head of Talent Acquisition, North America",
      avatar: avatar1,
    },
    {
      quote:
        "If you haven't tried the EventSprout yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is really amazing.",
      name: "Jessie Owner",
      title: "Founder, XYZ Company",
      avatar: avatar2,
    },
    {
      quote:
        "If you haven't tried the EventSprout yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is really amazing.",
      name: "Jessie Owner",
      title: "Founder, XYZ Company",
      avatar: avatar3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="mx-auto">
          <h2 className="text-[49px] md:text-[52px] lg:text-[70px] relative z-50 flex items-center justify-center font-bold text-gray-900 mb-12 text-center">
            <img
              className="absolute bottom-[0px] right-[100px] md:bottom-[60px] lg:bottom-0 md:right-[160px] lg:right-[350px] z-0"
              src="/whitepace/img/Group.png"
              alt="Underline decoration"
            />
            <span className="z-50 ">
              <span className="block md:hidden">What Our Clients Says</span>
              <span className="hidden md:block lg:hidden">
                See what our trusted users Say
              </span>
              <span className="hidden lg:block">What Our Clients Says</span>
            </span>
          </h2>
          <div className=" sm:hidden lg:block">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-1 lg:px-5">
                  <TestimonialCard
                    quote={testimonial.quote}
                    name={testimonial.name}
                    title={testimonial.title}
                    avatar={testimonial.avatar}
                    highlighted={
                      isMobile
                        ? index === activeSlide
                        : isTablet
                        ? index === activeSlide
                        : index === leftmostSlide
                    }
                    isMobile={isMobile}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="hidden overflow-x-auto sm:flex sm:block  lg:hidden gap-[32px] ">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-1 lg:px-5">
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                  avatar={testimonial.avatar}
                  highlighted={
                    isMobile
                      ? index === activeSlide
                      : isTablet
                      ? index === activeSlide
                      : index === leftmostSlide
                  }
                  isMobile={isMobile}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
