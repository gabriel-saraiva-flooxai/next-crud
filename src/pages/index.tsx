import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('Calabreso', 34, '1'),
    new Cliente('Madonno', 45, '2'),
    new Cliente('CNPJoto', 12, '3'),
    new Cliente('Samsungo', 27, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`);
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-tl from-indigo-600 to-green-400
      text-purple-100
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado} 
          clienteExcluido={clienteExcluido}
      />
      </Layout>
    </div>
  )
}