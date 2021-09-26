import React from "react";

const Card = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg",
      title: "A promotion for every order",
      description: "At Getir, you can find a promotion for every order.",
    },
    {
      id: 2,
      image:
        "https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg",
      title: "At your door in minutes",
      description: "Your order is at your door in minutes with Getir.",
    },
    {
      id: 3,
      image:
        "https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg",
      title: "Thousand kinds of happines",
      description: "At Getir, you can choose from thousands of varieties.",
    },
  ];

  return (
    <div className="flex gap-x-3 mt-7 items-center justify-center">
      {cards.length &&
        cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center justify-center p-16 bg-white rounded text-center  shadow-sm"
          >
            <img src={card.image} className="mb-6" />
            <h3 className="font-semibold text-lg text-primary-brand-color mb-2">
              {card.title}
            </h3>
            <p className="text-gray-500">{card.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Card;
