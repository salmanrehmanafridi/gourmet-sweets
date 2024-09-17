import Image1 from "../assets/image1.svg";
import Image2 from "../assets/image2.svg";
import Image3 from "../assets/image3.svg";
import Image4 from "../assets/image4.svg";
import Image5 from "../assets/image5.svg";
import Image6 from "../assets/image6.svg";
export default function ImageSection() {
  return (
    <div className="bg-black p-4 overflow-hidden">
      <h2 className="text-center font-inter font-bold md:text-5xl text-4xl text-white pt-10">
        Our Gallery
      </h2>
      <p className="text-center font-inter font-normal text-base text-white py-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been <br /> the industry's standard dummy text ever.
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="md:flex gap-4 hidden ">
        <img src={Image1} className="w-1/2 object-cover h-auto" alt="Image 1" />
        <img src={Image2} className="w-1/4 object-cover h-auto" alt="Image 2" />
        <img src={Image3} className="w-1/4 object-cover h-auto" alt="Image 3" />
      </div>
      <div className="md:flex gap-4 mt-4 hidden ">
        <img src={Image4} className="w-1/4 object-cover h-auto" alt="Image 1" />
        <img src={Image5} className="w-1/4 object-cover h-auto" alt="Image 2" />
        <img src={Image6} className="w-1/2 object-cover h-auto" alt="Image 3" />
      </div>

      <img
        src={Image1}
        className="w-full  block md:hidden object-cover h-auto"
        alt="Image 1"
      />
      <div className="flex gap-3 md:hidden flex-wrap mt-3">
        <img src={Image2} className="w-[48%] object-cover h-auto " alt="Image 2" />
        <img src={Image3} className="w-[48%] object-cover h-auto" alt="Image 3" />
        <img src={Image4} className="w-[48%] object-cover h-auto" alt="Image 2" />
        <img src={Image5} className="w-[48%] object-cover h-auto" alt="Image 3" />
      </div>

      <img src={Image6} className="w-full mt-3 block md:hidden object-cover h-auto" alt="Image 3" />

    </div>
  );
}
