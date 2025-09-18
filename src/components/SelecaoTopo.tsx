import React from "react";

const SelecaoTopo = ({ titulo, icone }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-md rounded-2xl py-6 px-4 mb-6">
      <div className="bg-blue-100 rounded-full p-4 shadow-md text-blue-500 text-4xl">
        {icone}
      </div>
      <h1 className="mt-4 text-xl font-bold text-blue-800 drop-shadow-sm text-center">
        {titulo}
      </h1>
    </div>
  );
};

export default SelecaoTopo;
