// src/pages/HistoricoVendedores.tsx
import React from "react";
import BotaoVoltar from "../components/BotaoVoltar";

interface Registro {
  id: number;
  vendedor: string;
  acao: string;
  data: string;
}

const HistoricoVendedores: React.FC = () => {
  const registros: Registro[] = [
    { id: 1, vendedor: "João", acao: "Venda de pacote", data: "12/05/2025" },
    {
      id: 2,
      vendedor: "Maria",
      acao: "Cancelamento de reserva",
      data: "11/05/2025",
    },
    { id: 3, vendedor: "Carlos", acao: "Venda de pacote", data: "10/05/2025" },
  ];

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <h1 style={styles.title}>Histórico dos Vendedores</h1>
      <p style={styles.subtitle}>Veja as ações realizadas pelos vendedores</p>

      <div style={styles.table}>
        <div style={styles.header}>
          <span>Vendedor</span>
          <span>Ação</span>
          <span>Data</span>
        </div>
        {registros.map((item) => (
          <div key={item.id} style={styles.row}>
            <span>{item.vendedor}</span>
            <span>{item.acao}</span>
            <span>{item.data}</span>
          </div>
        ))}
      </div>

      <BotaoVoltar />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 40,
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#fff",
    minHeight: "100vh",
    textAlign: "center",
    boxShadow: "0 0 20px #00bfff",
    borderRadius: "20px",
  },
  logo: {
    width: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: "1.8em",
    color: "#00bfff",
    fontWeight: "bold",
    textShadow: "0 0 6px #00bfff",
    marginBottom: 5,
  },
  subtitle: {
    color: "#444",
    marginBottom: 30,
  },
  table: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 700,
    margin: "0 auto 30px auto",
  },
  header: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr",
    fontWeight: "bold",
    backgroundColor: "#e0f7ff",
    padding: "12px",
    borderRadius: "8px 8px 0 0",
    color: "#0077cc",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr",
    padding: "10px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#f9f9f9",
  },
};

export default HistoricoVendedores;
