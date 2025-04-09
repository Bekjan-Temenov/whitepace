import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Container from "../shared/container/Container";

const Worktogether = () => {
  return (
    <div className="bg-white">
      <Container>
        <section className="relative py-[80px]  w-full md:py-[100px]   flex flex-col md:flex-row items-center justify-center gap-2 lg:gap-[50px]">
          <div className="md:w-1/2 z-50  hidden md:block ">
            <img src="/img/Work Together Image.png" alt="" />
          </div>
          <div className="md:w-1/2 z-50  mx-auto flex flex-col items-center md:items-start   mb-8 md:mb-0">
            <h1 className="md:text-6xl text-[36px]    flex items-center text-[#212529] justify-center  font-bold leading-tight mb-4">
              <span>Work </span>
              <span className="relative">
                <img
                  className="absolute z-0 bottom-[-8px]"
                  src="/img/Vector.png"
                  alt=""
                />
                <p className="relative z-50">Together</p>
              </span>
            </h1>
            <p className="text-[#212529] text-center text-[18px] w-full      font-normal mb-6 ">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
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
              Try it now
            </Button>
          </div>
          <div className="md:w-1/2 z-50  block md:hidden ">
            <img src="/img/Work Together Image.png" alt="" />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Worktogether;
