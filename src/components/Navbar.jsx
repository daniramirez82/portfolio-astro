import HamMenu from "./HamMenu";
import { useState } from "preact/hooks";
const cates = ["Home", "Portfolio", "About Me", "Contact"];

const Navbar = () => {
  const [cate, setCate] = useState("Home");

  const handleClick = (e) => {
    console.log(e.target.innerHTML);
    setCate(e.target.innerHTML);
  };
  return (
    <div className="fixed top-0 right-0 left-0 max-w-5xl mx-auto z-50 bg-white/80 backdrop-blur-sm ">
      <div className="flex justify-between items-center relative z-50">
        <div className="text-stone-800 font-extrabold text-4xl" id='home'>DR</div>
        <div className="md:hidden">
          <HamMenu cates={cates} />
        </div>
        <div className="hidden md:block">
          <ul className="flex">
            {cates.map((cat) => {
              return (
                <a href={`#${cat.toLowerCase()}`}>
                <li
                  onClick={handleClick}
                  className={`pl-4 text-yellow-600 cursor-pointer ${
                    cat === cate ? "font-bold" : ""
                  }`}
                >
                  {cat}
                </li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
