import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCooperado, updateCooperado } from "../api/cooperados";
import CooperadoForm from "../components/CooperadoForm.component";
import Layout from "../components/Layout.component";

export default function CooperadoEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [defaultValues, setDefaultValues] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCooperado(id);
      setDefaultValues(data);
    };
    fetchData();
  }, [id]);

  const onSubmit = async (data) => {
    await updateCooperado(id, data);
    navigate("/");
  };

  if (!defaultValues) return <p>Carregando...</p>;

  return (
    <Layout>
        <div className="p-4">
            <h1 className="text-2xl mb-4 font-bold">Editar Cooperado</h1>
            <CooperadoForm onSubmit={onSubmit} defaultValues={defaultValues} />
        </div>
    </Layout>
  );
}
