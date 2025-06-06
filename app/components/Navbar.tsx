import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 py-4 bg-[#f6ead4]">
      <Link
        href="/"
        className="text-[#a2a595] hover:text-[#b4a284] transition-colors font-medium"
      >
        Accueil
      </Link>
      <Link
        href="/projets"
        className="text-[#a2a595] hover:text-[#b4a284] transition-colors font-medium"
      >
        Projets
      </Link>
      <Link
        href="/contact"
        className="text-[#a2a595] hover:text-[#b4a284] transition-colors font-medium"
      >
        Contact
      </Link>
    </nav>
  );
}
