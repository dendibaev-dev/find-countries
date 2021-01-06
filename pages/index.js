import Head from "next/head";
import Search from "../components/Search";

export default function Home() {
  return (
    <>
      <Head>
        <title>Find Countries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container main">
        <h1 className="title">Find Countries</h1>
        <Search />
      </main>
      <footer className="footer">
        <a href="https://dendibaev.uz" className="link" target="_blank">
          Dendibaev.uz
        </a>
        <a
          href="https://github.com/dendibaev-dev/countries"
          className="link"
          target="_blank"
        >
          Repository on Github
        </a>
      </footer>
    </>
  );
}
