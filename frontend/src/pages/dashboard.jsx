import Layout from "../components/Layout.component";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Bem-vindo ao Sistema de Cooperados</h2>
        <p className="mb-6">Gerencie seus cooperados de forma simples e rápida.</p>
        <div className="space-x-4">
          <Link to="/create" className="bg-blue-600 text-white px-4 py-2 rounded">Cadastrar Novo</Link>
          <Link to="/list" className="bg-green-600 text-white px-4 py-2 rounded">Ver Lista</Link>
        </div>
      </div>
    </Layout>
  );
}
