import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageIcon from "@mui/icons-material/Language";
import Whitepace from "./Whitepace";
import Container from "../../shared/container/Container";

const Footer = () => {
  return (
    <div className="flex w-full text-white items-center py-[50px] md:py-[100px] flex-col gap-[100px] md:gap-[162px]">
      <Whitepace />

      <Container>
        <div className="grid grid-cols-1 items-center justify-center  md:grid-cols-5 gap-8 mb-12">
          <div className="flex  flex-col items-center  sm:items-start">
            <div className="flex items-center  mb-4">
              <img src="/svg/logo.svg" alt="Whitepace Icon" className=" mr-2" />
            </div>
            <p className="text-sm text-center sm:text-start  text-gray-300">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>

          <div className="flex  flex-col items-center  sm:items-start">
            <h4 className="text-lg font-bold mb-4 ">Product</h4>
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

          <div className="flex  flex-col items-center  sm:items-start">
            <h4 className="text-lg font-bold mb-4">Resources</h4>
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

          {/* Column 4: Company */}
          <div className="flex  flex-col items-center  sm:items-start">
            <h4 className="text-lg font-bold mb-4">Company</h4>
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

          {/* Column 5: Try It Today */}
          <div className=" flex items-center justify-center flex-col  sm:items-start">
            <h4 className="text-lg font-bold mb-4">Try It Today</h4>
            <p className="text-sm text-center sm:text-start  text-gray-300 mb-4">
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

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center  w-full space-y-4 md:space-y-0 md:space-x-6 text-sm text-gray-300">
            <div className="flex items-center">
              <LanguageIcon className="mr-2" />
              <select name="" id="">
                <option value="">English</option>
                <option value="">Русский</option>
                <option value="">Кыргызский</option>
              </select>
            </div>
            <a href="#" className="hover:underline hover:text-[#FFE492]">
              Terms & privacy
            </a>
            <a href="#" className="hover:underline hover:text-[#FFE492]">
              Security
            </a>
            <a href="#" className="hover:underline hover:text-[#FFE492]">
              Status
            </a>
            <span className="text-sm text-gray-300">©2021 Whitepace LLC.</span>
          </div>

          <div className="flex items-center  space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook">
              <img
                className="text-gray-300 hover:text-white"
                src="/svg/facebook.svg"
                alt=""
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                className="text-gray-300 hover:text-white"
                src="/svg/twitter.svg"
                alt=""
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                className="text-gray-300 hover:text-white"
                src="/svg/kinkedin.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
