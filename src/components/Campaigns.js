import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Banners from "api/banner.json";

const Campaigns = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto md:pt-8 overflow-x-hidden">
      <h3 className="hidden md:block text-sm font-semibold mb-3">Promotions</h3>
      <Slider className="-mx-2" {...settings}>
        {banners &&
          banners.map((banner) => (
            <div key={banner.id} className="px-2">
              <img src={banner.image} className="md:rounded-lg" />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
