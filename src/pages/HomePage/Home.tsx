import Navbar from '../../layout/Navbar/Navbar';
import AboutUs from './components/AboutUs/AboutUs';
import BestSeller from './components/BestSeller/BestSeller';
import Hero from './components/Hero/Hero';
import OfferBanner from './components/OfferBanner/OfferBanner';
import Testimonial from './components/Testimonial/Testimonial';

const Home = () => {
  return (
    <div className="flex flex-col gap-[38px] md:gap-[50px] lg:gap-[68px] xl:gap-[100px]">
      <Navbar />
      <Hero />
      <AboutUs />
      <BestSeller />
      <Testimonial />
      <OfferBanner />
    </div>
  );
};

export default Home;
