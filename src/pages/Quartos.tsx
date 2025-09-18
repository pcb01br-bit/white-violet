import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaCalendarAlt,
  FaUser,
  FaTrash,
  FaPlus,
  FaMinus,
  FaPaw,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Quartos: React.FC = () => {
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  const [mostrarSeletor, setMostrarSeletor] = useState(false);
  const [adultos, setAdultos] = useState(0); // valor inicial alterado
  const [criancas, setCriancas] = useState(0);
  const [comodos, setComodos] = useState(0); // valor inicial alterado
  const [pets, setPets] = useState(false);

  const [quartos, setQuartos] = useState([
    { id: 1, nome: "Quarto #1", valor: "", imagens: [] as File[] },
  ]);

  const handleAdicionarQuarto = () => {
    setQuartos([
      ...quartos,
      {
        id: Date.now(),
        nome: `Quarto #${quartos.length + 1}`,
        valor: "",
        imagens: [],
      },
    ]);
  };

  const handleExcluirQuarto = (id: number) => {
    setQuartos(quartos.filter((q) => q.id !== id));
  };

  const handleImagemChange = (id: number, files: FileList | null) => {
    if (files) {
      const novasImagens = Array.from(files);
      setQuartos((prev) =>
        prev.map((q) => (q.id === id ? { ...q, imagens: novasImagens } : q))
      );
    }
  };

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <h1 style={styles.titulo}>Cadastro de Quartos</h1>

      <div style={styles.row}>
        {/* Data unificada */}
        <div style={styles.caixa}>
          <p style={styles.label}>
            <FaCalendarAlt /> Data de Check-in/Check-out
          </p>
          <DatePicker
            selected={startDate}
            onChange={(update) => setDateRange(update as [Date, Date])}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            placeholderText="Selecione o intervalo"
            className="input-date"
            style={styles.input}
          />
        </div>

        {/* Campo interativo de pessoas */}
        <div style={styles.caixa}>
          <p style={styles.label}>
            <FaUser /> Pessoas
          </p>
          <button
            style={styles.input}
            onClick={() => setMostrarSeletor(!mostrarSeletor)}
          >
            {adultos} adulto(s) · {criancas} criança(s) · {comodos} cômodo(s) ·{" "}
            {pets ? "Aceita pet" : "Sem pet"}
          </button>

          {mostrarSeletor && (
            <div style={styles.popup}>
              {[
                { label: "Adultos", valor: adultos, set: setAdultos },
                { label: "Crianças", valor: criancas, set: setCriancas },
                { label: "Cômodos", valor: comodos, set: setComodos },
              ].map(({ label, valor, set }) => (
                <div key={label} style={styles.seletorLinha}>
                  <span>{label}</span>
                  <div style={styles.botoes}>
                    <button
                      onClick={() => set((v: number) => Math.max(0, v - 1))}
                      style={styles.btnControle}
                    >
                      <FaMinus />
                    </button>
                    <span>{valor}</span>
                    <button
                      onClick={() => set((v: number) => v + 1)}
                      style={styles.btnControle}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              ))}

              {/* Checkbox Pet */}
              <div style={styles.seletorLinha}>
                <span>
                  <FaPaw style={{ marginRight: 6 }} />
                  Aceita Pet
                </span>
                <input
                  type="checkbox"
                  checked={pets}
                  onChange={() => setPets(!pets)}
                  style={{ width: 20, height: 20 }}
                />
              </div>

              <button
                onClick={() => setMostrarSeletor(false)}
                style={styles.btnOk}
              >
                OK
              </button>
            </div>
          )}
        </div>
      </div>

      <h2 style={styles.subtitulo}>Pré-visualização de Quartos</h2>
      {quartos.map((q) => (
        <div key={q.id} style={styles.quartoBox}>
          <input
            type="text"
            placeholder="Nome do Quarto"
            value={q.nome}
            onChange={(e) =>
              setQuartos((prev) =>
                prev.map((x) =>
                  x.id === q.id ? { ...x, nome: e.target.value } : x
                )
              )
            }
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Valor (R$)"
            value={q.valor}
            onChange={(e) =>
              setQuartos((prev) =>
                prev.map((x) =>
                  x.id === q.id ? { ...x, valor: e.target.value } : x
                )
              )
            }
            style={styles.input}
          />
          <input
            type="file"
            multiple
            onChange={(e) => handleImagemChange(q.id, e.target.files)}
            style={styles.input}
          />
          <div style={styles.previewImagens}>
            {q.imagens.map((img, idx) => (
              <img
                key={idx}
                src={URL.createObjectURL(img)}
                alt="Preview"
                style={styles.imgPreview}
              />
            ))}
          </div>
          <button
            onClick={() => handleExcluirQuarto(q.id)}
            style={styles.excluir}
            title="Excluir Quarto"
          >
            <FaTrash />
          </button>
        </div>
      ))}

      <button onClick={handleAdicionarQuarto} style={styles.adicionar}>
        + Adicionar Quarto
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
  },
  subtitulo: {
    color: "#007acc",
    fontWeight: "bold",
    marginTop: 30,
  },
  row: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "40px",
    marginTop: "30px",
  },
  caixa: {
    backgroundColor: "#f0faff",
    borderRadius: "12px",
    padding: "20px",
    width: "280px",
    boxShadow: "0 0 10px #00bfff",
    position: "relative",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#007acc",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "100%",
    cursor: "pointer",
    marginTop: "10px",
  },
  popup: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    boxShadow: "0 0 15px #00bfff",
    zIndex: 10,
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  seletorLinha: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botoes: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  btnControle: {
    backgroundColor: "#00bfff",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    cursor: "pointer",
  },
  btnOk: {
    marginTop: "10px",
    backgroundColor: "#007acc",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    alignSelf: "flex-end",
    fontWeight: "bold",
  },
  quartoBox: {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #00bfff",
    borderRadius: "10px",
    backgroundColor: "#f0fcff",
    width: "80%",
    marginInline: "auto",
    textAlign: "center",
    position: "relative",
  },
  previewImagens: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "10px",
  },
  imgPreview: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
    border: "2px solid #00bfff",
  },
  excluir: {
    marginTop: "10px",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "50%",
    cursor: "pointer",
  },
  adicionar: {
    marginTop: "30px",
    backgroundColor: "#00bfff",
    color: "#fff",
    border: "none",
    padding: "10px 24px",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 0 10px #00bfff",
  },
  voltar: {
    marginTop: "20px",
    backgroundColor: "#aaa",
    color: "#fff",
    border: "none",
    padding: "8px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Quartos;
