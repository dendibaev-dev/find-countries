import Head from "next/head";
import Footer from "../../components/Footer";
import cls from "../../styles/Country.module.css";

export default function Country({ flag, name, capital, demonym }) {
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={`container ${cls.country}`}>
        <h1 className={cls.name}>{name}</h1>
        <img src={flag} className={cls.flag} />
        <p>Capital: {capital}</p>
        <p>Demonym: {demonym}</p>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/name/${params.name}`
  );
  const country = await response.json();

  return { props: { ...country[0] } };
}
