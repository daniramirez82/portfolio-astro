import ButtonMain from "../buttons/ButtonMain";
const Modal = ({ title, message, alert, onClick }) => {
  return (
    <div className="fixed -mt-44 left-0 right-0 top-0 bottom-0  bg-white/80 backdrop-blur-sm z-50 flex justify-center items-center">
      <div
        className={`${
          alert ? "bg-red-50" : "bg-green-100"
        } w-4/5 md:w-80 p-8 rounded-md shadow-lg flex flex-col`}
      >
        <h1 className="text-2xl tracking-tight font-bold">{title}</h1>
        <p className="text-stone-800 pt-4 pb-8">{message}</p>
        <div className="self-end" onClick={onClick}>
          <ButtonMain label={"Close"} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
