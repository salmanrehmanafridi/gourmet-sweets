import client1 from "../assets/client1.svg";
import client2 from "../assets/client2.svg";
import client3 from "../assets/client3.svg";
import Icon from "../assets/icon.svg";
import { FaStar } from "react-icons/fa6";
export default function OurClientSay() {
  const array = [
    {
      image: <img src={client1} alt="no-image" />,
      name: "Michal Gun",
      designation: "Head of sales at Tesla ",
      content:
        "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable",
    },
    {
      image: <img src={client2} alt="no-image" />,
      name: "Aleena White",
      designation: "Accountant of Ozone",
      content:
        "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable",
    },
    {
      image: <img src={client3} alt="no-image" />,
      name: "Cries Lee",
      designation: "CEO Of Montee",
      content:
        "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable",
    },
  ];
  return (
    <div className="bg-client-bg bg-cover bg-center w-full  py-10 px-6 md:p-10 bg-no-repeat">
      <h3 className="text-center font-inter font-bold text-white  text-4xl md:text-5xl">
        What Our Clients Are Saying
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
        {array.map((item, index) => (
          <div className="bg-[#0E0E0E] p-10 rounded-lg " key={index}>
            <div className="flex gap-4 items-center">
              <div>{item.image}</div>
              <div className="flex flex-col">
                <h3 className="text-white font-inter font-bold text-lg">
                  {item.name}
                </h3>
                <h3 className="text-white font-inter font-normal text-sm">
                  {item.designation}
                </h3>
                <div className="flex gap-1">
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                </div>
              </div>
            </div>

            <img src={Icon} alt="no-icon" className="my-4" />
            <p className="text-white font-inter font-normal text-base">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
