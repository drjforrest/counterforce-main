import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-[#22263c] text-white py-4 px-8 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="flex items-center">
        <Image
          src="/counterforce_logo3_transparent_bg_no_text.png"
          alt="Counterforce Logo"
          width={50}
          height={50}
        />
        <span className="ml-2 text-xl font-bold">Counterforce</span>
      </Link>
      <ul className="flex space-x-6">
        <li><Link href="/" className="hover:text-[#e86530]">Home</Link></li>
        <li><Link href="/product" className="hover:text-[#e86530]">Product</Link></li>
        <li><Link href="/technology" className="hover:text-[#e86530]">Technology</Link></li>
        <li><Link href="/impact" className="hover:text-[#e86530]">Impact</Link></li>
        <li><Link href="/market" className="hover:text-[#e86530]">Market</Link></li>
        <li><Link href="/team" className="hover:text-[#e86530]">Team</Link></li>
        <li><Link href="/contact" className="hover:text-[#e86530]">Contact</Link></li>
      </ul>
    </nav>
  );
}
