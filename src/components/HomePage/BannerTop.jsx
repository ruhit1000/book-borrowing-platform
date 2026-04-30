import React from "react";
import Marquee from "react-fast-marquee";

const BannerTop = () => {
  const news = [
    {
      id: 1,
      title: "New Arrivals: The Silent Patient",
    },
    {
      id: 2,
      title: "Special Discount on Memberships!",
    },
    {
      id: 3,
      title: "New Arrivals: Atomic Habits",
    },
    {
      id: 4,
      title: "Explore Our Tech Collection Today",
    },
  ];
  return (
    <div className="bg-base-300 py-3 px-1">
      <Marquee className="font-semibold text-base-content text-lg">
        {
            news.map((item) => (
                <span key={item.id} className="mx-6">
                    {item.title}
                </span>
            ))
        }
      </Marquee>
    </div>
  );
};

export default BannerTop;
