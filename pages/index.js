import Head from "next/head";
import Menu from "../components/Menu";

function Home() {
  return (
    <div>
      <Head>
        <meta SharSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site about Quantum Tecnlogies" />
        <meta name="author" content="Abraham Gracco" />
        <meta
          name="viewpoint"
          content="initial-scale=1.0, width=devide-width"
        />
        <title> GraccoTech - Home </title>
      </Head>
      <Menu />
      Conteúdo do topo do site
    </div>
  );
}

export default Home;
