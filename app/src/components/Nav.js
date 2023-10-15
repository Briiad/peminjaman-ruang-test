import Link from "next/link"

export default function Nav() {
  return(
    <nav className="w-full h-24 p-6 px-24 flex justify-between items-center bg-white">
      {/* Logo or Title */}
      <div>
        <Link href="/">
          <h1 className="font-bold text-3xl"><span className="text-uin-green">Ruang</span>Ku<span className="text-uin-green">.</span></h1>
        </Link>
      </div>

      {/* Links */}
      <div className="flex">
        <Link href="#" className="mr-4">
          <p>Layanan</p>
        </Link>

        <Link href="#" className="mr-4">
          <p>Daftar Ruangan</p>
        </Link>

        <Link href="#" className="mr-4">
          <p>Tentang</p>
        </Link>

        <Link href="#">
          <p>Kontak</p>
        </Link>
      </div>
    </nav>
  )
}