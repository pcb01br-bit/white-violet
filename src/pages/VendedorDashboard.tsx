import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBed, FaMapSigns, FaCreditCard, FaArrowLeft } from "react-icons/fa";

const VendedorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [vendaCriada, setVendaCriada] = useState(false);

  useEffect(() => {
    // Simulando checagem da venda criada (você pode substituir por verificação real)
    const vendaSalva = localStorage.getItem("vendaCriada");
    setVendaCriada(vendaSalva === "true");
  }, []);

  const botoes = [
    {
      titulo: "Quartos",
      icone: <FaBed size={32} />,
      rota: "/vendedor/quartos",
    },
    {
      titulo: "Passeios",
      icone: <FaMapSigns size={32} />,
      rota: "/vendedor/passeios",
    },
    {
      titulo: "Pagamento",
      icone: <FaCreditCard size={32} />,
      rota: "/pagamentos",
    },
  ];

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <h1 style={styles.titulo}>Painel do Vendedor</h1>
      <p style={styles.subtitulo}>Selecione uma opção para continuar</p>

      {!vendaCriada ? (
        <p style={{ color: "red", marginTop: 20 }}>
          Nenhuma venda criada. Aguarde o administrador.
        </p>
      ) : (
        <div style={styles.grid}>
          {botoes.map((botao, idx) => (
            <div
              key={idx}
              style={styles.botao}
              onClick={() => navigate(botao.rota)}
            >
              <div style={styles.icone}>{botao.icone}</div>
              <div style={styles.texto}>{botao.titulo}</div>
            </div>
          ))}
        </div>
      )}

      <button onClick={() => navigate("/")} style={styles.voltar}>
        <FaArrowLeft /> Voltar ao Login
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 30,
    fontFamily: "Segoe UI",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  logo: { width: 100, marginBottom: 20 },
  titulo: { fontSize: 24, fontWeight: "bold" },
  subtitulo: { fontSize: 16, marginBottom: 20 },
  grid: { display: "flex", gap: 20, flexWrap: "wrap" },
  botao: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 10,
    cursor: "pointer",
  },
  icone: { marginBottom: 10 },
  texto: { fontSize: 14 },
  voltar: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
};

export default VendedorDashboard;
