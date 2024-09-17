import { useState } from "react";
import Logo from "../assets/logo.svg";
import Button from "../components/Button";
import { IoMdClose, IoMdMenu } from "react-icons/io";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    {
      link: "Welcome",
      href: "/",
    },
    {
      link: "Our menu",
      href: "/",
    },
    {
      link: "Franschise",
      href: "/",
    },
    {
      link: "Contact",
      href: "/",
    },
  ];
  return (
    <>
      <div className="bg-black py-5 hidden md:flex justify-between items-center px-28 sticky top-0 z-10">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul className="flex gap-8">
            {navLinks?.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-white">
                  {item.link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Button
            title="Become a member"
            classname="bg-primary px-6 py-3 rounded-full text-white"
          />
        </div>
      </div>

      <div className="bg-[#0C0F03] p-6 block md:hidden">
        <img src={Logo} alt="no-logo" className="m-auto" />
      </div>

    <div className="relative">
      <div
        className={`transition-all block md:hidden  bg-[#0C0F03] duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100 bg-primary" : "max-h-10  "
        }`}
    // / Adjust height according to content
      >
        <div className={`md:hidden  ${isOpen ? 'bg-primary' : ' bg-[#0C0F03]'} pl-3`}>
        <button
          onClick={toggleMenu}
          // className="text-white"
        >
          {isOpen ? (
            <IoMdClose color="white" size={30} />
          ) : (
            <IoMdMenu color="white" size={30} />
          )}
        </button>
      </div>
        <ul className="pl-4">
          {navLinks?.map((item, index) => (
            <li key={index} className="py-3">
              <a href={item.href} className="text-black font-inter font-normal text-base">
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}
