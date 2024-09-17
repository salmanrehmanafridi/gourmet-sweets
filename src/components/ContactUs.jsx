import "leaflet/dist/leaflet.css";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import { FaLocationDot } from "react-icons/fa6";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
export default function ContactUs({id}) {
  return (
    <div className="bg-black pb-16" id={id}>
      <div className="flex justify-between">
        <img src={icon1} alt="no-img" className="w-[100px] h-[90px] md:w-[229px] md:h-[206px]"/>
        <img src={icon2} alt="no-img" className="w-[100px] h-[90px] md:w-[229px] md:h-[206px]" />
      </div>
      <div className=" md:-mt-20">
        <h3 className="font-inter text-white font-bold text-4xl md:text-5xl text-center">
          Contact Us
        </h3>
        <p className="font-inter text-white font-normal text-base text-center py-5 px-10 md:px-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard <br /> dummy
          text ever. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-20 mt-10">
        <div className="flex justify-center md:justify-start flex-col items-center md:items-start">
          <div className="bg-primary px-5 py-1 max-w-40">
            <p className="text-white font-normal font-inter text-base">
              Opening Hours
            </p>
          </div>
          <p className="text-white font-normal font-inter text-base py-2">
            Monday - Saturday{" "}
          </p>

          <h3 className="text-primary font-bold text-4xl font-inter">
            Open:24/7
          </h3>

          <div className="flex gap-2 items-center md:flex-row flex-col mt-7">
            <FaLocationDot className="text-primary" size={25} />
            <p className="text-white font-normal font-inter text-base">
              Lorem Ipsum is simply dummy text ABC
            </p>
          </div>
          <a className="flex gap-2 items-center md:flex-row flex-col my-6" href="tel:12345678910">
            <FaPhoneAlt className="text-primary" size={25}/>
            <span className="text-white font-normal font-inter text-base">
            12345678910
            </span>
          </a>
          <a className="flex gap-2 items-center md:flex-row flex-col  no-underline" href="mailto:info@gourmetsweet.com">
            <IoMail className="text-primary" size={25}/>
            <span className="text-white font-normal font-inter text-base">
              info@gourmetsweet.com
            </span>
          </a>
        </div>
        <div className="mt-10 md:mt-0">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                name=""
                id=""
                placeholder="Name"
                className="bg-[#191919] caret-primary py-3 px-5 rounded-lg placeholder:text-white font-inter placeholder:font-inter text-white font-normal text-base transition duration-300 ease focus:outline-none border focus:border-primary  border-[#191919]"
                required
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Email"
                className="bg-[#191919] caret-primary py-3 px-5 rounded-lg  placeholder:text-white font-inter placeholder:font-inter text-white font-normal text-base transition duration-300 ease focus:outline-none border focus:border-primary  border-[#191919]"
                required
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Contact Number"
                className="bg-[#191919] caret-primary py-3 px-5 rounded-lg placeholder:text-white font-inter placeholder:font-inter text-white font-normal text-base transition duration-300 ease focus:outline-none border focus:border-primary border-[#191919]"
                required
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Subject"
                className="bg-[#191919] caret-primary py-3 px-5 rounded-lg placeholder:text-white font-inter placeholder:font-inter text-white font-normal text-base transition duration-300 ease focus:outline-none border focus:border-primary border-[#191919]"
                required
              />
            </div>
            <textarea
              name="Message"
              id=""
              rows={4}
              className="w-full mt-4 bg-[#191919] caret-primary py-3 px-5 rounded-lg placeholder:text-white font-inter placeholder:font-inter text-white font-normal text-base transition duration-300 ease focus:outline-none border focus:border-primary border-[#191919]"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-primary mt-4 w-full md:w-44 h-14 flex justify-center items-center font-inter font-normal text-white rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
        
      </div>
      <div className="mt-10">
          <MapContainer
            center={[40.706001, -73.997002]}
            zoom={13}
            scrollWheelZoom={false}
            className="w-[80%] md:h-[70vh] h-[40vh] m-auto rounded-3xl "
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[40.706001, -73.997002]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
       </div>
    </div>
  );
}
