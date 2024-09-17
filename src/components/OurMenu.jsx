import React from "react";
import menu1 from "../assets/menu1.svg"; // Import as URL
import menu2 from "../assets/menu2.svg"; // Import as URL
import menu3 from "../assets/menu3.svg";
export default function OurMenu() {
  const menuItems = [
    {
      title: "Signature Dishes",
      content:
        "From succulent steaks and fresh seafood to vegan and vegetarian delights, explore a diverse array of cuisines crafted to perfection.",
      image: <img src={menu1} alt="Desserts" />,
    },
    {
      title: "Delicious Desserts",
      content:
        "Dive into Brooklyn’s best-known sweets – cheesecakes, cupcakes, artisan chocolates, and more – that will satisfy your sweet tooth.",
      image: <img src={menu2} alt="Desserts" />,
    },
    {
      title: "Seasonal Specials",
      content:
        "Our menu changes with the seasons, ensuring fresh and exciting new flavors every time you visit.",
      image: <img src={menu3} alt="Desserts" />,
    },
  ];
  return (
    <div className="bg-menu-bg bg-cover bg-no-repeat bg-center p-10">
      <h2 className="font-inter font-bold text-white text-5xl text-center">Our Menu Highlights</h2>
      <p className="font-inter font-normal text-white text-xl text-center my-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been <br />  the industry's standard dummy text ever. Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 md:px-28 gap-10">
        {menuItems?.map((item, index) => (
          <div
            key={index}
            className="bg-[#0E0E0E] p-5 rounded-lg"
          >
            <div className="h-64 w-full flex">{item.image}</div>
            <div>
              <h4 className="font-inter font-bold text-white text-2xl">{item.title}</h4>
              <p className="font-inter font-normal text-white text-base pt-3">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
