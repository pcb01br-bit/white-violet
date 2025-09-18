import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBed, FaUmbrellaBeach } from "react-icons/fa";

const ComboPersonalizado = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "#f0f8ff",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#003366",
          textShadow: "2px 2px 4px #00f",
          marginBottom: "2rem",
        }}
      >
        Combo Personalizado
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Botão para Adicionar Quarto */}
        <div
          onClick={() => navigate("/pacotes/quartos")}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: "white",
            boxShadow: "0 0 10px #00f",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <FaBed size={32} color="#003366" />
          <span style={{ marginTop: "0.5rem", color: "#003366" }}>
            Adicionar Quarto
          </span>
        </div>

        {/* Botão para Adicionar Passeio */}
        <div
          onClick={() => navigate("/pacotes/passeios")}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: "white",
            boxShadow: "0 0 10px #00f",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <FaUmbrellaBeach size={32} color="#003366" />
          <span style={{ marginTop: "0.5rem", color: "#003366" }}>
            Adicionar Passeio
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComboPersonalizado;
