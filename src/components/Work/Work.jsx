import React from "react";
import Container from "../../shared/container/Container";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Work = () => {
  return (
    <div className="bg-[#043873] relative flex items-center justify-center py-[100px]">
      <div className="hidden md:block">
        <img
          src="/whitepace/img/BACKGROUND.png"
          className="absolute top-[30%] w-[245px] xl:w-auto lg:left-[-5%] lg:top-[30%] xl:left-[-15%] xl:top-[50%] right-[180px] md:top-[50%] md:left-[-15%] 2xl:left-[-0%] 2xl:top-[60%] translate-y-[-50%] h-auto   z-0"
          alt="img"
        />
      </div>
      <Container>
        <div className="flex flex-col text-white md-w-full lg:w-[49%] xl:w-[80%] xl:mx-auto items-start xl:items-center gap-[24px] justify-center">
          <span className="font-[700] relative  gap-3 xl:text-center text-start text-[39px] md:text-[54px] lg:text-[64px] xl:text-[65px] 2xl:text-[72px]">
            <span className="relative z-50">Your work, every where you are</span>
              <img
                className="absolute z-0 lg:bottom-[11px] bottom-[-0px] lg:right-0 md:right-[440px] md:bottom-[-20px] md:w-[235px] md:h-[45px] lg:h-auto    right-0"
                src="/whitepace/svg/bground.svg"
                alt=""
              />
          </span>
          <p className="font-[400] text-start md:text-center text-[18px]">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
          <Button
            variant="contained"
            className="bg-[#4A90E2] text-[#FFFFFF] mt-[30px] hover:bg-[#3A80D2]"
            sx={{
              textTransform: "none",
              fontWeight: "medium",
              borderRadius: "8px",
              padding: "12px 24px",
              fontSize: "16px",
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Try Taskey
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Work;
