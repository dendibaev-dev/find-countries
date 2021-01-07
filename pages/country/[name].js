import Head from "next/head";
import Footer from "../../components/Footer";
import cls from "../../styles/Country.module.css";

export default function Country({
  altSpellings,
  flag,
  name,
  capital,
  languages,
  demonym,
  topLevelDomain,
}) {
  return (
    <>
      <Head>
        <title>{altSpellings[1]}</title>
      </Head>
      <div className={`container ${cls.country}`}>
        <h1 className={cls.name}>{name}</h1>
        <img src={flag} className={cls.flag} />
        <div className={cls.languages}>
          Languages:{" "}
          {languages.map((lang) => (
            <p className={cls.lang}>{lang.nativeName}</p>
          ))}
        </div>
        <p>Capital: {capital}</p>
        <p>Demonym: {demonym}</p>
        <div className={cls.domains}>
          Domain:{" "}
          {topLevelDomain.map((domain) => (
            <p className={cls.domain}>{domain}</p>
          ))}
        </div>
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
