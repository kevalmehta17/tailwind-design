import Bag from "../../assets/icons/bag2.svg";
import heart from "../../assets/icons/heart.svg";
import profile from "../../assets/icons/profile.svg";
import Logo from "../../assets/image/logo.png";
import Categories from "../../assets/image/category.png";

import Search from "../../assets/icons/searchIcon.svg";
import { useState } from "react";
import { Button, Link } from "../../components";

const categoryButton =
  "text-[18px] font-light bg-gray-100 text-gray-800 px-[15px] py-[10px] rounded-[5px] h-[45px] leading-none tracking-[0.2px] border-0";

const categories = ["Women", "Men", "Kiddies", "New", "Popular"];

const navItems = [
  { path: "#home", label: "Home" },
  { path: "#shop", label: "Shop" },
  { path: "#spa", label: "Spa" },
  { path: "#about", label: "About" },
  { path: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("#home");

  return (
    <div className="w-full flex flex-col gap-[clamp(12px,2vw,32px)]">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-full max-w-[160px] sm:max-w-[240px]">
          <img src={Logo} alt="Logo" className="w-full h-auto" />
        </div>
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              path={item.path}
              onClick={() => setActive(item.path)}
              className={` md:text-[20px]
        text-[25px] font-light underline-offset-[6px]
       ${
         active === item.path
           ? "text-gray-800 underline"
           : "text-gray-600 hover:text-gray-900 hover:underline"
       }
      `}
            >
              {item.label}
            </Link>
          ))}
        </div>
        {/* Icons */}
        <div className="hidden md:flex gap-[clamp(8px,1.5vw,20px)]">
          <Button className="bg-transparent border-0 p-0">
            <img src={Bag} alt="bag" />
          </Button>
          <Button className="bg-transparent border-0 p-0">
            <img src={heart} alt="heart" />
          </Button>
          <Button className="bg-transparent border-0 p-0">
            <img src={profile} alt="profile" />
          </Button>
        </div>
        {/* Mobile Menu */}
        <div className="block md:hidden">
          <Button className="bg-transparent border-0 grid place-items-center p-[6px]">
            <img src={Categories} alt="Categories" />
          </Button>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="hidden md:flex items-center justify-between">
        {/* Categories */}
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          {categories.map((item) => (
            <Button key={item} className={categoryButton}>
              {item}
            </Button>
          ))}
        </div>

        {/* Search */}
        <Button className="bg-transparent border-0 p-0">
          <img src={Search} alt="search" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
