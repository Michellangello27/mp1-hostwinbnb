
import React, { useContext, useEffect, useRef, useState } from "react";
import { FilterContext } from "../providers/FilterProvider.jsx";
import closeIcon from "/icons/X-close.svg";
import locationIcon from "/icons/for-location.svg";

export default function Modal({ onClose }) {
  const {
    updateCity,
    updateGuests,
    toggleModal,
    activeTab,
    setActiveTab,
  } = useContext(FilterContext);

  const [localCity, setLocalCity] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef();

  const totalGuests = adults + children;
  const cities = ["Helsinki", "Turku", "Oulu", "Vaasa"];
  const suggestions = cities.filter(city =>
    city.toLowerCase().startsWith(localCity.toLowerCase())
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = () => {
    updateCity(localCity.trim());
    updateGuests(totalGuests);
    toggleModal();
  };

  const showLocation = activeTab === "location" || activeTab === "all";
  const showGuests = activeTab === "guests" || activeTab === "all";

  return (
    <div className="fixed inset-0 bg-black/40 z-50 overflow-y-auto" role="modal">
      <div className="bg-white w-full md:max-w-6xl mx-auto mt-6 md:mt-28 rounded-xl p-4 md:p-6" data-modal-content>
        <div className="flex justify-between items-center mb-4 md:hidden">
          <h2 className="text-sm font-bold text-gray-700">Edit your search</h2>
          <button onClick={onClose}>
            <img src={closeIcon} alt="close" className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-2 border rounded-2xl shadow-md bg-white mb-6 p-4">
          <button
            onClick={() => setActiveTab("location")}
            className="w-full md:w-auto px-4 py-3 text-left text-sm md:text-base text-gray-500 hover:bg-gray-100 active:scale-95 active:shadow-inner"
          >
            <label className="block text-[10px] font-bold uppercase text-gray-400">Location</label>
            {localCity || "Add location"}
          </button>
          <button
            onClick={() => setActiveTab("guests")}
            className="w-full md:w-auto px-4 py-3 text-left text-sm md:text-base text-gray-500 hover:bg-gray-100 border-t md:border-t-0 md:border-l active:scale-95 active:shadow-inner"
          >
            <label className="block text-[10px] font-bold uppercase text-gray-400">Guests</label>
            {totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}` : "Add guests"}
          </button>
          <button
            onClick={handleSearch}
            className="w-fit md:w-auto mx-auto px-6 py-2 text-center bg-red-500 hover:bg-red-600 text-white text-sm md:text-base font-semibold rounded-xl shadow hover:shadow-md cursor-pointer transition active:scale-95 active:shadow-inner"
          >
            <div className="flex justify-center items-center gap-2">
              <img src="/icons/search-white.svg" alt="search" className="w-4 h-4 md:w-5 md:h-5" />
              Search
            </div>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {showLocation && (
            <div className="flex-1 border rounded-2xl px-4 py-2 relative">
              <label className="text-[10px] font-bold text-gray-500 uppercase">Location</label>
              <input
                ref={inputRef}
                type="text"
                placeholder="Add location"
                value={localCity}
                onChange={(e) => {
                  setLocalCity(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={(e) => { setLocalCity(""); setShowSuggestions(true); }}
                className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400"
              />
              {showSuggestions && suggestions.length > 0 && (
                <ul className="mt-2 space-y-2">
                  {suggestions.map((city, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:underline"
                      onClick={() => {
                        setLocalCity(city);
                        setShowSuggestions(false);
                      }}
                    >
                      <img src={locationIcon} alt="location" className="w-4 h-4" />
                      {city}, Finland
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {showGuests && (
            <div className="flex-1 border rounded-2xl px-4 py-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase">Guests</label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-full text-sm text-gray-700 mb-2 bg-white outline-none border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
                value={totalGuests}
                onFocus={() => {
                  setAdults(0);
                  setChildren(0);
                }}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "");
                  const parsed = parseInt(value, 10) || 0;
                  setAdults(parsed);
                  setChildren(0);
                }}
              />
              <div>
                <p className="text-xs text-gray-400 mb-1">Adults (Ages 13 or above)</p>
                <div className="flex items-center gap-4 mb-2">
                  <button onClick={() => setAdults(Math.max(adults - 1, 0))} className="px-3 py-1 border rounded-lg bg-white shadow-sm hover:bg-gray-100 transition active:scale-95 active:shadow-inner cursor-pointer">-</button>
                  <span>{adults}</span>
                  <button onClick={() => setAdults(adults + 1)} className="px-3 py-1 border rounded-lg bg-white shadow-sm hover:bg-gray-100 transition active:scale-95 active:shadow-inner cursor-pointer">+</button>
                </div>
                <p className="text-xs text-gray-400 mb-1">Children</p>
                <div className="flex items-center gap-4">
                  <button onClick={() => setChildren(Math.max(children - 1, 0))} className="px-3 py-1 border rounded-lg bg-white shadow-sm hover:bg-gray-100 transition active:scale-95 active:shadow-inner cursor-pointer">-</button>
                  <span>{children}</span>
                  <button onClick={() => setChildren(children + 1)} className="px-3 py-1 border rounded-lg bg-white shadow-sm hover:bg-gray-100 transition active:scale-95 active:shadow-inner cursor-pointer">+</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
