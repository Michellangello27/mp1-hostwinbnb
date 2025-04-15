
import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import { FilterContext } from "./providers/FilterProvider.jsx";

export default function App() {
  const { isModalOpen, toggleModal } = useContext(FilterContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isModalOpen &&
        window.innerWidth >= 768 &&
        !event.target.closest("[data-modal-content]") &&
        !event.target.closest("button")
      ) {
        toggleModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen, toggleModal]);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Main />
      {isModalOpen && <Modal onClose={toggleModal} />}
    </div>
  );
}
