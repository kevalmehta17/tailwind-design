import Footer from '../../layout/Footer/Footer';
import Navbar from '../../layout/Navbar/Navbar';
import AboutUs from './components/AboutUs/AboutUs';
import BestSeller from './components/BestSeller/BestSeller';
import Hero from './components/Hero/Hero';
import OfferBanner from './components/OfferBanner/OfferBanner';
import Testimonial from './components/Testimonial/Testimonial';

const Home = () => {
  return (
    <div className="flex flex-col  gap-5 md:gap-9  lg:gap-16 xl:gap-24  ">
      <Navbar />
      <Hero />
      <AboutUs />
      <BestSeller />
      <Testimonial />
      <OfferBanner />
      <Footer />
    </div>
  );
};

export default Home;
