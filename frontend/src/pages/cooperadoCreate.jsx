import Layout from "../components/Layout.component";
import CooperadoForm from "../components/CooperadoForm.component";
import { useNavigate } from "react-router-dom";
import "cleave.js/dist/addons/cleave-phone.i18n";

export default function CooperadoCreate() {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log("Cooperado cadastrado (mock):", data);
      alert("Cooperado cadastrado com sucesso!");
      navigate("/list");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Falha ao salvar. Tente novamente.");
    }
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Cadastrar Novo Cooperado</h2>
      <CooperadoForm onSubmit={onSubmit} defaultValues={{}} />
    </Layout>
  );
}
