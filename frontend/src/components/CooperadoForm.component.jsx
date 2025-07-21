import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Cleave from "cleave.js/react";

const schema = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  telefone: yup.string().required("Telefone é obrigatório"),
  cpf_cnpj: yup.string().required("CPF/CNPJ é obrigatório"),
  data_nascimento: yup.date().required("Data de nascimento é obrigatória"),
  email: yup.string().email("Email inválido").nullable(),
});

export default function CooperadoForm({ onSubmit, defaultValues }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      {/* Nome */}
      <div>
        <label className="block mb-1">Nome</label>
        <input
          {...register("nome")}
          className={`border p-2 w-full rounded ${
            errors.nome ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-[#006341]`}
        />
        <p className="text-red-500 text-sm">{errors.nome?.message}</p>
      </div>

      {/* Telefone */}
      <div>
        <label className="block mb-1">Telefone</label>
        <Controller
          name="telefone"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Cleave
              value={value}
              options={{ phone: true, phoneRegionCode: "BR" }}
              onChange={(e) => onChange(e.target.value)}
              className={`border p-2 w-full rounded ${
                errors.telefone ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-[#006341]`}
            />
          )}
        />
        <p className="text-red-500 text-sm">{errors.telefone?.message}</p>
      </div>

      {/* CPF/CNPJ dinâmico */}
      <div>
        <label className="block mb-1">CPF ou CNPJ</label>
        <Controller
          name="cpf_cnpj"
          control={control}
          render={({ field: { onChange, value } }) => {
            const digits = value?.replace(/\D/g, "") || "";
            const isCNPJ = digits.length > 11;
            const blocks = isCNPJ ? [2, 3, 3, 4, 2] : [3, 3, 3, 2];
            const delimiters = isCNPJ ? [".", ".", "/", "-"] : [".", ".", "-"];

            return (
              <Cleave
                value={value}
                options={{
                  delimiters,
                  blocks,
                  numericOnly: true,
                }}
                onChange={(e) => onChange(e.target.value)}
                className={`border p-2 w-full rounded ${
                  errors.cpf_cnpj ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-[#006341]`}
              />
            );
          }}
        />
        <p className="text-red-500 text-sm">{errors.cpf_cnpj?.message}</p>
      </div>

      {/* Data de Nascimento */}
      <div>
        <label className="block mb-1">Data de Nascimento</label>
        <input
          type="date"
          {...register("data_nascimento")}
          className={`border p-2 w-full rounded ${
            errors.data_nascimento ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-[#006341]`}
        />
        <p className="text-red-500 text-sm">
          {errors.data_nascimento?.message}
        </p>
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1">Email</label>
        <input
          {...register("email")}
          className={`border p-2 w-full rounded ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-[#006341]`}
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      <button
        type="submit"
        className="bg-[#006341] hover:bg-[#004B2E] text-white px-6 py-2 rounded shadow-md transition"
      >
        Salvar
      </button>
    </form>
  );
}
