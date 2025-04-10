import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Container from "../../shared/container/Container";

const FavoriteApps = () => {
  return (
    <div className="relative overflow-hidden py-[100px]  border">
      <div className="w-screen ">
        <img
          src="/whitepace/img/Element2.png"
          className="absolute top-[50%] left-[-400px] sm:left-[-200px] md:left-0 translate-y-[-50%]    h-[70%] md:h-[60%] min-w-[1000px] md:w-screen  md:rotate-0 rotate-70 sm:rotate-10  z-0"
          alt="img"
        />
      </div>
      <Container>
        <section className="relative  w-full py-[20px] sm:py-[40px] lg:py-[100px] gap-[100px] lg:gap-10  flex flex-col lg:flex-row items-center justify-center">
        <div className="z-50 lg:w-1/2 ">
            <img src="/whitepace/img/Apps.png" alt="" />
        </div>
          <div className="z-50 flex flex-col items-center justify-center mb-8 lg:w-1/2 lg:items-start lg:mb-0">
            <h1 className="lg:text-6xl text-center lg:text-start text-[36px]   text-white justify-end flex items-end font-bold leading-tight mb-4">
            Work with Your Favorite Apps Using whitepace
            </h1>
            <p className="text-white font-[400] text-center lg:text-start text-[18px] w-full      mb-6 max-w-md">
            Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
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
              Read More
            </Button>
          </div>

          
        </section>
      </Container>
    </div>
  );
};

export default FavoriteApps;
