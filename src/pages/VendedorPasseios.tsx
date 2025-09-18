// src/pages/VendedorPasseios.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const passeios = [
  {
    nome: "Lagoa Azul",
    valor: "R$ 100,00",
    imagem: "/passeios/lagoaazul.jpg",
    descricao: "Passeio tranquilo com vista deslumbrante da Lagoa Azul.",
  },
  {
    nome: "Lagoa Bonita",
    valor: "R$ 120,00",
    imagem: "/passeios/lagoabonita.jpg",
    descricao: "Aproveite o pôr do sol incrível nas dunas.",
  },
  {
    nome: "Caburé",
    valor: "R$ 90,00",
    imagem: "/passeios/cabure.jpg",
    descricao: "Experiência única entre rio e mar.",
  },
  {
    nome: "Atins",
    valor: "R$ 150,00",
    imagem: "/passeios/atins.jpg",
    descricao: "Aventura pelas trilhas e praias de Atins.",
  },
  {
    nome: "Santo Amaro",
    valor: "R$ 140,00",
    imagem: "/passeios/santoamaro.jpg",
    descricao: "Belezas naturais e lagoas cristalinas.",
  },
  {
    nome: "Quadriciclos",
    valor: "R$ 160,00",
    imagem: "/passeios/quadri.jpg",
    descricao: "Adrenalina e emoção sobre as dunas.",
  },
  {
    nome: "Cardosa",
    valor: "R$ 110,00",
    imagem: "/passeios/cardosa.jpg",
    descricao: "Paisagens únicas no coração dos Lençóis.",
  },
];

const VendedorPasseios: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <h1 style={styles.titulo}>Passeios Disponíveis</h1>

      <div style={styles.lista}>
        {passeios.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.imagem} alt={item.nome} style={styles.imagem} />
            <div style={styles.info}>
              <h3 style={styles.nome}>{item.nome}</h3>
              <p style={styles.descricao}>{item.descricao}</p>
              <p style={styles.valor}>{item.valor}</p>
            </div>
          </div>
        ))}
      </div>

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
    minHeight: "100vh",
    fontFamily: "Segoe UI",
    textAlign: "center",
    boxShadow: "0 0 20px #00bfff",
    borderRadius: 20,
  },
  logo: {
    width: "120px",
    marginBottom: 10,
  },
  titulo: {
    fontSize: "24px",
    color: "#00bfff",
    textShadow: "0 0 5px #00bfff",
    marginBottom: 20,
  },
  lista: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  card: {
    width: 220,
    backgroundColor: "#f0faff",
    borderRadius: 12,
    padding: 10,
    boxShadow: "0 0 10px #00bfff",
    textAlign: "left",
  },
  imagem: {
    width: "100%",
    height: 120,
    objectFit: "cover",
    borderRadius: 8,
  },
  info: {
    marginTop: 10,
  },
  nome: {
    fontSize: 16,
    color: "#007acc",
    fontWeight: "bold",
  },
  descricao: {
    fontSize: 14,
    color: "#444",
    margin: "6px 0",
  },
  valor: {
    fontSize: 15,
    color: "#00bfff",
    fontWeight: "bold",
  },
  voltar: {
    marginTop: 30,
    backgroundColor: "#aaa",
    color: "#fff",
    padding: "10px 24px",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default VendedorPasseios;
