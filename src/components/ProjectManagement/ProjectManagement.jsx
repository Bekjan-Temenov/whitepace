import React from "react";
import Container from "../../shared/container/Container";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProjectManagement = () => {
  return (
    <div className="relative  bg-white">
      <div className="">
        <img
          src="/whitepace/img/BACKGROUND.png"
          className="absolute top-[30%] right-[180px] md:top-[50%] md:left-[-15%] translate-y-[-50%] h-auto w-auto  z-0"
          alt="img"
        />
      </div>
      <Container>
        <section className="relative w-full py-[80px] md:py-[100px]   flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 z-50 flex flex-col items-center md:items-start   mb-8 md:mb-0">
            <h1 className="md:text-6xl text-[36px] text-center  flex flex-col  text-[#212529] justify-end  font-bold leading-tight mb-4">
              <span>Project</span>
              <span className="relative">
                <img
                  className="absolute z-0 md:h-auto h-[40px] bottom-[-19px]"
                  src="/whitepace/img/Vector.png"
                  alt=""
                />
                <p className="relative z-50">Management</p>
              </span>
            </h1>
            <p className="text-[#212529] text-center text-[18px] w-full font-normal mb-6 ">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
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
              Get Started
            </Button>
          </div>

          <div className="md:w-1/2 w-[288px] z-50  h-[214px] md:h-[400px] bg-[#C4DEFD] "></div>
        </section>
      </Container>
    </div>
  );
};

export default ProjectManagement;
