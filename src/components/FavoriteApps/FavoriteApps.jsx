import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Container from "../../shared/container/Container";

const FavoriteApps = () => {
  return (
    <div className="relative overflow-hidden py-[100px]  border">
      <div className=" w-screen">
        <img
          src="/whitepace/img/Element2.png"
          className="absolute top-[50%] left-[-400px] md:left-0 translate-y-[-50%]    h-[50%] md:h-[60%] min-w-[1000px] md:w-screen  md:rotate-0 rotate-60    z-0"
          alt="img"
        />
      </div>
      <Container>
        <section className="relative  w-full py-[20px] sm:py-[40px] md:py-[100px] gap-[100px] md:gap-5  flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 z-50 ">
            <img src="/whitepace/img/Apps.png" alt="" />
        </div>
          <div className="md:w-1/2 z-50 flex flex-col items-center justify-center md:items-start mb-8 md:mb-0">
            <h1 className="md:text-6xl text-center md:text-start text-[36px]   text-white justify-end flex items-end font-bold leading-tight mb-4">
            Work with Your Favorite Apps Using whitepace
            </h1>
            <p className="text-white font-[400] text-center md:text-start text-[18px] w-full      mb-6 max-w-md">
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
