import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import ImageSection from "../components/ImageSection";
import OurClientSay from "../components/OurClientSay";
import OurMenu from "../components/OurMenu";
import VisitUs from "../components/VisitUs";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <div >
        <Hero />
        <Banner />
        <WhyChooseUs />
        <OurMenu />
        <ImageSection />
        <OurClientSay/>
        <VisitUs />
        <ContactUs />
    </div>
  )
}
