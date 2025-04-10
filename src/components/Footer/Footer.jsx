import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageIcon from "@mui/icons-material/Language";
import Whitepace from "./Whitepace";
import Container from "../../shared/container/Container";

const Footer = () => {
  return (
    <div className="flex w-full text-white items-center py-[50px] lg:py-[100px] flex-col gap-[100px] lg:gap-[162px]">
      <Whitepace />

      <Container>
        <div className="grid items-center justify-center grid-cols-1 gap-8 mb-12 lg:grid-cols-5">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center mb-4">
              <img src="/whitepace/svg/logo.svg" alt="Whitepace Icon" className="mr-2 " />
            </div>
            <p className="text-sm text-center text-gray-300 sm:text-start">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h4 className="mb-4 text-lg font-bold ">Product</h4>
            <ul className="space-y-3 text-center sm:text-start ">
              <li>
                <a
                  href="#"
                  className="text-sm  hover:underline hover:text-[#FFE492]"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:underline hover:text-[#FFE492]"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:underline hover:text-[#FFE492]"
                >
                  Customer stories
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h4 className="mb-4 text-lg font-bold">Resources</h4>
            <ul className="space-y-3 text-center sm:text-start ">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:underline hover:text-[#FFE492]"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:underline hover:text-[#FFE492]"
                >
                  Guides & tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:underline hover:text-[#FFE492]"
                >
                  Help center
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h4 className="mb-4 text-lg font-bold">Company</h4>
            <ul className="space-y-3 text-center sm:text-start ">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:underline hover:text-[#FFE492]"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:underline hover:text-[#FFE492]"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:underline hover:text-[#FFE492]"
                >
                  Media kit
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center sm:items-start">
            <h4 className="mb-4 text-lg font-bold">Try It Today</h4>
            <p className="mb-4 text-sm text-center text-gray-300 sm:text-start">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: "#60A5FA",
                color: "#ffffff",
                textTransform: "none",
                fontWeight: "600",
                padding: "10px 20px",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#3B82F6",
                },
              }}
            >
              Start today
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-6 border-t border-gray-700 lg:flex-row lg:justify-between">
  <div className="flex flex-col items-center gap-[20px] justify-between w-full text-sm text-gray-300  sm:flex-row lg:space-y-0 lg:space-x-6">
    <div className="flex items-center space-x-2">
      <LanguageIcon className="mr-2" />
      <select name="" id="" className="text-sm text-gray-300 bg-transparent border-none focus:outline-none">
        <option value="">English</option>
        <option value="">Русский</option>
        <option value="">Кыргызский</option>
      </select>
    </div>
    <div className="flex flex-col md:flex-row gap-[20px]">
      <a href="#" className="hover:underline hover:text-[#FFE492]">Terms & privacy</a>
      <a href="#" className="hover:underline hover:text-[#FFE492]">Security</a>
      <a href="#" className="hover:underline hover:text-[#FFE492]">Status</a>
    </div>
    <span className="text-sm text-gray-300">©2021 Whitepace LLC.</span>
  </div>

  <div className="flex items-center mt-4 space-x-4 lg:mt-0"> 
    <a href="#" aria-label="Facebook"> 
      <img className="text-gray-300 hover:text-white" src="/whitepace/svg/facebook.svg" alt="Facebook" />
    </a>
    <a href="#" aria-label="Twitter">
      <img className="text-gray-300 hover:text-white" src="/whitepace/svg/twitter.svg" alt="Twitter" />
    </a>
    <a href="#" aria-label="LinkedIn">
      <img className="text-gray-300 hover:text-white" src="/whitepace/svg/kinkedin.svg" alt="LinkedIn" />
    </a>
  </div>
</div>

      </Container>
    </div>
  );
};

export default Footer;
