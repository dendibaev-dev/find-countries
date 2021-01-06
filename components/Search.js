import Image from "next/image";

export default function Search() {
  return (
    <div className="search">
      <input className="input" placeholder="Name of country" />
      <button className="btn">
        <Image src="/images/icons/search.svg" width="24" height="24" alt="" />
      </button>
    </div>
  );
}
