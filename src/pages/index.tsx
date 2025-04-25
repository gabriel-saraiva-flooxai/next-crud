import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-tl from-indigo-600 to-green-400
      text-purple-100
    `}>
      <Layout titulo="Cadastro Simples">
        <span>Conteudo</span>
      </Layout>
    </div>
  )
}