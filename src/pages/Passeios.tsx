// src/pages/Passeios.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaPlus } from "react-icons/fa";

interface Passeio {
  id: number;
  nome: string;
  valor: string;
  descricao?: string;
  imagens: File[];
}

const Passeios: React.FC = () => {
  const navigate = useNavigate();
  const [passeios, setPasseios] = useState<Passeio[]>([
    {
      id: 1,
      nome: "",
      valor: "",
      descricao: "",
      imagens: [],
    },
  ]);

  const handleAdicionarPasseio = () => {
    setPasseios([
      ...passeios,
      {
        id: Date.now(),
        nome: "",
        valor: "",
        descricao: "",
        imagens: [],
      },
    ]);
  };

  const handleExcluir = (id: number) => {
    setPasseios(passeios.filter((p) => p.id !== id));
  };

  const handleImagemChange = (id: number, files: FileList | null) => {
    if (files) {
      const novasImagens = Array.from(files);
      setPasseios((prev) =>
        prev.map((p) => (p.id === id ? { ...p, imagens: novasImagens } : p))
      );
    }
  };

  const atualizarCampo = (id: number, campo: keyof Passeio, valor: string) => {
    setPasseios((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [campo]: valor } : p))
    );
  };

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <h1 style={styles.titulo}>Cadastro de Passeios</h1>

      {passeios.map((passeio) => (
        <div key={passeio.id} style={styles.box}>
          <input
            type="text"
            placeholder="Nome do passeio"
            value={passeio.nome}
            onChange={(e) => atualizarCampo(passeio.id, "nome", e.target.value)}
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Valor (R$)"
            value={passeio.valor}
            onChange={(e) =>
              atualizarCampo(passeio.id, "valor", e.target.value)
            }
            style={styles.input}
          />

          <textarea
            placeholder="Descrição (opcional)"
            value={passeio.descricao}
            onChange={(e) =>
              atualizarCampo(passeio.id, "descricao", e.target.value)
            }
            style={{ ...styles.input, height: 60 }}
          />

          <input
            type="file"
            multiple
            onChange={(e) => handleImagemChange(passeio.id, e.target.files)}
            style={styles.input}
          />

          <div style={styles.previewImagens}>
            {passeio.imagens.map((img, idx) => (
              <img
                key={idx}
                src={URL.createObjectURL(img)}
                alt="preview"
                style={styles.imgPreview}
              />
            ))}
          </div>

          <button
            onClick={() => handleExcluir(passeio.id)}
            style={styles.excluir}
          >
            <FaTrash />
          </button>
        </div>
      ))}

      <button onClick={handleAdicionarPasseio} style={styles.adicionar}>
        <FaPlus /> Adicionar Passeio
      </button>

      <button
        onClick={() => navigate("/cadastro-pacotes")}
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
    width: "120px",
    marginBottom: 10,
  },
  titulo: {
    color: "#00bfff",
    fontSize: "24px",
    textShadow: "0 0 5px #00bfff",
    marginBottom: 20,
  },
  box: {
    marginTop: 20,
    padding: 20,
    border: "1px solid #00bfff",
    borderRadius: 10,
    backgroundColor: "#f0fcff",
    width: "90%",
    marginInline: "auto",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 6,
    border: "1px solid #ccc",
    marginTop: 10,
  },
  previewImagens: {
    display: "flex",
    gap: 10,
    marginTop: 10,
    flexWrap: "wrap",
  },
  imgPreview: {
    width: 80,
    height: 80,
    objectFit: "cover",
    borderRadius: 6,
    border: "2px solid #00bfff",
  },
  excluir: {
    marginTop: 10,
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: 6,
    cursor: "pointer",
  },
  adicionar: {
    marginTop: 30,
    backgroundColor: "#00bfff",
    color: "#fff",
    border: "none",
    padding: "10px 24px",
    borderRadius: 10,
    fontSize: 16,
    cursor: "pointer",
    boxShadow: "0 0 10px #00bfff",
  },
  voltar: {
    marginTop: 20,
    backgroundColor: "#aaa",
    color: "#fff",
    border: "none",
    padding: "8px 20px",
    borderRadius: 8,
    cursor: "pointer",
  },
};

export default Passeios;
