import { Button } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Whitepace = () => {
  return (
    <div className="flex text-white  px-[16px] flex-col items-center gap-[24px] w-full lg:w-[30%] md:w-[90%]">
      <h1 className="md:text-[72px] text-[40px] font-[700] text-center">
        Try Whitepace today
      </h1>
      <p className="text-center text-[18px] md:text-[24px] font-[400]">
        Get started for free. Add your whole team as your needs grow.
      </p>
      <Button
        variant="contained"
        className="bg-[#4A90E2] w-[70%]  text-[#FFFFFF] hover:bg-[#3A80D2]"
        sx={{
          textTransform: "none",
          fontWeight: "medium",
          borderRadius: "8px",
          padding: "12px 24px",
          fontSize: "16px",
        }}
        endIcon={<ArrowForwardIcon />}
      >
        Try Taskey free
      </Button>
      <span className="font-[400] text-[18px] md:text-[24px] sm:text-center text-start">On a big team? Contact sales</span>
      <div className="flex items-center gap-[40px] justify-center">
        <img className="w-[35px] h-[35px] md:w-auto md:h-auto" src="/whitepace/svg/apple1.svg" alt="apple" />
        <img className="w-[35px] h-[35px] md:w-auto md:h-auto" src="/whitepace/svg/windows1.svg" alt="windows" />
        <img className="w-[35px] h-[35px] md:w-auto md:h-auto" src="/whitepace/svg/android1.svg" alt="android" />
      </div>
    </div>
  );
};

export default Whitepace;
