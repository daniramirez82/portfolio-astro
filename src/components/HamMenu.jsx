import { useState } from "preact/hooks";

const HamMenu = ({ cates }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col justify-end">
      <div
        onClick={handleClick}
        className={`transition delay-200 duration-300 ease-in-out  z-50 rounded-md hover: w-14 p-1 flex justify-center self-end ${
          isOpen ? "bg-slate-200" : ""
        }`}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="7" width="30" height="3" fill="#292524" />
          <rect x="3" y="16" width="30" height="3" fill="#292524" />
          <rect x="3" y="25" width="30" height="3" fill="#292524" />
        </svg>
      </div>

      <div
        className={`absolute transition-all duration-500 right-0  z-30 rounded-md drop-shadow-xl  bg-white px-7 p-5 mr-4 mt-7 ${
          isOpen ? "opacity-100 top-12" : "opacity-0 top-0"
        }`}
      >
        <ul className="flex flex-col w-fit space-y-5">
          {cates.map(({ cate, link }) => (
            <a href={link} onClick={handleClick} className="cursor-pointer">
              <li className="w-fit self-end " key={cate}>
                {cate}
              </li>
            </a>
          ))}
        </ul>
      </div>
      {/* //backdrop */}
      <div
        onClick={handleClick}
        className={`w-screen h-screen absolute left-0 top-0 z-10  ${
          isOpen ? "" : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default HamMenu;
