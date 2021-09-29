import React from "react";

const MobileApp = () => {
  return (
    <div className="bg-primary-brand-color flex flex-col md:flex-row justify-between items-center bg-mobile-app  mt-7 md:rounded-lg text-white">
      <div className="flex flex-col gap-y-3 p-10">
        <h3 className="font-bold text-2xl tracking-tight">Download Getir!</h3>
        <p className="text-base font-semibold max-w-xs">
          Let us deliver your order to your door in minutes.
        </p>
        <nav className="mt-5 flex flex-wrap md:flex-nowrap justify-center gap-2">
          <a href="#" className="transition-all hover:scale-105">
            <img src="https://getir.com/_next/static/images/appstore-en-c661eed8e5955c0a422054a9021698ce.svg" />
          </a>
          <a href="#" className="transition-all hover:scale-105">
            <img src="https://getir.com/_next/static/images/googleplay-en-46ff50211cf4b7b1c29309f3526af930.svg" />
          </a>
          <a href="#" className="transition-all hover:scale-105">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-en-aed8ae3ea827fedc197b350496164d3f.svg" />
          </a>
        </nav>
      </div>
      <picture className="pt-6 hidden md:block md:self-end">
        <img src="https://getir.com/_next/static/images/phoneLandingEn-5e918947c1bcf3088c762a1b52c89c7d.png" />
      </picture>
    </div>
  );
};

export default MobileApp;
