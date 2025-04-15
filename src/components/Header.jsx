import { useContext } from "react";
import { FilterContext } from "../providers/FilterProvider.jsx";
import logo from "/icons/logo-f7862584.svg";
import searchIcon from "/icons/search.svg";

export default function Header() {
  const { toggleModal, setActiveTab } = useContext(FilterContext);

  const handleOpenLocation = () => {
    setActiveTab("location");
    toggleModal();
  };

  const handleOpenGuests = () => {
    setActiveTab("guests");
    toggleModal();
  };

  return (
    <header className="px-4 md:px-6 pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex items-center">
        <img src={logo} alt="Windbnb logo" className="w-24 md:w-28 object-contain" />
      </div>

      <div className="w-full md:w-auto">
        <div className="flex border rounded-2xl shadow-md overflow-hidden bg-white relative">
         
          <button
            className="px-6 py-3 w-full md:w-auto text-left text-sm md:text-base text-gray-500 hover:bg-gray-100 cursor-pointer transition shadow hover:shadow-md active:scale-95 active:shadow-inner"
            onClick={handleOpenLocation}
          >
            Add location
          </button>

          
          <button
            className="px-6 py-3 w-full md:w-auto border-l text-left text-sm md:text-base text-gray-500 hover:bg-gray-100 cursor-pointer transition shadow hover:shadow-md active:scale-95 active:shadow-inner"
            onClick={handleOpenGuests}
          >
            Add guests
          </button>

          
          <button
            className="px-4 py-3 border-l hover:bg-gray-100 cursor-pointer transition shadow hover:shadow-md active:scale-95 active:shadow-inner"
            onClick={toggleModal}
          >
            <img
              src={searchIcon}
              alt="search icon"
              className="w-8 h-8 md:w-6 md:h-6 text-red-500"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
