import { Link } from "react-router-dom";

export default function CooperadoTable({ cooperados, onDelete }) {
  return (
    <table className="min-w-full border">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Nome</th>
          <th className="border px-4 py-2">Telefone</th>
          <th className="border px-4 py-2">CPF/CNPJ</th>
          <th className="border px-4 py-2">Ações</th>
        </tr>
      </thead>
      <tbody>
        {cooperados.map((coop) => (
          <tr key={coop.id}>
            <td className="border px-4 py-2">{coop.nome}</td>
            <td className="border px-4 py-2">{coop.telefone}</td>
            <td className="border px-4 py-2">{coop.cpf_cnpj}</td>
            <td className="border px-4 py-2 space-x-2">
              <Link to={`/cooperado/${coop.id}`} className="text-[#006341] font-semibold">Detalhes</Link>
              <Link to={`/edit/${coop.id}`} className="text-blue-500">Editar</Link>
              <button onClick={() => onDelete(coop.id)} className="text-red-500">Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
