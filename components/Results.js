import Link from "next/link";

export default function Results({ countries }) {
  return (
    <div className="results">
      {countries.map(({ name, alpha3Code }) => (
        <Link key={alpha3Code} href={`/country/${name}`}>
          <a className="results__item">{name}</a>
        </Link>
      ))}
    </div>
  );
}
