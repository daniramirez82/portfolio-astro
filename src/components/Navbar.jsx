import HamMenu from "./HamMenu";
import { useState } from "preact/hooks";
const cates =[{cate:'Home', link: '#Home'}, {cate:'Portfolio', link:'#Portfolio'}, {cate: 'About Me', link:'#About'}, {cate:'Contact', link: '#Contact'}];

const Navbar = () => {
  const [category, setCate] = useState("Home");

  const handleClick = (e) => {
    console.log(e.target.innerHTML);
    setCate(e.target.innerHTML);
  };
  return (
    <div className="fixed top-0 right-0 left-0 max-w-5xl mx-auto z-50 bg-white/80 backdrop-blur-sm ">
      <div className="flex justify-between items-center relative z-50">
        <div className="text-stone-800 font-extrabold text-4xl">DR</div>
        <div className="md:hidden">
          <HamMenu cates={cates} />
        </div>
        <div className="hidden md:block">
          <ul className="flex">
            {cates.map(({cate, link}) => {
              return (
                <a href={link}>
                  <li
                    onClick={handleClick}
                    className={`pl-4 text-yellow-600 cursor-pointer ${cate === category ? "font-bold" : ""}`}
                  >
                    {cate}
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
