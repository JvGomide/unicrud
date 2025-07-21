export default function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-xl mb-4">{title}</h2>
        {children}
        <button onClick={onClose} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">Fechar</button>
      </div>
    </div>
  );
}
