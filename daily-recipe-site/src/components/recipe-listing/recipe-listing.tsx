import React from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { StyledRecipeListing } from "./recipe-listing.style";

export default function RecipeListing() {
  const recipe = [
    {
      img: "https://asmpa.selise.cloud/1684232549_5b3e51d66abb0db6c4df55fd49106c_recipe_1.jpeg",
      alt: "pasta",
      name: "Italian Pasta",
      author: "Author: Higgins",
      likes: "12.5k",
    },
    {
      img: "https://asmpa.selise.cloud/1684232549_220d6dbbdc70661bc2e2dca74952e5_recipe_2.jpeg",
      alt: "spaghetti",
      name: "Spaghetti",
      author: "Author: Sarah",
      likes: "12k",
    },
    {
      img: "https://asmpa.selise.cloud/1684232549_3dd0d0f108f4d03cde503783924393_recipe_3.jpeg",
      alt: "ceasar Salad",
      name: "Ceasar Salad",
      author: "Author: Marcus",
      likes: "11.7k",
    },
  ];

  return (
    <StyledRecipeListing>
      <div className="w-[100%] relative">
        <div className="w-[100%] xs:w-[60%] md:w-[70%] lg:w-[75%] mx-auto px-[16px] md:px-0 relative z-[2]">
          <div className="flex justify-start md:justify-between items-center mb-[16px] md:mb-[20px]">
            <h3>Popular Recipes of the week</h3>
            <button className="show-more-btn custom-btn btn btn--transparent hidden lg:flex justify-center items-center">
              Show more
              <ArrowSmallRightIcon className="show-more-btn__icon custom-btn__icon w-[28px] ml-[12px]" />
            </button>
          </div>
          <div className="recipe-lists flex flex-row gap-x-[20px] items-center pb-[10px]">
            {recipe.map((recipe) => (
              <div className="recipe-card md:max-w-[410px] md:min-w-[350px] rounded-[16px] cursor-pointer">
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
                    <button className="rotate-btn btn btn-outline-primary--100 flex justify-center items-center gap-x-[4px]">
                      {recipe.likes}
                      <HandThumbUpIcon className="rotate-btn__icon w-[20px] lg:w-[20px] ml-[4px]" />
                    </button>
                    <button className="custom-btn btn btn--primary flex justify-between items-center gap-x-[12px] w-[100%]">
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
          src="https://asmpa.selise.cloud/1684302065_73f06b4500f0ec305190784c2f0e04_pasta_1.png"
          alt="pasta"
          className="w-[200px] lg:w-[320px] absolute right-0 top-[250px] lg:top-[320px] !opacity-[0.4]"
        />
      </div>
    </StyledRecipeListing>
  );
}
