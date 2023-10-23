import React from "react";
import {
  ArrowSmallRightIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/20/solid";
import { StyledLanding } from "./landing.style";
import HeroSection from "../hero-section/hero-section";
import RecipeListing from "../recipe-listing/recipe-listing";
import FollowerRecipeList from "../following/follower-recipe-list";

export default function Landing() {
  return (
    <StyledLanding>
      <HeroSection />
      <div
        className="banner flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center
             px-[16px] pt-[40px] pb-0 md:p-[40px] md:pb-[40px] mt-0 mb-[40px] lg:mt-[80px] lg:mb-[80px] w-[100%] lg:w-[75%] mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-[100%] sm:w-[80%] md:w-[50%] flex flex-col items-center md:items-start text-white">
          <h3 data-aos="fade-up" data-aos-duration="1000">
            Food of the week
          </h3>
          <p
            className="md:text-[24px] text-center md:text-start my-[16px]"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            <span className="font-medium">Paneer tikka</span> is a popular
            indian appetizer made with marinated chunks of paneer cheese grilled
            to perfection and seasoned with spices.
          </p>
          <button
            className="btn btn--white custom-btn flex items-center mb-[26px] md:mb-0"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            Checkout Recipe
            <ArrowSmallRightIcon className="custom-btn__icon w-[22px] lg:w-[28px] ml-[12px]" />
          </button>
        </div>
        <img
          src="https://asmpa.selise.cloud/1683473100_e95291876f5e82ed0399775ce97afc_paneer-tikka-masala1(1).png"
          alt="food of the week"
          className="hidden md:block w-[100%] md:w-[45%]"
          data-aos="zoom-in-left"
          data-aos-duration="1500"
        />
        <img
          src="https://asmpa.selise.cloud/1683474496_fa58c035602acc67cfb9c0dfa0c686_paneer-tikka-masala-half(1).png"
          alt="food of the week"
          className="block md:hidden w-[100%] md:w-[45%]"
        />
      </div>
      <RecipeListing />
      <div
        className="health flex flex-col lg:flex-row justify-center md:justify-between items-center
            w-[100%] xs:w-[60%] md:w-[70%] lg:w-[75%] mx-auto my-[40px] lg:my-[80px] py-[40px] px-[20px] lg:py-[40px] lg:pl-[40px] lg:pr-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-[100%] lg:w-[45%] text-center lg:text-start">
          <h3 data-aos="fade-up" data-aos-duration="100">
            Healthy Food Recipes
          </h3>
          <p
            className="lg:text-[24px] my-[16px]"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            We also feature a diverse range of healthy recipes that cater to
            various dietary needs and preferences. From vegan to gluten-free,
            these nutritious dishes are perfect for those seeking a healthier
            lifestyle.
          </p>
          <button
            className="btn btn--primary mx-auto md:mx-0"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            Explore more
          </button>
        </div>
        <img
          src="https://asmpa.selise.cloud/1684315515_41373f48bca4867735541719e1b7f5_happy.png"
          alt="healthy"
          className="hidden lg:block lg:w-[47%]"
          data-aos="fade-left"
          data-aos-duration="1500"
        />
      </div>
      <FollowerRecipeList />
      <div className="flex justify-between items-center w-[100%] xs:w-[60%] md:w-[70%] lg:w-[80%] mx-auto my-[40px] lg:my-[80px] py-[40px] px-[20px] lg:py-[40px] lg:pl-[40px] lg:pr-0">
        <div className="w-[40%]" data-aos="fade-up" data-aos-duration="1000">
          <h3 className="mb-[16px]">About Us</h3>
          <p className="text-[24px]">
            Discover a wide range of delicious and diverse recipes on our
            platform, and share your own culinary creations with our community.
            Join us in exploring the world of food!
          </p>
        </div>
        <img
          src="https://asmpa.selise.cloud/1697798153_b5be473ae6de6e26b0cadfd7e4172e_Sushicook-bro1.png"
          alt="sushiCook"
          className="w-[40%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
    </StyledLanding>
  );
}
