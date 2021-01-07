export default function Country(country) {
  console.log(country);
  return <img src={country[0].flag} width="40" />;
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/name/${params.name}`
  );
  const country = await response.json();

  return { props: { ...country } };
}
