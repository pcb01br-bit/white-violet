import React, { useState, useEffect } from "react";
import { FaUserAlt, FaUndo } from "react-icons/fa";

interface Props {
  onPesquisar?: (dados: {
    checkin: string,
    checkinHora: string,
    checkout: string,
    checkoutHora: string,
    adultos: number,
    criancas: number,
    pet: boolean,
  }) => void;
}

const BarraDeBuscaQuartos: React.FC<Props> = ({ onPesquisar }) => {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [checkinHora, setCheckinHora] = useState("12:00");
  const [checkoutHora, setCheckoutHora] = useState("11:00");
  const [adultos, setAdultos] = useState(0);
  const [criancas, setCriancas] = useState(0);
  const [pets, setPets] = useState(false);

  const handlePesquisar = () => {
    const dados = {
      checkin,
      checkinHora,
      checkout,
      checkoutHora,
      adultos,
      criancas,
      pet: pets,
    };
    if (onPesquisar) onPesquisar(dados);
  };

  const handleReset = () => {
    setCheckin("");
    setCheckout("");
    setCheckinHora("12:00");
    setCheckoutHora("11:00");
    setAdultos(0);
    setCriancas(0);
    setPets(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.dataHora}>
        <label style={styles.label}>Check-in:</label>
        <input
          type="date"
          value={checkin}
          onChange={(e) => setCheckin(e.target.value)}
          style={styles.input}
        />
        <input
          type="time"
          value={checkinHora}
          onChange={(e) => setCheckinHora(e.target.value)}
          style={styles.time}
        />
      </div>

      <div style={styles.dataHora}>
        <label style={styles.label}>Check-out:</label>
        <input
          type="date"
          value={checkout}
          onChange={(e) => setCheckout(e.target.value)}
          style={styles.input}
        />
        <input
          type="time"
          value={checkoutHora}
          onChange={(e) => setCheckoutHora(e.target.value)}
          style={styles.time}
        />
      </div>

      <div style={styles.pessoas}>
        <FaUserAlt style={styles.icon} />
        <span>
          {adultos} adulto{adultos !== 1 ? "s" : ""} · {criancas} criança
          {criancas !== 1 ? "s" : ""}
        </span>
      </div>

      <select
        value={adultos}
        onChange={(e) => setAdultos(parseInt(e.target.value))}
        style={styles.select}
      >
        {[0, 1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>
            {n} adulto{n !== 1 ? "s" : ""}
          </option>
        ))}
      </select>

      <select
        value={criancas}
        onChange={(e) => setCriancas(parseInt(e.target.value))}
        style={styles.select}
      >
        {[0, 1, 2, 3, 4].map((n) => (
          <option key={n} value={n}>
            {n} criança{n !== 1 ? "s" : ""}
          </option>
        ))}
      </select>

      <label style={styles.labelPet}>
        Pet:
        <input
          type="checkbox"
          checked={pets}
          onChange={(e) => setPets(e.target.checked)}
          style={{ marginLeft: 8 }}
        />
      </label>

      <button onClick={handlePesquisar} style={styles.button}>
        Pesquisar
      </button>

      <button onClick={handleReset} style={styles.resetButton}>
        <FaUndo style={{ marginRight: 5 }} />
        Limpar
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f9ff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 0 10px #00bfff",
    fontFamily: "Segoe UI, sans-serif",
    marginBottom: "20px",
  },
  label: {
    fontWeight: "bold",
    fontSize: "12px",
  },
  dataHora: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    alignItems: "flex-start",
  },
  input: {
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  time: {
    padding: "6px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    width: "100px",
  },
  pessoas: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    gap: "6px",
    color: "#0077cc",
  },
  icon: {
    color: "#00bfff",
  },
  select: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  labelPet: {
    fontWeight: "bold",
    color: "#0077cc",
    display: "flex",
    alignItems: "center",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#00bfff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 0 6px #00bfff",
    fontWeight: "bold",
  },
  resetButton: {
    padding: "10px 16px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 0 6px #ff4d4d",
  },
};

export default BarraDeBuscaQuartos;
