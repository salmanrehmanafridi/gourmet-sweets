import Button from "./Button";

export default function Hero() {
  return (
    <div className="bg-hero-bg pb-10 bg-cover bg-no-repeat">
      <div className=" md:max-w-3xl pl-4 pr-16 md:pr-0 md:pl-28 pt-10">

        <h1 className="text-white font-inter font-extrabold text-3xl md:text-6xl">
          Welcome to Brooklyn's Most Famous Restaurant & Sweets
        </h1>
        <h3 className="text-white font-inter text-xl mb-5 mt-2">
          Experience Culinary Excellence in the Heart of New York!
        </h3>
        <p className="text-white font-inter text-xl">
          Located in the vibrant and diverse borough of Brooklyn, we bring you
          the finest dining experience with a perfect blend of savory and sweet.
        </p>
        <Button title="Learn more" classname='bg-primary text-white px-6 py-3 mt-7 rounded-full'/>
      </div>
    </div>
  );
}
