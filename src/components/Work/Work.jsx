import React from "react";
import Container from "../../shared/container/Container";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Work = () => {
  return (
    <div className="bg-[#043873] relative flex items-center justify-center py-[100px]">
      <div className="hidden md:block">
        <img
          src="/img/BACKGROUND.png"
          className="absolute top-[50%] left-[-15%] translate-y-[-50%] h-auto w-auto  z-0"
          alt="img"
        />
      </div>
      <Container>
        <div className="flex flex-col text-white md:w-[80%] mx-auto items-center gap-[24px] justify-center">
          <span className="font-[700] relative  gap-3 text-[39px] md:text-[72px]">
            <span className="z-50 relative">Your work, every where you are</span>
              <img
                className="absolute z-0 md:bottom-[11px] bottom-[-0px] right-0"
                src="/svg/bground.svg"
                alt=""
              />
          </span>
          <p className="font-[400] text-start text-[18px]">
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
