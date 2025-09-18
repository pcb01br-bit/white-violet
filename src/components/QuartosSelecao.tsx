import { useState } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function QuartosSelecao() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  const [adultos, setAdultos] = useState(2);
  const [criancas, setCriancas] = useState(0);
  const [quartos, setQuartos] = useState(1);
  const [pets, setPets] = useState(false);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg w-full max-w-4xl mx-auto mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Seleção de Datas */}
        <div className="flex items-center gap-2 w-full md:w-1/2 border rounded-xl px-4 py-2 shadow-md border-yellow-400">
          <FaCalendarAlt className="text-gray-500" />
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            selectsStart
            startDate={checkIn}
            endDate={checkOut}
            placeholderText="Data de check-in"
            className="w-full focus:outline-none"
          />
          <span className="mx-2 text-gray-500">—</span>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            selectsEnd
            startDate={checkIn}
            endDate={checkOut}
            minDate={checkIn}
            placeholderText="Data de check-out"
            className="w-full focus:outline-none"
          />
        </div>

        {/* Seletor de Pessoas */}
        <div className="relative w-full md:w-1/2">
          <div
            className="flex items-center justify-between w-full border rounded-xl px-4 py-2 shadow-md border-yellow-400 cursor-pointer"
            onClick={() => setShowGuestDropdown(!showGuestDropdown)}
          >
            <div className="flex items-center gap-2">
              <FaUser className="text-gray-500" />
              <span className="text-sm">
                {adultos} adulto{adultos !== 1 && "s"} · {criancas} criança
                {criancas !== 1 && "s"} · {quartos} cômodo
              </span>
            </div>
            <span className="text-gray-500">&#9662;</span>
          </div>

          {showGuestDropdown && (
            <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-xl p-4 border">
              {/* Adultos */}
              <div className="flex justify-between items-center mb-2">
                <span>Adultos</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAdultos(Math.max(1, adultos - 1))}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    −
                  </button>
                  <span>{adultos}</span>
                  <button
                    onClick={() => setAdultos(adultos + 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Crianças */}
              <div className="flex justify-between items-center mb-2">
                <span>Crianças</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCriancas(Math.max(0, criancas - 1))}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    −
                  </button>
                  <span>{criancas}</span>
                  <button
                    onClick={() => setCriancas(criancas + 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Quartos */}
              <div className="flex justify-between items-center mb-2">
                <span>Quartos</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuartos(Math.max(1, quartos - 1))}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    −
                  </button>
                  <span>{quartos}</span>
                  <button
                    onClick={() => setQuartos(quartos + 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Pets */}
              <div className="flex justify-between items-center mt-3">
                <span>Viajando com pets?</span>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={pets}
                    onChange={() => setPets(!pets)}
                  />
                  <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner relative">
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow absolute top-0 transition-transform ${
                        pets ? "translate-x-5" : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                </label>
              </div>

              <button
                onClick={() => setShowGuestDropdown(false)}
                className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-xl shadow hover:bg-blue-700"
              >
                OK
              </button>
            </div>
          )}
        </div>

        {/* Botão Pesquisar */}
        <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700">
          Pesquisar
        </button>
      </div>
    </div>
  );
}
