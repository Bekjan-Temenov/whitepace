import React, { useState } from 'react';
import { Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '../../shared/container/Container';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const isMobile = useMediaQuery('(max-width: 768px)'); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Resources', path: '/resources' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <Container>
      <header className="w-full py-4 flex items-center justify-between bg-[#043873]">
        
        <div className="flex items-center">
          <Link to="/">
            <img src="/svg/logo.svg" alt="Whitepace Logo" className="h-8 mr-2" />
          </Link>
        </div>
        {!isMobile && (
          <>
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="flex items-center">
                  <Link to={item.path} className="text-white text-base hover:text-gray-300">
                    {item.name}
                  </Link>
                  <ArrowDropDownIcon className="text-white ml-1" fontSize="small" />
                </div>
              ))}
            </nav>

            <div className="flex gap-[24px]">
              <button
                className="bg-[#FFE492] text-[#043873] font-[600] cursor-pointer px-[40px] hover:bg-[#FFB300]"
                style={{
                  borderRadius: '8px',
                  padding: '8px 16px',
                }}
              >
                Login
              </button>
              <Button
                variant="contained"
                className="bg-[#4A90E2] font-[600] text-white hover:bg-[#3A80D2]"
                sx={{
                  borderRadius: '8px',
                  padding: '8px 16px',
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Try Whitepace free
              </Button>
            </div>
          </>
        )}

        {isMobile && (
          <div className="flex items-center">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <CloseIcon className="text-white" fontSize="large" />
              ) : (
                <MenuIcon className="text-white" fontSize="large" />
              )}
            </button>
          </div>
        )}

        {isMobile && isMenuOpen && (
          <div className="absolute top-[64px] left-0 w-full py-[50px] bg-[#043873] flex flex-col items-center border-b border-[#034b9d] rounded-b-[20px] z-50">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white text-base py-2 hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)} 
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="bg-[#FFE492] text-[#043873] font-[600] cursor-pointer px-[40px] my-2 hover:bg-[#FFB300]"
              style={{
                borderRadius: '8px',
                padding: '8px 16px',
              }}
            >
              Login
            </button>
            <Button
              variant="contained"
              className="bg-[#4A90E2] font-[600] text-white hover:bg-[#3A80D2] my-2"
              sx={{
                borderRadius: '8px',
                padding: '8px 16px',
              }}
              endIcon={<ArrowForwardIcon />}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Try Whitepace free
            </Button>
          </div>
        )}
      </header>
    </Container>
  );
};

export default Header;