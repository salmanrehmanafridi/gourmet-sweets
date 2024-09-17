import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import ImageSection from "../components/ImageSection";
import OurClientSay from "../components/OurClientSay";
import OurMenu from "../components/OurMenu";
import VisitUs from "../components/VisitUs";
import WhyChooseUs from "../components/WhyChooseUs";
import { useEffect } from "react";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div >
        <Hero id='welcome'/>
        <Banner />
        <WhyChooseUs />
        <OurMenu id='our-menu'/>
        <ImageSection />
        <OurClientSay/>
        <VisitUs />
        <ContactUs id='contact'/>
    </div>
  )
}
