import Layout from "../components/Layout.component";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CooperadoDetail() {
  const { id } = useParams();
  const [cooperado, setCooperado] = useState(null);

  // Simulando dados mock
  const mock = [
    { id: 1, nome: "João da Silva", telefone: "(48) 99999-1234", cpf_cnpj: "123.456.789-00", email: "joao@unicred.com", data_nascimento: "1990-05-01" },
    { id: 2, nome: "Maria Souza", telefone: "(48) 98888-5678", cpf_cnpj: "987.654.321-00", email: "maria@unicred.com", data_nascimento: "1985-09-15" },
  ];

  useEffect(() => {
    const selected = mock.find((c) => c.id === parseInt(id));
    setCooperado(selected);
  }, [id]);

  if (!cooperado) return (
    <Layout>
      <p>Carregando...</p>
    </Layout>
  );

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Detalhes do Cooperado</h2>
      <div className="bg-white rounded shadow-md p-6">
        <p><strong>Nome:</strong> {cooperado.nome}</p>
        <p><strong>Telefone:</strong> {cooperado.telefone}</p>
        <p><strong>CPF/CNPJ:</strong> {cooperado.cpf_cnpj}</p>
        <p><strong>Email:</strong> {cooperado.email || "-"}</p>
        <p><strong>Data de Nascimento:</strong> {cooperado.data_nascimento}</p>
      </div>

      <Link
        to="/list"
        className="inline-block mt-4 bg-[#006341] hover:[background:#004B2E] text-white px-4 py-2 rounded shadow-md transition"
      >
        Voltar para Lista
      </Link>
    </Layout>
  );
}
