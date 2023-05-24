import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/20/solid';
import { StyledHeroSection } from './hero-section.style';

export default function HeroSection() {

    return (
        <StyledHeroSection>
            <div className="hero text-center flex flex-col w-[100%] md:w-[75%] xl:w-[50%] py-[40px] px-[16px] lg:px-0 items-center text-white">
                <h1 className="hero-title text-[40px] lg:text-[80px] font-black"  data-aos="fade-up" data-aos-duration="1000">Delight your taste buds with us</h1>
                <p className="hero-description my-[16px] text-[16px] md:text-[24px] lg:px-[40px]" data-aos="fade-up" data-aos-duration="1300">
                    Discover delicious recipes for any dish, from appetizers to desserts, on this website!
                </p>
                <div className="flex gap-y-[40px] flex-col items-center justify-center w-[100%]">
                    <button className="btn-primary" data-aos="fade-up" data-aos-duration="1600">Get Started</button>
                    {/*<div className="border-all-white animate-bounce p-[12px] rounded-[100%] flex justify-center items-center"*/}
                    {/*     data-aos="fade-up" data-aos-duration="2000">*/}
                    {/*    <ArrowDownIcon className="w-[40px] text-white" />*/}
                    {/*</div>*/}
                </div>
            </div>
            {/*<div className="flex flex-col-reverse md:flex-row items-center md:justify-between md:items-center w-[100%] py-[40px] px-[16px] md:px-[120px]">*/}
            {/*    <div className="flex flex-col justify-center md:justify-start gap-y-[16px] w-[100%] md:w-[55%]">*/}
            {/*        <h1 className="hero-title text-[40px] lg:text-[70px] text-center md:text-start" data-aos="fade-up" data-aos-duration="1000">Delight your taste buds with us</h1>*/}
            {/*        <p className="hero-description text-[16px] md:text-[24px] text-center md:text-start lg:w-[80%]" data-aos="fade-up" data-aos-duration="1300">*/}
            {/*            Discover delicious recipes for any dish, from appetizers to desserts, on this website!*/}
            {/*        </p>*/}
            {/*        <div className="flex gap-y-[40px] flex-col items-center md:items-start md:justify-center">*/}
            {/*            <button className="btn-primary" data-aos="fade-up" data-aos-duration="1600">Get Started</button>*/}
            {/*            /!*<div className="border-all-white animate-bounce p-[12px] rounded-[100%] flex justify-center items-center"*!/*/}
            {/*            /!*     data-aos="fade-up" data-aos-duration="2000">*!/*/}
            {/*            /!*    <ArrowDownIcon className="w-[40px] text-white" />*!/*/}
            {/*            /!*</div>*!/*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <img src="https://asmpa.selise.cloud/1684841521_7458d665fa047c0805409b99a7c221_hero.png" alt="hero" className="w-[80%] md:w-[40%]"*/}
            {/*         data-aos="fade-in" data-aos-duration="1300"/>*/}
            {/*</div>*/}
        </StyledHeroSection>
    );
}
