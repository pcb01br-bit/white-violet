import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Quarto {
  id: number;
  nome: string;
  valor: string;
  imagem: string;
  adultos: number;
  criancas: number;
}

const VendedorQuartos: React.FC = () => {
  const navigate = useNavigate();

  const [quartos] = useState<Quarto[]>([
    {
      id: 1,
      nome: "Quarto Luxo",
      valor: "250,00",
      imagem: "/quarto1.jpg",
      adultos: 2,
      criancas: 1,
    },
    {
      id: 2,
      nome: "Quarto Família",
      valor: "350,00",
      imagem: "/quarto2.jpg",
      adultos: 3,
      criancas: 2,
    },
  ]);

  const handleSelecionar = (quarto: Quarto) => {
    console.log("Selecionado:", quarto);
    alert(`Quarto "${quarto.nome}" selecionado!`);
    // Aqui futuramente: redirecionar para etapa de pagamento
  };

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <h1 style={styles.titulo}>Quartos Disponíveis</h1>
      <p style={styles.texto}>Escolha um quarto para realizar a venda</p>

      {quartos.map((q) => (
        <div key={q.id} style={styles.card}>
          <img src={q.imagem} alt={q.nome} style={styles.img} />
          <h3 style={styles.nome}>{q.nome}</h3>
          <p style={styles.info}>
            👨 Adultos: {q.adultos} · 👶 Crianças: {q.criancas}
          </p>
          <p style={styles.valor}>R$ {q.valor}</p>
          <button style={styles.botao} onClick={() => handleSelecionar(q)}>
            Selecionar
          </button>
        </div>
      ))}

      <button
        onClick={() => navigate("/vendedor-dashboard")}
        style={styles.voltar}
      >
        Voltar
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 30,
    backgroundColor: "#fff",
    borderRadius: 20,
    textAlign: "center",
    fontFamily: "Segoe UI",
    boxShadow: "0 0 20px #00bfff",
    minHeight: "100vh",
  },
  logo: {
    width: "160px",
    marginBottom: 10,
  },
  titulo: {
    color: "#00bfff",
    fontSize: "26px",
    textShadow: "0 0 5px #00bfff",
    marginBottom: 10,
  },
  texto: {
    color: "#666",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#f0faff",
    border: "2px solid #00bfff",
    borderRadius: 16,
    boxShadow: "0 0 10px #00bfff",
    padding: 20,
    marginBottom: 30,
    maxWidth: 400,
    marginInline: "auto",
  },
  img: {
    width: "100%",
    height: 180,
    objectFit: "cover",
    borderRadius: 12,
    marginBottom: 10,
  },
  nome: {
    color: "#007acc",
    fontSize: 18,
    fontWeight: "bold",
  },
  info: {
    margin: "8px 0",
    color: "#333",
  },
  valor: {
    fontSize: 16,
    color: "#00bfff",
    fontWeight: "bold",
    marginBottom: 12,
  },
  botao: {
    backgroundColor: "#00bfff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 0 6px #00bfff",
  },
  voltar: {
    marginTop: 40,
    backgroundColor: "#00bfff",
    color: "#fff",
    border: "none",
    padding: "10px 24px",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 0 10px #00bfff",
  },
};

export default VendedorQuartos;
