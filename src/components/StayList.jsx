import { useContext } from "react";
import { FilterContext } from "../providers/FilterProvider";
import useData from "../hooks/useData";
import StayCard from "./StayCard";

export default function StayList() {
  const { city, guests } = useContext(FilterContext);
  const { response, loading, error } = useData("/data/stays.json");

  if (loading) return <p className="text-center">Loading stays...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {stays.length > 0 ? (
        stays.map((stay, index) => <StayCard key={index} stay={stay} />)
      ) : (
        <div className="col-span-full text-center text-gray-500 text-sm">No stays found.</div>
      )}
    </div>
  );
}
