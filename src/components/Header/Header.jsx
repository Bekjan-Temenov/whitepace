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
  const [openDropdown, setOpenDropdown] = useState(null); // Для управления выпадающим меню
  const isMobile = useMediaQuery('(max-width: 1150px)');


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      name: 'Products',
      path: '/products',
      subItems: ['Product 1', 'Product 2', 'Product 3'], // Пример подменю
    },
    {
      name: 'Solutions',
      path: '/solutions',
      subItems: ['Solution A', 'Solution B'],
    },
    {
      name: 'Resources',
      path: '/resources',
      subItems: ['Guides', 'Blog'],
    },
    { name: 'Pricing', path: '/pricing', subItems: ['Plans', 'Compare'] },
  ];

  return (
    <Container>
      <header className="w-full py-4 flex items-center justify-between bg-[#043873]">
        <div className="flex items-center">
          <Link to="/">
            <img src="/whitepace/svg/logo.svg" alt="Whitepace Logo" className="h-8 mr-2" />
          </Link>
        </div>

        {!isMobile && (
          <>
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative flex items-center group" 
                  onMouseEnter={() => setOpenDropdown(item.name)} 
                  onMouseLeave={() => setOpenDropdown(null)} 
                >
                  <Link to={item.path} className="text-base text-white hover:text-gray-300">
                    {item.name}
                  </Link>
                  <ArrowDropDownIcon className="ml-1 text-white" fontSize="small" />

                  {openDropdown === item.name && item.subItems && (
                    <div className="absolute left-0 w-40 py-2 mt-2 transition-opacity duration-300 bg-white rounded-md shadow-lg opacity-0 top-full group-hover:opacity-100">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem}
                          to={`${item.path}/${subItem.toLowerCase().replace(' ', '-')}`}
                          className="block px-4 py-2 text-sm text-[#043873] hover:bg-[#FFE492]"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex gap-[24px]">
              <button
                className="bg-[#FFE492] text-[#043873] font-[600] cursor-pointer px-[40px] hover:bg-[#FFB300]"
                style={{ borderRadius: '8px', padding: '8px 16px' }}
              >
                Login
              </button>
              <Button
                variant="contained"
                className="bg-[#4A90E2] font-[600] text-white hover:bg-[#3A80D2] group" // Добавляем group для анимации
                sx={{ borderRadius: '8px', padding: '8px 16px' }}
                endIcon={
                  <ArrowForwardIcon
                    className="transition-transform duration-300 group-hover:-translate-x-2" // Анимация влево
                  />
                }
              >
                Try Whitepace free
              </Button>
            </div>
          </>
        )}

        {isMobile && (
          <div className="flex items-center gap-5">
            <div className="md:flex md:items-center md:gap-[24px] hidden md:block">
              <button
                className="bg-[#FFE492] text-[#043873] font-[600] cursor-pointer px-[40px] hover:bg-[#FFB300]"
                style={{ borderRadius: '8px', padding: '8px 16px' }}
              >
                Login
              </button>
              <Button
                variant="contained"
                className="bg-[#4A90E2] font-[600] text-white hover:bg-[#3A80D2] group"
                sx={{ borderRadius: '8px', padding: '8px 16px' }}
                endIcon={
                  <ArrowForwardIcon
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                }
              >
                Try Whitepace free
              </Button>
            </div>
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
              <div key={item.name} className="w-full text-center">
                <Link
                  to={item.path}
                  className="block py-2 text-base text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="flex flex-col">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem}
                        to={`${item.path}/${subItem.toLowerCase().replace(' ', '-')}`}
                        className="py-1 text-sm text-gray-300 hover:text-white"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#FFE492] block md:hidden text-[#043873] font-[600] cursor-pointer px-[40px] my-2 hover:bg-[#FFB300]"
              style={{ borderRadius: '8px', padding: '8px 16px' }}
            >
              Login
            </button>
            <Button
              variant="contained"
              className="bg-[#4A90E2] rounded-[15px] py-4 w-[200px] block md:hidden font-[600] text-white hover:bg-[#3A80D2] my-2 group"
              sx={{ borderRadius: '8px', padding: '8px 16px' }}
              endIcon={
                <ArrowForwardIcon
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              }
              onClick={() => setIsMenuOpen(false)}
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