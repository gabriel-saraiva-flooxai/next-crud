import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
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

  function SalvarCliente(cliente:Cliente) {
    console.log(cliente);
    
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-tl from-indigo-600 to-green-400
      text-purple-100
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={() => setVisivel('form')}>
                Novo Cliente
                </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado} 
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            cliente={clientes[0]} 
            clienteMudou={SalvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}