import visitUs from "../assets/visit-us.png";
export default function VisitUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-visit-us-bg bg-cover bg-center bg-no-repeat">
    <div className="flex h-full flex-col justify-center md:p-20 p-10">

      <h3 className="font-inter text-white text-4xl md:text-5xl font-bold mb-2 text-center md:text-start">Visit Us Today!</h3>
      <p className="font-inter text-white font-normal text-lg text-center md:text-start">
        Conveniently located in the heart of Brooklyn, our restaurant is just
        minutes away from top attractions. Whether you're a local or a visitor,
        we promise an unforgettable dining experience.
      </p>
    </div>
      </div>

      <div className="">
        <img src={visitUs} alt="" />
      </div>
    </div>
  );
}
