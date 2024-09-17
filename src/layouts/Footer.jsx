import Logo from "../assets/logo.svg";
import visaImage from '../assets/Visa.svg'
import MastercardImage from '../assets/Mastercard.svg'
import AmericanExpressImage from '../assets/american-express.svg'
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="bg-[#191919] p-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <img src={Logo} alt="" />
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy .
          </p>
        </div>

        <div>
            <h3 className="font-inter text-white font-bold text-2xl mb-5">Our Products</h3>
            <ul>
                <li><a href="/" className="font-inter font-normal text-white text-lg">Welcome</a></li>
                <li className='pt-3'><a href="/" className="font-inter font-normal text-white text-lg">Our menu</a></li>
                <li className='pt-3'><a href="/" className="font-inter font-normal text-white text-lg">Our time sides</a></li>
            </ul>
        </div>
        <div>
        <h3 className="font-inter text-white font-bold text-2xl mb-5">Our Products</h3>
            <ul>
                <li><a href="/" className="font-inter font-normal text-white text-lg">Terms and conditions</a></li>
                <li className='pt-3'><a href="/" className="font-inter font-normal text-white text-lg">Privacy policy</a></li>
            </ul>
        </div>
        <div>
        <h3 className="font-inter text-white font-bold text-2xl mb-5">Our Products</h3>
            <ul>
                <li><a href="/" className="font-inter font-normal text-white text-lg">Contact Us</a></li>
                <li className='pt-3'><a href="/" className="font-inter font-normal text-white text-lg">Our addresses</a></li>
                <li className='pt-3'><a href="/" className="font-inter font-normal text-white text-lg">Become a timesquare franchisee</a></li>
            </ul>
        </div>
        <div>
        <h3 className="font-inter text-white font-bold text-2xl mb-5">We accept</h3>
           <div className="flex md:flex-wrap gap-4">

           <img src={MastercardImage}/>
           <img src={visaImage}/>
           <img src={AmericanExpressImage}/>
           </div>
        </div>
      </div>

      <hr className="text-white mt-10 mb-4"/>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex gap-4 mb-5 md:mb-0 mx-auto md:mx-0">
            <FaFacebook className="text-white" size={25}/>
            <FaGithub className="text-white" size={25}/>
            <FaTwitter className="text-white" size={25}/>
            <FaLinkedin className="text-white" size={25}/>
        </div>
        <div>
            <p className="fonts-inter text-white font-normal text-lg">
        © 2024 Gourmet Sweet All rights reserved.
            </p>
        </div>
      </div>
    </div>
  );
}
