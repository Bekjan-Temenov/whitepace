import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Container from "../../shared/container/Container";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden py-[80px] md:py-[100px]   ">
      <div className="">
        <img
          src="/img/curve.png"
          className="absolute top-[50%] left-[-400px] md:left-0 translate-y-[-50%]    h-[70%] md:h-[60%] min-w-[1000px] md:w-screen  md:rotate-0 rotate-70  z-0"
          alt="img"
        />
      </div>
      <Container>
        <section className="relative w-full py-[20px] sm:py-[40px] md:py-[100px]   flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 z-40 flex flex-col items-center md:items-start  mb-8 md:mb-0">
            <h1 className="md:text-6xl text-center md:text-start text-[36px] text-white justify-end flex items-end font-bold leading-tight mb-4">
              Get More Done with whitepace
            </h1>
            <p className="text-white text-[18px] w-full text-center md:text-start     font-normal mb-6 max-w-md">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <Button
              variant="contained"
              className="bg-[#4A90E2] text-white hover:bg-[#3A80D2]"
              sx={{
                textTransform: "none",
                fontWeight: "medium",
                borderRadius: "8px",
                padding: "12px 24px",
                fontSize: "16px",
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Try TasKey Free 
            </Button>
          </div>

          <div className="md:w-1/2 w-[288px] z-40  h-[214px] md:h-[400px] bg-[#C4DEFD] "></div>
        </section>
      </Container>
    </div>
  );
};

export default HeroSection;
