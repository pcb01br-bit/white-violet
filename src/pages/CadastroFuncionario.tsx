// CadastroFuncionario.tsx
import React, { useState, useEffect } from "react";
import { FaUserPlus, FaTrash, FaRedo } from "react-icons/fa";
import BotaoVoltar from "../components/BotaoVoltar";

interface Funcionario {
  id: number;
  nome: string;
  funcao: string;
  senha: string;
}

const CadastroFuncionario: React.FC = () => {
  const [nome, setNome] = useState("");
  const [funcao, setFuncao] = useState("vendedor");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  // Carrega os dados do localStorage ao iniciar
  useEffect(() => {
    const dadosSalvos = localStorage.getItem("funcionarios");
    if (dadosSalvos) {
      setFuncionarios(JSON.parse(dadosSalvos));
    }
  }, []);

  // Salva sempre que o array for alterado
  useEffect(() => {
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
  }, [funcionarios]);

  const handleCadastrar = () => {
    if (!nome || !senha) {
      setMensagem("Preencha todos os campos para cadastrar.");
      return;
    }

    const novo: Funcionario = {
      id: Date.now(),
      nome,
      funcao,
      senha,
    };

    setFuncionarios([...funcionarios, novo]);
    setNome("");
    setFuncao("vendedor");
    setSenha("");
    setMensagem("Funcionário cadastrado com sucesso!");
  };

  const handleRedefinirSenha = (id: number) => {
    const atualizados = funcionarios.map((f) =>
      f.id === id ? { ...f, senha: "1234" } : f
    );
    setFuncionarios(atualizados);
    setMensagem("Senha redefinida para '1234'.");
  };

  const handleExcluir = (id: number) => {
    const filtrados = funcionarios.filter((f) => f.id !== id);
    setFuncionarios(filtrados);
    setMensagem("Funcionário excluído com sucesso.");
  };

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <h1 style={styles.title}>Cadastro de Funcionários</h1>

      <div style={styles.form}>
        <input
          type="text"
          placeholder="Nome do Funcionário"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={styles.input}
        />

        <select
          value={funcao}
          onChange={(e) => setFuncao(e.target.value)}
          style={styles.input}
        >
          <option value="vendedor">Vendedor</option>
          <option value="admin">Administrador</option>
        </select>

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={styles.input}
        />

        <button style={styles.button} onClick={handleCadastrar}>
          <FaUserPlus style={styles.buttonIcon} /> Cadastrar
        </button>
      </div>

      {mensagem && <p style={styles.mensagem}>{mensagem}</p>}

      <h2 style={styles.subtitulo}>Funcionários Cadastrados</h2>

      <ul style={styles.lista}>
        {funcionarios.map((func) => (
          <li key={func.id} style={styles.item}>
            <strong>{func.nome}</strong> ({func.funcao})
            <div>
              <button
                onClick={() => handleRedefinirSenha(func.id)}
                style={{ ...styles.miniButton, backgroundColor: "#00bfff" }}
              >
                <FaRedo />
              </button>
              <button
                onClick={() => handleExcluir(func.id)}
                style={{ ...styles.miniButton, backgroundColor: "#dc3545" }}
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>

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
    width: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: "1.8em",
    color: "#00bfff",
    textShadow: "0 0 6px #00bfff",
    fontWeight: "bold",
    marginBottom: 30,
  },
  subtitulo: {
    fontSize: "1.4em",
    color: "#0077cc",
    marginTop: 40,
    marginBottom: 10,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: 400,
    margin: "0 auto",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    backgroundColor: "#00bfff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 0 8px #00bfff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  buttonIcon: {
    fontSize: "18px",
  },
  mensagem: {
    color: "#007bff",
    marginTop: 20,
    fontWeight: "bold",
  },
  lista: {
    listStyle: "none",
    padding: 0,
    marginTop: 20,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f1f9ff",
    padding: "10px 20px",
    borderRadius: "8px",
    marginBottom: "10px",
    boxShadow: "0 0 6px rgba(0, 0, 0, 0.1)",
  },
  miniButton: {
    marginLeft: "8px",
    padding: "6px 10px",
    borderRadius: "6px",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
};

export default CadastroFuncionario;
