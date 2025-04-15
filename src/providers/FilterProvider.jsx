
import { createContext, useState } from "react";

export const FilterContext = createContext();

export default function FilterProvider({ children }) {
  const [city, setCity] = useState("");
  const [guests, setGuests] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("location"); // location | guests | all

  const updateCity = (newCity) => setCity(newCity);
  const updateGuests = (newGuests) => setGuests(newGuests);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <FilterContext.Provider
      value={{
        city,
        guests,
        isModalOpen,
        activeTab,
        updateCity,
        updateGuests,
        toggleModal,
        setActiveTab,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
