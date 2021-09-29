import React, { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa";
import { useWindowWidth } from "@react-hook/window-size";

const HeroSection = () => {
  const [selected, setSelected] = useState("AZ");
  const windowWidth = useWindowWidth();

  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    AZ: "+994",
    IT: "+7",
    IN: "+15",
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:inset-0 before:h-full before:w-full before:z-10 before:absolute">
      {windowWidth >= 768 && (
        <Slider {...settings}>
          <div className="">
            <img
              className="w-full h-[500px] object-cover"
              src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg"
            />
          </div>
          <div className="">
            <img
              className="w-full h-[500px] object-cover"
              src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            />
          </div>
          <div className="">
            <img
              className="w-full h-[500px] object-cover"
              src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            />
          </div>
          <div className="">
            <img
              className="w-full h-[500px] object-cover"
              src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
            />
          </div>
        </Slider>
      )}
      <div className="md:container flex items-center justify-between relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img src="https://getir.com/_next/static/images/groceriesInMinutes-20f12c15098e8fd2bae874e2a40e343b.svg" />
          <h3 className="text-white font-semibold mt-8 text-4xl">
            At your door in <br /> minutes
          </h3>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h3 className="text-primary-brand-color font-semibold text-center ">
            Login or register
          </h3>
          <div className="grid gap-y-3">
            <div className="flex mt-4 gap-x-2">
              <ReactFlagsSelect
                className="flag_select"
                countries={Object.keys(phones)}
                customLabels={phones}
                placeholder="Select Language"
                selected={selected}
                onSelect={(code) => setSelected(code)}
              />
              <label className="flex-1 relative block">
                <input
                  required
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full text-sm transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer"
                />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-600 transition-all peer-focus:h-6 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-6 peer-valid:text-primary-brand-color peer-valid:text-xs">
                  Mobile Phone
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow w-full h-12 flex items-center justify-center text-center text-sm text-primary-brand-color font-semibold rounded-md  hover:text-brand-yellow hover:bg-brand-color transition-colors">
              Continue with mobile number
            </button>
            <hr className="h-[1px] bg-gray-200 my-2" />
            <button className="bg-blue-100  w-full h-12 px-4 flex items-center text-center text-sm text-blue-700 font-semibold rounded-md  hover:bg-blue-700 hover:text-white transition-colors">
              <FaFacebook size={25} />
              <span className="mx-auto">Continue with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
