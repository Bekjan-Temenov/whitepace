import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Container from "../shared/container/Container";

const Worktogether = () => {
  return (
    <div className="bg-white">
      <Container>
        <section className="relative py-[80px]  w-full md:py-[100px]   flex flex-col lg:flex-row items-center justify-center gap-[60px]">
          <div className="z-50 hidden lg:w-1/2 lg:block ">
            <img src="/whitepace/img/Work Together Image.png" alt="" />
          </div>
          <div className="z-50 flex flex-col items-center mx-auto mb-8 lg:w-1/2 lg:items-start md:mb-0">
            <h1 className="md:text-6xl text-[36px] gap-3    flex items-center text-[#212529] justify-center  font-bold leading-tight mb-4">
              <span>Work </span>
              <span className="relative">
                <img
                  className="absolute z-0 bottom-[-8px]"
                  src="/whitepace/img/Vector.png"
                  alt=""
                />
                <p className="relative z-50">together</p>
              </span>
            </h1>
            <p className="text-[#212529] text-center lg:text-start text-[18px] w-full      font-normal mb-6 ">
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
          <div className="z-50 block lg:hidden ">
            <img src="/whitepace/img/Work Together Image.png" alt="" />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Worktogether;
