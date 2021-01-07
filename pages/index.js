import Head from "next/head";
import Search from "../components/Search";
import Footer from "../components/Footer";

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>Find Countries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container main">
        <h1 className="title">Find Countries</h1>
        <Search countries={countries} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(`https://restcountries.eu/rest/v2/all`);
  const countries = await response.json();

  return { props: { countries } };
}
