import React from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { StyledFollowerRecipeList } from "./follower-recipe-list.style";

export default function FollowerRecipeList() {
  const recipe = [
    {
      img: "https://asmpa.selise.cloud/1684496723_d8f9cbe7fa7682fc70644f44bc7543_chole_bhatura.jpeg",
      alt: "bhole bhature",
      name: "Chole Bhature",
      author: "Author: Higgins",
      likes: "12.5k",
    },
    {
      img: "https://asmpa.selise.cloud/1684496723_a55ecd876826f0b98df92228b2c9c6_chicken_chowmein.jpeg",
      alt: "chicken chowmein",
      name: "Chicken Chowmein",
      author: "Author: Sarah",
      likes: "12k",
    },
    {
      img: "https://asmpa.selise.cloud/1684496723_675bd18b516d3c51d567592e6a48a1_potato_wedges.jpeg",
      alt: "potato wedges",
      name: "Potato Wedges",
      author: "Author: Marcus",
      likes: "11.7k",
    },
  ];

  return (
    <StyledFollowerRecipeList>
      <div className="w-[100%] relative">
        <div className="w-[100%] xs:w-[60%] md:w-[70%] lg:w-[75%] mx-auto px-[16px] md:px-0 relative z-[2]">
          <div className="flex justify-start md:justify-between items-center mb-[16px] md:mb-[20px]">
            <h3>Recipes from people you follow</h3>
            <button className="show-more-btn custom-btn btn btn--transparent hidden lg:flex justify-center items-center">
              Show more
              <ArrowSmallRightIcon className="show-more-btn__icon custom-btn__icon w-[28px] ml-[12px]" />
            </button>
          </div>
          <div className="recipe-lists flex flex-row gap-x-[20px] items-center pb-[10px]">
            {recipe.map((recipe) => (
              <div className="recipe-card md:max-w-[410px] md:min-w-[350px] rounded-[16px]">
                <img
                  src={recipe.img}
                  alt={recipe.alt}
                  width="100%"
                  className="recipe-card__image md:min-h-[300px] md:max-h-[400px] rounded-t-[16px]"
                />
                <div className="p-[16px] bg-white rounded-b-[16px]">
                  <h4 className="text-[20px]">{recipe.name}</h4>
                  <div className="w-[100%] flex justify-between items-center mt-[8px] mb-[10px]">
                    <p className="text-gray-500">{recipe.author}</p>
                    <a className="text-secondary-500 cursor-pointer hover:underline">
                      Follow
                    </a>
                  </div>
                  <div className="w-[100%] flex items-center justify-center gap-x-[8px]">
                    <button className="btn btn-outline-primary--100 rotate-btn flex justify-center items-center gap-x-[4px]">
                      {recipe.likes}
                      <HandThumbUpIcon className="rotate-btn__icon w-[20px] lg:w-[20px] ml-[4px]" />
                    </button>
                    <button className="btn btn--primary custom-btn flex justify-between items-center gap-x-[12px] w-[100%]">
                      Show Recipe
                      <ArrowSmallRightIcon className="custom-btn__icon w-[22px] lg:w-[26px]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="lg:hidden btn btn--transparent flex justify-center items-center mt-[20px] mx-auto">
            Show more
            <ArrowSmallRightIcon className="w-[28px] ml-[12px]" />
          </button>
        </div>
        <img
          src="https://asmpa.selise.cloud/1684497088_bf7298e23d515e3c8b27e0ba9fcb11_pizza.png"
          alt="pizza"
          className="w-[200px] lg:w-[320px] absolute left-0 top-[290px] lg:top-[350px] !opacity-[0.8]"
        />
      </div>
    </StyledFollowerRecipeList>
  );
}
