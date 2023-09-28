import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { StyledNavBar } from "./nav-bar.style";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const toggleNavigation = () => {
    setOpenNav(!openNav);
  };

  const toggleDropdown = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledNavBar>
      <nav className="nav bg-gray-100 flex justify-between items-center w-[100%] p-[16px] md:px-[80px] md:py-[20px]">
        <img
          src="https://asmpa.selise.cloud/1682421551_139b99d1ca82f35bcb909a8e289c84_DailyRecipes.png"
          alt="logo"
          width="120"
          height="28"
          className="md:hidden cursor-pointer"
        />
        <img
          src="https://asmpa.selise.cloud/1682421551_139b99d1ca82f35bcb909a8e289c84_DailyRecipes.png"
          alt="logo"
          width="200"
          height="44"
          className="hidden md:block cursor-pointer"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
        />
        <div
          className="relative w-[20%] hidden lg:flex items-center"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <input
            type="text"
            className="w-[100%] px-[16px] py-[8px] rounded-[4px] hidden lg:block bg-transparent border-[1px] border-primary-100 focus:border-primary-500"
            placeholder="Search"
          />
          <MagnifyingGlassIcon className="w-[20px] text-primary-500 absolute right-[16px] cursor-pointer" />
        </div>
        <ul
          className="hidden md:flex items-center gap-x-[30px]"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <li className="cursor-pointer font-medium text-[16px] hover:text-primary-500">
            Home
          </li>
          <li className="cursor-pointer font-medium text-[16px] hover:text-primary-500">
            Recipes
          </li>
          <li className="cursor-pointer font-medium text-[16px] hover:text-primary-500">
            About us
          </li>
          <li className="relative">
            <button
              className="nav__dropdown--button flex items-center gap-x-[12px] hover:text-primary-500 cursor-pointer font-medium text-[16px]"
              onClick={toggleDropdown}
            >
              Sort
              <ChevronDownIcon className="text-gray-500 font-bold w-[20px]" />
            </button>
            {showMenu ? (
              <div
                className="nav__dropdown-container rounded-[8px] py-[8px] absolute bg-white"
                data-aos="fade-in"
              >
                <li className="nav__dropdown-container--list cursor-pointer px-[16px] py-[8px] flex items-center">
                  <input
                    type="checkbox"
                    className="mr-[20px] accent-primary-500"
                  />
                  All
                </li>
                <li className="nav__dropdown-container--list cursor-pointer px-[16px] py-[8px] flex items-center">
                  <input
                    type="checkbox"
                    className="mr-[20px] accent-primary-500"
                  />
                  Vegetarian
                </li>
                <li className="nav__dropdown-container--list cursor-pointer px-[16px] py-[8px] flex items-center">
                  <input
                    type="checkbox"
                    className="mr-[20px] accent-primary-500"
                  />
                  Non-Vegetarian
                </li>
                <li className="nav__dropdown-container--list cursor-pointer px-[16px] py-[8px] flex items-center">
                  <input
                    type="checkbox"
                    className="mr-[20px] accent-primary-500"
                  />
                  Most Liked
                </li>
              </div>
            ) : null}
          </li>
          <li>
            <button className="btn-outline-primary flex justify-center items-center gap-x-[12px]">
              Login
              <ArrowLeftOnRectangleIcon className="w-[24px]" />
            </button>
          </li>
        </ul>
        {openNav ? (
          <div className="flex justify-end items-center gap-x-[10px] md:hidden">
            <button className="btn-outline-primary flex justify-center items-center gap-x-[12px] md:hidden">
              Login
              <ArrowLeftOnRectangleIcon className="w-[18px] lg:w-[24px]" />
            </button>
            <div
              className="p-[8px] border-[1px] border-primary-100 rounded-[4px] hover:bg-primary-100 hover:border-primary-500 cursor-pointer"
              onClick={toggleNavigation}
            >
              <XMarkIcon
                className="h-[22px] w-[22px] cursor-pointer text-primary-500"
                aria-hidden="true"
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-end items-center gap-x-[10px] md:hidden">
            <button className="btn-outline-primary flex justify-center items-center gap-x-[12px] md:hidden">
              Login
              <ArrowLeftOnRectangleIcon className="w-[18px] lg:w-[24px]" />
            </button>
            <div
              className="p-[8px] border-[1px] border-primary-100 rounded-[4px] hover:bg-primary-100 hover:border-primary-500 cursor-pointer"
              onClick={toggleNavigation}
            >
              <Bars3Icon
                className="h-[22px] w-[22px] text-primary-500"
                aria-hidden="true"
              />
            </div>
          </div>
        )}
      </nav>
      {openNav ? (
        <div
          className="block md:hidden absolute w-[100%] bg-gray-100 p-[12px]"
          data-aos="fade-down"
          data-aos-anchor-placement="bottom-bottom"
        >
          <li className="cursor-pointer text-md px-[16px] py-[12px] list-none nav__dropdown-container--list rounded-[4px]">
            Home
          </li>
          <li className="cursor-pointer text-md px-[16px] py-[12px] list-none nav__dropdown-container--list rounded-[4px]">
            Recipes
          </li>
          <li className="cursor-pointer text-md px-[16px] py-[12px] list-none nav__dropdown-container--list rounded-[4px]">
            About us
          </li>
        </div>
      ) : null}
    </StyledNavBar>
  );
}
