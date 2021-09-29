import React from "react";
import FooterMenu from "./ui/FooterMenu";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

const Footer = () => {
  const menus = [
    {
      title: "Discover Getir",
      items: [
        {
          title: "About Us",
        },
        {
          title: "Careers",
        },
        {
          title: "Contact Us",
        },
        {
          title: "COVID-19 Announcement",
        },
        {
          title: "Social Responsibility Projects",
        },
      ],
    },
    {
      title: "Need help?",
      items: [
        {
          title: "About Us",
        },
        {
          title: "Careers",
        },
        {
          title: "Contact Us",
        },
        {
          title: "COVID-19 Announcement",
        },
        {
          title: "Social Responsibility Projects",
        },
      ],
    },
    {
      title: "Become Our Business Partner",
      items: [
        {
          title: "About Us",
        },
        {
          title: "Careers",
        },
        {
          title: "Contact Us",
        },
        {
          title: "COVID-19 Announcement",
        },
        {
          title: "Social Responsibility Projects",
        },
      ],
    },
  ];

  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-6 pt-10">
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color">
                Download Getir!
              </h6>
              <a href="#" className="transition-all hover:scale-105 w-40">
                <img src="https://getir.com/_next/static/images/appstore-en-c661eed8e5955c0a422054a9021698ce.svg" />
              </a>
              <a href="#" className="transition-all hover:scale-105 w-40">
                <img src="https://getir.com/_next/static/images/googleplay-en-46ff50211cf4b7b1c29309f3526af930.svg" />
              </a>
              <a href="#" className="transition-all hover:scale-105 w-40">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-en-aed8ae3ea827fedc197b350496164d3f.svg" />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <FooterMenu key={index} {...menu} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-200 mt-6 py-6">
          <div className="text-xs text-gray-700 flex flex-col items-center gap-y-2 md:flex-row gap-x-8">
            © 2021 Getir
            <a href="#" className="text-brand-color hover:underline">
              {" "}
              Information Society Services
            </a>
          </div>
          <nav className="flex gap-x-3">
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center hover:text-primary-brand-color "
            >
              <FaFacebook size={21} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center hover:text-primary-brand-color "
            >
              <FaTwitter size={21} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center hover:text-primary-brand-color "
            >
              <FaInstagram size={21} />
            </a>
            <a
              href="#"
              className="h-8 flex items-center px-2 border border-gray-100 text-sm gap-x-2 rounded text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color"
            >
              <BiGlobe size={19} />
              English (EN)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
