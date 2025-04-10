import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Container from "../shared/container/Container";

const Customize = () => {
  return (
    <div className="bg-white">
      <Container>
        <section className="relative gap-[60px] w-full py-[20px] sm:py-[40px] md:py-[140px]   flex flex-col lg:flex-row items-center justify-center  lg:gap-[80px]">
          <div className="lg:w-1/2 w-[288px] md:w-[561px] z-50  h-[214px] md:h-[349px] lg:h-[400px] bg-[#C4DEFD] "></div>
          <div className="z-50 flex flex-col items-center gap-5 mx-auto mb-8 lg:w-1/2 lg:items-start md:mb-0">
            <h1 className="md:text-6xl  text-[36px]   flex flex-col items-center lg:items-start text-[#212529] justify-center  font-bold leading-tight mb-4">
              <span className="">Customise it to </span>
              <span className="relative">
                <img
                  className="absolute z-0 bottom-[-8px]"
                  src="/whitepace/img/Vector.png"
                  alt=""
                />
                <p className="relative z-50 ">your needs</p>
              </span>
            </h1>
            <p className="text-[#212529] text-center lg:text-start text-[18px] w-full      font-normal mb-6 ">
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </p>
            <Button
              variant="contained"
              className="bg-[#4A90E2] text-[#FFFFFF] hover:bg-[#3A80D2]"
              sx={{
                textTransform: "none",
                fontWeight: "medium",
                borderRadius: "8px",
                padding: "12px 24px",
                fontSize: "16px",
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Let's Go
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Customize;
