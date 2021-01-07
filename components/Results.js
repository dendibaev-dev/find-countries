import Link from "next/link";
import cls from "../styles/Results.module.css";

export default function Results({ countries }) {
  return (
    <div className={cls.results}>
      {countries.map(({ name, alpha3Code }) => (
        <Link key={alpha3Code} href={`/country/${name}`}>
          <a className={cls.item}>{name}</a>
        </Link>
      ))}
    </div>
  );
}
