
import { useContext } from "react";
import StayCard from "./StayCard";
import { FilterContext } from "../providers/FilterProvider";
import useData from "../hooks/useData";

export default function Main() {
  const { city, guests } = useContext(FilterContext);
  const { response } = useData("/data/stays.json");

  let stays = response || [];

  if (city && guests === 0) {
    stays = stays.filter((stay) => stay.city.toLowerCase() === city.toLowerCase());
  } else if (!city && guests > 0) {
    stays = stays.filter((stay) => stay.maxGuests >= guests);
  } else if (city && guests > 0) {
    stays = stays.filter(
      (stay) => stay.maxGuests >= guests && stay.city.toLowerCase() === city.toLowerCase()
    );
  }

  return (
    <section className="px-4 md:px-6 py-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Stays in Finland</h2>
        <span className="text-sm text-gray-500" id="stays-count">
          {stays.length}+ stay{stays.length !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {stays.length > 0 ? (
          stays.map((stay, index) => <StayCard key={index} stay={stay} />)
        ) : (
          <div className="col-span-full text-center text-gray-500 text-sm">No stays found.</div>
        )}
      </div>
    </section>
  );
}
