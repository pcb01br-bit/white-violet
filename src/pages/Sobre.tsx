import React from "react";
import { useNavigate } from "react-router-dom";

const Sobre: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <h1 style={styles.title}>Sobre a Pousada Center</h1>
      <p style={styles.subtitle}>
        Um sistema moderno para gerenciamento de hospedagens e passeios.
      </p>

      <div style={styles.content}>
        <p>
          Este sistema foi desenvolvido com o objetivo de facilitar o controle
          de funcionários, pacotes turísticos, reservas e vendas da pousada.
        </p>
        <p>
          O administrador pode gerenciar os serviços oferecidos, enquanto os
          vendedores podem registrar atendimentos e consultar pacotes de forma
          prática e eficiente.
        </p>
        <p>
          Caso tenha dúvidas ou precise de ajuda, entre em contato com o setor
          de suporte técnico.
        </p>

        <p style={{ marginTop: "30px", fontStyle: "italic", color: "#00bfff" }}>
          Obrigado por usar nosso sistema!
        </p>
      </div>

      {/* Botão de voltar */}
      <button style={styles.button} onClick={() => navigate("/")}>
        Voltar ao Login
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "40px 20px",
    backgroundColor: "#fff",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    textAlign: "center",
    boxShadow: "0 0 20px #00bfff",
    borderRadius: "20px",
  },
  logo: {
    width: "150px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "1.8em",
    color: "#00bfff",
    fontWeight: "bold",
    textShadow: "0 0 6px #00bfff",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#444",
    marginBottom: "30px",
  },
  content: {
    maxWidth: "600px",
    margin: "0 auto",
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "40px",
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

export default Sobre;
