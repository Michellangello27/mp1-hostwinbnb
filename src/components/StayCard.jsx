
export default function StayCard({ stay }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-3 bg-white">
      <img
        src={stay.photo}
        alt={stay.title}
        className="w-full h-[250px] object-cover rounded-2xl"
      />
      <div className="flex justify-between items-center mt-2">
        <p className="flex items-center gap-2 text-sm text-gray-500">
          {stay.superHost && (
            <span className="text-xs font-bold border px-2 py-0.5 rounded-md uppercase">SUPERHOST</span>
          )}
          {stay.type}
          {stay.beds != null ? ` · ${stay.beds} bed${stay.beds > 1 ? "s" : ""}` : ""}
        </p>
        <p className="text-sm text-[#eb5757] font-medium">★ {stay.rating}</p>
      </div>
      <p className="font-semibold text-sm mt-1">{stay.title}</p>
    </div>
  );
}
