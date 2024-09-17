import video from "../assets/video.mp4";
import { GiCheckMark } from "react-icons/gi";
import checkMark from "../assets/check.svg";
import PlayButton from "../assets/PlayButton.svg";
import { useEffect, useRef } from "react";
export default function WhyChooseUs() {
  const videoRef = useRef(null);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    const handlePlayButtonClick = () => {
      if (videoRef.current && thumbnailRef.current) {
        thumbnailRef.current.classList.add("hidden");
        videoRef.current.classList.remove("hidden");
        videoRef.current.play();
      }
    };
    const handleVideoEnd = () => {
      if (videoRef.current && thumbnailRef.current) {
        videoRef.current.classList.add("hidden");
        thumbnailRef.current.classList.remove("hidden");
      }
    };

    const thumbnailElement = thumbnailRef.current;
    const videoElement = videoRef.current;

    if (thumbnailElement) {
      thumbnailElement.addEventListener("click", handlePlayButtonClick);
    }

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (thumbnailElement) {
        thumbnailElement.removeEventListener("click", handlePlayButtonClick);
      }
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);
  return (
    <div className="bg-black px-10 md:px-28 py-20">
      <div className=" text-center mb-10">
        <h2 className="text-white font-inter font-bold text-4xl md:text-5xl">
          Why We are Best Food Maker
        </h2>
        <p className="text-white pt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem <br /> scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="relative m-auto w-full max-w-lg">
          <video
            ref={videoRef}
            autoPlay
            controls
            className="rounded-lg hidden object-cover w-full md:h-[478px] h-[254px] "
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            ref={thumbnailRef}
            className="md:absolute top-[8px] inset-0 flex items-center justify-center cursor-pointer w-full h-full"
          >
            <div className="bg-videoThumbnail  bg-cover bg-no-repeat bg-center w-full h-[254px] md:h-[478px] relative rounded-lg flex items-center justify-center ">
              <div className="ping-container ">
                <img
                  src={PlayButton}
                  alt="Play Button"
                  className="w-12 h-12 relative z-10"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <img src={checkMark} />
            <h5 className="font-inter font-normal text-[#cecece] text-base">
              <span className="font-bold text-white">Authentic Flavors:</span>{" "}
              Our chefs masterfully craft dishes using the freshest local
              ingredients, bringing the unique essence of Brooklyn to your
              plate.
            </h5>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <img src={checkMark} />

            <h5 className="font-inter font-normal text-[#cecece] text-base">
              <span className="font-bold text-white">Iconic Sweets:</span>{" "}
              Indulge in our selection of handmade sweets, from decadent
              pastries to traditional treats, all freshly made to perfection.
            </h5>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <img src={checkMark} />

            <h5 className="font-inter font-normal text-[#cecece] text-base">
              <span className="font-bold text-white">Warm Ambiance:</span> Enjoy
              your meal in a cozy, inviting atmosphere that feels like home,
              whether dining in or grabbing a quick bite on the go.
            </h5>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <img src={checkMark} />

            <h5 className="font-inter font-normal text-[#cecece] text-base">
              <span className="font-bold text-white">
                Something for Everyone:
              </span>{" "}
              From casual lunches to romantic dinners and sweet cravings, our
              menu has something to satisfy every palate.
            </h5>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <img src={checkMark} />
            <h5 className="font-inter font-normal text-[#cecece] text-base">
              <span className="font-bold text-white">Catering & Events:</span>{" "}
              Planning a special event? Let us bring the flavors of Brooklyn to
              your table with our bespoke catering services.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
