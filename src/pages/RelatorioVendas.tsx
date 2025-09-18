// src/pages/RelatorioVendas.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
} from "recharts";

const COLORS = ["#00bfff", "#007acc", "#005f99", "#003f66"];

const dadosSimulados = [
  { name: "Lagoa Bonita", value: 400 },
  { name: "Lagoa Azul", value: 300 },
  { name: "Dunas Douradas", value: 300 },
  { name: "Rota das Águas", value: 200 },
];

const RelatorioVendas: React.FC = () => {
  const navigate = useNavigate();
  const [visualizacao, setVisualizacao] = useState<
    "pizza" | "coluna" | "porcentagem"
  >("pizza");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <h1 style={styles.title}>Relatório de Vendas</h1>

      <div style={styles.filtros}>
        <input
          type="date"
          value={dataInicio}
          onChange={(e) => setDataInicio(e.target.value)}
          style={styles.dateInput}
        />
        <input
          type="date"
          value={dataFim}
          onChange={(e) => setDataFim(e.target.value)}
          style={styles.dateInput}
        />
      </div>

      <div style={styles.toggle}>
        <button
          onClick={() => setVisualizacao("pizza")}
          style={styles.toggleButton}
        >
          Pizza
        </button>
        <button
          onClick={() => setVisualizacao("coluna")}
          style={styles.toggleButton}
        >
          Colunas
        </button>
        <button
          onClick={() => setVisualizacao("porcentagem")}
          style={styles.toggleButton}
        >
          Porcentagem
        </button>
      </div>

      <div style={styles.graficoArea}>
        {visualizacao === "pizza" && (
          <PieChart width={350} height={300}>
            <Pie
              data={dadosSimulados}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {dadosSimulados.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        )}

        {visualizacao === "coluna" && (
          <BarChart width={400} height={300} data={dadosSimulados}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#00bfff" />
          </BarChart>
        )}

        {visualizacao === "porcentagem" && (
          <ul style={styles.lista}>
            {dadosSimulados.map((item) => {
              const total = dadosSimulados.reduce((a, b) => a + b.value, 0);
              const percentual = ((item.value / total) * 100).toFixed(1);
              return (
                <li key={item.name}>
                  <strong>{item.name}</strong>: {percentual}%
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <button onClick={() => navigate("/relatorios")} style={styles.button}>
        Voltar
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 30,
    backgroundColor: "#fff",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    textAlign: "center",
    boxShadow: "0 0 20px #00bfff",
    borderRadius: "20px",
  },
  logo: {
    width: 120,
    marginBottom: 10,
  },
  title: {
    fontSize: "1.6em",
    color: "#00bfff",
    fontWeight: "bold",
    textShadow: "0 0 6px #00bfff",
    marginBottom: 20,
  },
  filtros: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  dateInput: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  toggle: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: 30,
  },
  toggleButton: {
    padding: "10px 16px",
    backgroundColor: "#00bfff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 0 10px #00bfff",
  },
  graficoArea: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  lista: {
    textAlign: "left",
    fontSize: "16px",
    lineHeight: "1.8",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#00bfff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 0 10px #00bfff",
  },
};

export default RelatorioVendas;
