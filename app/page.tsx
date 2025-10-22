import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  const featuredPosts = [
    {
      id: "1",
      title: "Giới thiệu ngôn ngữ lập trình Java",
      excerpt:
        "Tìm hiểu về lịch sử, đặc điểm nổi bật và cách cài đặt Java",
      date: "2024-01-15",
    },
    {
      id: "2",
      title: "Cấu trúc chương trình Java và kiểu dữ liệu cơ bản",
      excerpt: "Giải thích hàm main(), các kiểu dữ liệu và quy tắc đặt tên biến",
      date: "2024-01-20",
    },
    {
      id: "3",
      title: "Cấu trúc điều khiển trong Java",
      excerpt: "Tìm hiểu về các cải tiến mới trong Next.js 15 và cách tối ưu hóa ứng dụng web của bạn.",
      date: "2024-01-25",
    },
    {
      id: "4",
      title: "Cấu trúc điều khiển trong Java",
      excerpt: "Cách sử dụng if, switch, for, while với ví dụ thực tế",
      date: "2024-02-01",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section
          className="relative py-20 px-4 md:py-32 text-center"
          style={{
            backgroundImage: "url(https://wallpapers.com/images/high/cool-vintage-gnji2h2bgsnysva1.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              Xin chào, tôi là Phạm Phú Sơn
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-2">
              Sinh viên năm cuối ngành Công nghệ Phần mềm tại HUTECH
            </p>
            <p className="text-base md:text-lg text-gray-200 mb-8">
              Tôi đam mê lập trình web và đang không ngừng học hỏi, thực hành để trở thành một Full Stack Developer. Tôi
              thích khám phá các công nghệ mới, xây dựng các ứng dụng web có tính năng hoàn chỉnh và tối ưu trải nghiệm
              người dùng.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/about"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition"
              >
                Tìm hiểu thêm
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
              >
                Đọc bài viết
              </Link>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Kỹ Năng Chính</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "💻", title: "Frontend", skills: "HTML, CSS, JavaScript" },
              { icon: "⚙️", title: "Backend", skills: "Java, Node.js" },
              { icon: "🎯", title: "Mục Tiêu", skills: "Full Stack Developer" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.skills}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Bài Viết Nổi Bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition cursor-pointer h-full">
                  <h3 className="text-xl font-semibold text-primary mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString("vi-VN")}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition inline-block"
            >
              Xem tất cả bài viết
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
