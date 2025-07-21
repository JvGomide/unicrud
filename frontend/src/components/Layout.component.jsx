import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] text-[#004B2E]">
      <header className="bg-[#006341] text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold tracking-wider">Unicred Cooperados</h1>
          <nav className="space-x-6">
            <Link to="/" className="hover:underline">Início</Link>
            <Link to="/list" className="hover:underline">Lista</Link>
            <Link to="/create" className="hover:underline">Novo</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-6">
        {children}
      </main>

      <footer className="bg-[#004B2E] text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} Unicred Cooperados — Sistema Demo
      </footer>
    </div>
  );
}
