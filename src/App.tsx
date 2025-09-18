// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Páginas principais
import Login from "./pages/Login";
import RecuperarSenha from "./pages/RecuperarSenha";
import VendedorDashboard from "./pages/VendedorDashboard";
import Configuracoes from "./pages/Configuracoes";
import Quartos from "./pages/Quartos";
import Passeios from "./pages/Passeios";
import Promocoes from "./pages/Promocoes";
import ComboPersonalizado from "./pages/Combo";
import Relatorios from "./pages/Relatorios";
import RelatorioVendas from "./pages/RelatorioVendas";
import Pagamentos from "./pages/Pagamentos";
import Sobre from "./pages/Sobre";
import AdminDashboard from "./pages/AdminDashboard";
import CadastroFuncionario from "./pages/CadastroFuncionario";
import CadastroPacotes from "./pages/CadastroPacotes";

// ✅ Páginas do vendedor
import VendedorQuartos from "./pages/VendedorQuartos";
import VendedorPasseios from "./pages/VendedorPasseios";
// Futuro: import VendedorCombos from "./pages/VendedorCombos";

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />
      <Route path="/recuperarsenha" element={<RecuperarSenha />} />

      {/* Painéis */}
      <Route path="/vendedor-dashboard" element={<VendedorDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />

      {/* Admin - Funcionalidades */}
      <Route path="/cadastro-funcionario" element={<CadastroFuncionario />} />
      <Route path="/cadastro-pacotes" element={<CadastroPacotes />} />
      <Route path="/pacotes/quartos" element={<Quartos />} />
      <Route path="/pacotes/passeios" element={<Passeios />} />
      <Route path="/pacotes/promocoes" element={<Promocoes />} />
      <Route path="/pacotes/combo" element={<ComboPersonalizado />} />

      {/* Relatórios */}
      <Route path="/relatorios" element={<Relatorios />} />
      <Route path="/relatorios/vendas" element={<RelatorioVendas />} />
      <Route path="/relatorios/funcionarios" element={<RelatorioVendas />} />
      <Route path="/relatorios/mais-vendidos" element={<RelatorioVendas />} />
      <Route path="/relatorios/entrada-saida" element={<RelatorioVendas />} />
      {/* Outros */}
      <Route path="/pagamentos" element={<Pagamentos />} />
      <Route path="/configuracoes" element={<Configuracoes />} />
      <Route path="/sobre" element={<Sobre />} />

      {/* ✅ Vendedor - Funcionalidades */}
      <Route path="/vendedor/quartos" element={<VendedorQuartos />} />
      <Route path="/vendedor/passeios" element={<VendedorPasseios />} />
      <Route path="/vendedor/combos" element={<div>Combos (em breve)</div>} />
    </Routes>
  );
}

export default App;
