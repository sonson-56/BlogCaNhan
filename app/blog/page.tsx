import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"

const blogPosts = [
  {
    id: 1,
    title: "Giới thiệu ngôn ngữ lập trình Java",
    excerpt: "Tìm hiểu về lịch sử, đặc điểm nổi bật và cách cài đặt Java",
    category: "Java",
    date: "2025-01-15",
  },
  {
    id: 2,
    title: "Cấu trúc chương trình Java và kiểu dữ liệu cơ bản",
    excerpt: "Giải thích hàm main(), các kiểu dữ liệu và quy tắc đặt tên biến",
    category: "Java",
    date: "2025-01-16",
  },
  {
    id: 3,
    title: "Cấu trúc điều khiển trong Java",
    excerpt: "Cách sử dụng if, switch, for, while với ví dụ thực tế",
    category: "Java",
    date: "2025-01-17",
  },
  {
    id: 4,
    title: "Lập trình hướng đối tượng trong Java",
    excerpt: "Khái niệm class, object, encapsulation, inheritance, polymorphism",
    category: "Java",
    date: "2025-01-18",
  },
  {
    id: 5,
    title: "Xử lý ngoại lệ và làm việc với file trong Java",
    excerpt: "Try-catch-finally và đọc/ghi file bằng FileReader, FileWriter",
    category: "Java",
    date: "2025-01-19",
  },
  {
    id: 6,
    title: "Giới thiệu về JavaScript và cách nhúng vào trang web",
    excerpt: "Vai trò của JS trong phát triển web và cách sử dụng",
    category: "JavaScript",
    date: "2025-01-20",
  },
  {
    id: 7,
    title: "Biến, kiểu dữ liệu và toán tử trong JavaScript",
    excerpt: "Phân biệt var, let, const và các kiểu dữ liệu cơ bản",
    category: "JavaScript",
    date: "2025-01-21",
  },
  {
    id: 8,
    title: "Cấu trúc điều khiển và hàm trong JavaScript",
    excerpt: "Sử dụng if, for, while và viết hàm với phạm vi biến",
    category: "JavaScript",
    date: "2025-01-22",
  },
  {
    id: 9,
    title: "Tương tác với DOM và sự kiện trong JavaScript",
    excerpt: "Truy cập HTML, thay đổi nội dung và thêm sự kiện",
    category: "JavaScript",
    date: "2025-01-23",
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <PageBanner title="Bài Viết Blog" subtitle="Các bài viết về Java và JavaScript" />

        <div className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition h-full cursor-pointer">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-3 py-1 bg-accent text-accent-foreground rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("vi-VN")}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-primary mb-2 hover:text-accent transition">{post.title}</h2>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
