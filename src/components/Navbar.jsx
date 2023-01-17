<<<<<<< HEAD
import HamMenu from "./HamMenu";
import { useState } from "preact/hooks";
const cates = ["Home", "Portfolio", "About Me", "Contact"];

const Navbar = () => {

    const [cate, setCate] = useState('Home');

    const handleClick = (e)=>{
        console.log(e.target.innerHTML);
        setCate(e.target.innerHTML) 
    }
  return (
    <div className="flex justify-between items-center">
      <div className="text-stone-800 font-extrabold text-4xl">DR</div>
      <div className="md:hidden">
        <HamMenu cates={cates} />
      </div>
      <div className="hidden md:block" >
        <ul className="flex">
          {cates.map((cat) => {
            return <li onClick={handleClick} className={`pl-4 text-yellow-600 ${cat === cate ? "font-bold" : "" }`}>{cat}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
=======
import HamMenu from "./HamMenu";
import { useState } from "preact/hooks";
const cates = ["Home", "Portfolio", "About Me", "Contact"];

const Navbar = () => {

    const [cate, setCate] = useState('Home');

    const handleClick = (e)=>{
        console.log(e.target.innerHTML);
        setCate(e.target.innerHTML) 
    }
  return (
    <div className="flex justify-between items-center">
      <div className="text-stone-800 font-extrabold text-4xl">DR</div>
      <div className="md:hidden">
        <HamMenu cates={cates} />
      </div>
      <div className="hidden md:block" >
        <ul className="flex">
          {cates.map((cat) => {
            return <li onClick={handleClick} className={`pl-4 text-yellow-600 ${cat === cate ? "font-bold" : "" }`}>{cat}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
>>>>>>> 3132d5f8e32d0cb0c81e4a9f5d02f87f707788fc
