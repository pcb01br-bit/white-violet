import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Pagamentos: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const veioDoVendedor = location.state?.origem === "vendedor";

  const handleVoltar = () => {
    if (veioDoVendedor) {
      navigate("/vendedor-dashboard");
    } else {
      navigate("/admin-dashboard");
    }
  };

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <h1 style={styles.titulo}>Formas de Pagamento</h1>

      <div style={styles.caixa}>
        <p style={styles.texto}>Aceitamos:</p>
        <ul style={styles.lista}>
          <li>💳 Cartão de Crédito/Débito</li>
          <li>💵 Dinheiro</li>
          <li>📱 Pix</li>
          <li>🏦 Transferência Bancária</li>
        </ul>
      </div>

      <button onClick={handleVoltar} style={styles.voltar}>
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
    fontFamily: "Segoe UI",
    textAlign: "center",
    boxShadow: "0 0 20px #00bfff",
    maxWidth: 500,
    margin: "60px auto",
  },
  logo: {
    width: "120px",
    marginBottom: 10,
  },
  titulo: {
    fontSize: "24px",
    color: "#00bfff",
    textShadow: "0 0 4px #00bfff",
    marginBottom: 20,
  },
  caixa: {
    backgroundColor: "#f0faff",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 0 10px #00bfff",
  },
  texto: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#007acc",
    marginBottom: 10,
  },
  lista: {
    listStyle: "none",
    padding: 0,
    fontSize: "16px",
    color: "#444",
    lineHeight: 1.8,
  },
  voltar: {
    marginTop: 30,
    backgroundColor: "#00bfff",
    color: "#fff",
    border: "none",
    padding: "10px 24px",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 0 10px #00bfff",
  },
};

export default Pagamentos;
