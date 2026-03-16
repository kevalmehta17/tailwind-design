import Bag from "../../assets/icons/bag2.svg";
import heart from "../../assets/icons/heart.svg";
import profile from "../../assets/icons/profile.svg";
import Logo from "../../assets/image/logo.png";
import Categories from "../../assets/image/category.png";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Search from "../../assets/icons/searchIcon.svg";

const categoryButton =
  "text-xl font-light bg-[#EFEFEF] px-3 py-2 rounded-md h-[45px] leading-none tracing-[0.2px]";

  const categories = ["Women", "Men", "Kiddies", "New", "Popular"];

const Navbar = () => {
  return (
    <div className="w-full flex flex-col gap-8 xl:gap-8">
      {/* For Top */}
      <div className="flex flex-row justify-between">
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="w-40 md:max-w-60 sm:w-60 h-auto"
          />
        </div>
        <div className="hidden md:flex flex-row md:gap-x-8 md:justify-around items-center text-[#545454] md:text-xl lg:text-2xl">
          <Link path="#home">Home</Link>
          <Link path="#shop">Shop</Link>
          <Link path="#spa">Spa</Link>
          <Link path="#about">About</Link>
          <Link path="#contact">Contact</Link>
        </div>
        <div className="hidden md:flex flex-row gap-5">
          <Button>
            <img src={Bag} alt="bag" />
          </Button>
          <Button>
            <img src={heart} alt="heart" />
          </Button>
          <Button>
            <img src={profile} alt="profile" />
          </Button>
        </div>
        <div className="md:hidden sm:flex">
          <Button>
            <img src={Categories} alt="Categories" />
          </Button>
        </div>
      </div>
      {/* For Bottom */}
      <div className="hidden md:flex md:flex-row justify-between">
        <div className=" flex flex-row gap-3 ">
         {categories.map((item) => (
          <Button key={item} className={categoryButton}>{item}</Button>
         ))}
        </div>
        <Button>
          <img src={Search} alt="search" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
