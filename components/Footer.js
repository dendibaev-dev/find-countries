import cls from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={cls.footer}>
      <a href="https://dendibaev.uz" className={cls.link} target="_blank">
        Dendibaev.uz
      </a>
      <a
        href="https://github.com/dendibaev-dev/countries"
        className={cls.link}
        target="_blank"
      >
        Repository on Github
      </a>
    </footer>
  );
}
