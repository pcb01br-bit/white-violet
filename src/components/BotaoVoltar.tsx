// BotaoVoltar.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const BotaoVoltar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/admin-dashboard")} // Caminho correto
      style={{
        marginTop: 40,
        padding: "12px 24px",
        backgroundColor: "#00bfff",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
        boxShadow: "0 0 8px #00bfff",
      }}
    >
      Voltar
    </button>
  );
};

export default BotaoVoltar;
