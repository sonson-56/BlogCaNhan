import Link from "next/link"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:text-accent transition">
          Phạm Phú Sơn
        </Link>

        <div className="flex gap-6 items-center">
          <Link href="/" className="hover:text-accent transition">
            Trang Chủ
          </Link>
          <Link href="/about" className="hover:text-accent transition">
            Về Tôi
          </Link>
          <Link href="/blog" className="hover:text-accent transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-accent transition">
            Liên Hệ
          </Link>
        </div>
      </nav>
    </header>
  )
}
