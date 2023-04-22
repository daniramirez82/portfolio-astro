const ButtonMain = ({ link, label, target, onClick, children }) => {
  return (
    <div
      class="group border-b-2 border-b-yellow-600 
              cursor-pointer relative w-fit pr-1 overflow-hidden "
      onClick={onClick}
    >
      <a target={target} href={link} class=" relative z-10">
        <div class="p-2 flex space-x-1">
          {children}
          <span class={`transition-all ease-in-out delay-200 font-bold text-stone-900 group-hover:text-white duration-150`}>
            {label}
          </span>
        </div>
      </a>
      <div class="transition-all ease-in-out delay-75 bg-yellow-600 absolute z-0 w-full h-full top-0 translate-y-full group-hover:translate-y-0 duration-500"></div>
    </div>
  );
};

export default ButtonMain;
