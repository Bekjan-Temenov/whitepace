import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Container from "../shared/container/Container";

const Extenstion = () => {
  return (
    <Container>
      <section className="relative w-full py-[80px] md:py-[100px]   flex flex-col md:flex-row items-center justify-center gap-[50px]">
        <div className="md:w-1/2 z-50 flex flex-col items-center md:flex-start   mb-8 md:mb-0">
          <h1 className="md:text-6xl text-[36px]    gap-3    text-white justify-start flex items-center font-bold leading-tight mb-4">
            Use as {" "}
            <span className="relative">
              <img
                className="absolute z-0 bottom-[0px]"
                src="/whitepace/img/Vector.png"
                alt=""
              />
              <p className="relative z-50">Extension</p>
            </span>
          </h1>
          <p className="text-white text-center md:text-start text-[18px] w-full font-normal mb-6 ">
          Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
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
            Lets's Go
          </Button>
        </div>

        <div className="md:w-1/2 z-50 w-[288px]  h-[214px] md:h-[400px] bg-[#C4DEFD] "></div>
      </section>
    </Container>
  );
};

export default Extenstion;
