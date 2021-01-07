import { useState } from "react";
import Image from "next/image";
import cls from "../styles/Search.module.css";
import Results from "./Results";

export default function Search({ countries }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = (value) => {
    setSearchQuery(value);

    if (value.length === 0) {
      setResults([]);
    }

    if (value.length >= 3) {
      countries.map((country) => {
        if (country.name.toLowerCase().includes(value.toLowerCase())) {
          if (results.length === 0) {
            setResults((prev) => [...prev, country]);
          } else {
            results.filter((_, __, arr) => {
              if (arr.indexOf(country) === -1) {
                setResults((prev) => [...prev, country]);
              }
            });
          }
        }
      });
    }
  };

  return (
    <div className={cls.wrapper}>
      <div
        className={cls.search}
        is-active={results.length > 0 ? "active" : null}
      >
        <input
          className={cls.input}
          value={searchQuery}
          onChange={(e) => search(e.target.value)}
          placeholder="Name of country"
        />
        <Image
          src="/images/icons/search.svg"
          className={cls.icon}
          width="24"
          height="24"
          alt=""
        />
      </div>

      {results.length > 0 && <Results countries={results} />}
    </div>
  );
}
