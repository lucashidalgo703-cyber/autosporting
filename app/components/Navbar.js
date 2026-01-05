import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">Inicio</Link>
      <Link href="/catalogo">Catálogo</Link>
      <Link href="/nosotros">Nosotros</Link>
      <Link href="/contacto">Contacto</Link>
    </nav>
  );
}
