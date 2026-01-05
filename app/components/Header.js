import Navbar from "./Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="header-logo">
          AUTOSPORTING
        </Link>

        <Navbar />
      </div>
    </header>
  );
}
