import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CooperadoTable from "../components/CooperadoTable.component";
import Layout from "../components/Layout.component";
import { getCooperados } from "../api/cooperados";

export default function CooperadosList() {
  const [cooperados, setCooperados] = useState([]);

  // MOCK de fallback
  const mock = [
    {
      id: 1,
      nome: "João da Silva",
      telefone: "(48) 99999-1234",
      cpf_cnpj: "123.456.789-00",
    },
    {
      id: 2,
      nome: "Maria Souza",
      telefone: "(48) 98888-5678",
      cpf_cnpj: "987.654.321-00",
    },
  ];

  const loadCooperados = async () => {
    try {
      const { data } = await getCooperados();
      if (Array.isArray(data)) {
        setCooperados(data);
      } else {
        console.warn("API retornou inválido, usando mock");
        setCooperados(mock);
      }
    } catch (err) {
      console.warn("API OFFLINE ➜ usando mock");
      setCooperados(mock);
    }
  };

  useEffect(() => {
    loadCooperados();
  }, []);

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Lista de Cooperados</h2>

      {cooperados.length > 0 ? (
        <CooperadoTable cooperados={cooperados} onDelete={(id) => {
          setCooperados(prev => prev.filter(c => c.id !== id));
        }} />
      ) : (
        <p className="text-gray-600">Nenhum cooperado cadastrado ainda.</p>
      )}
    </Layout>
  );
}
