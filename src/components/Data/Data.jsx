import React from "react";
import Container from "../../shared/container/Container";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Data = () => {
  return (
    <div className="relative bg-white">
      <Container>
        <section className="relative gap-[100px] md:gap-[20px] w-full py-[20px] sm:py-[40px] md:py-[100px]   flex flex-col lg:flex-row items-center justify-center">
          <div className="z-50 block lg:w-1/2 lg:hidden ">
            <img src="/whitepace/img/Element.png" alt="" />
          </div>
          <div className="z-50 mb-8 lg:w-1/2 lg:mb-0">
            <h1 className="lg:text-6xl text-[36px] text-center sm:text-start   flex  text-[#212529] justify-start  font-bold leading-tight mb-4 gap-3">
              <span>100% </span>
              <span className="relative">
                <img
                  className="absolute z-0 bottom-[-8px]"
                  src="/whitepace/img/Vector.png"
                  alt=""
                />
                <p className="relative z-50">your data</p>
              </span>
            </h1>
            <p className="text-[#212529]  text-center sm:text-start text-[18px] w-full      font-normal mb-6 ">
              The app is open source and your notes are saved to an open format,
              so you'll always have access to them. Uses End-To-End Encryption
              (E2EE) to secure your notes and ensure no-one but yourself can
              access them.
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
              Read More
            </Button>
          </div>

          <div className="z-50 hidden lg:w-1/2 lg:block ">
            <img src="/whitepace/img/Element.png" alt="" />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Data;
