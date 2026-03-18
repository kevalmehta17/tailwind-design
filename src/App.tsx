import Footer from './layout/Footer/Footer';
import Home from './pages/HomePage';

function App() {
  return (
    <div className="flex flex-col gap-[36px] md:gap-[50px] lg:gap-[68px] xl:gap-[100px] max-w-[1440px] mx-auto">
      <div className="pb-0 px-5 py-12 sm:px-8 md:px-[75px] md:pt-[50px] ">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
