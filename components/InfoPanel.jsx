import React from "react";

const InfoPanel = ({ selectedSeats, filter, setFilter }) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md space-y-4 mb-6">
      <h3 className="text-lg font-semibold text-center">Booking Info</h3>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setFilter("booked")}
          className={`px-4 py-1 rounded text-sm font-medium border ${
            filter === "booked"
              ? "bg-orange-500 text-white"
              : "bg-white text-orange-500 border-orange-400"
          }`}
        >
          Show Booked Seats
        </button>
        <button
          onClick={() => setFilter("available")}
          className={`px-4 py-1 rounded text-sm font-medium border ${
            filter === "available"
              ? "bg-green-600 text-white"
              : "bg-white text-green-600 border-green-500"
          }`}
        >
          Show Available Seats
        </button>
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-1 rounded text-sm font-medium border ${
            filter === "all"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-800 border-gray-600"
          }`}
        >
          Show All
        </button>
      </div>

      <div className="flex justify-center gap-4 mt-3">
        <span className="text-orange-600 font-medium">
          Booked Seats: {selectedSeats.length}
        </span>
        <span className="text-green-600 font-medium">
          Available Seats: {80 - selectedSeats.length}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {selectedSeats.slice(0, 7).map((seat) => (
          <input
            key={seat}
            type="text"
            value={seat}
            readOnly
            className="w-10 text-center text-sm border border-gray-300 rounded bg-white"
          />
        ))}
      </div>
    </div>
  );
};

export default InfoPanel;

