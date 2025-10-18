import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <PageBanner title="About" subtitle="Phạm Phú Sơn | HUTECH" />

        <div className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-card border border-border rounded-lg p-6 sticky top-4">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden border-4 border-accent">
                    <Image
                      src="/images/avatar.jpg"
                      alt="Phạm Phú Sơn"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-center text-primary mb-4">Phạm Phú Sơn</h2>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <strong>Trường:</strong> HUTECH
                    </p>
                    <p>
                      <strong>Khóa:</strong> 2022
                    </p>
                    <p>
                      <strong>Chuyên ngành:</strong> Công nghệ Phần mềm
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-2 space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Giới Thiệu Cá Nhân</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Tôi đam mê lập trình web và đang không ngừng học hỏi, thực hành để trở thành một Full Stack
                    Developer. Tôi thích khám phá các công nghệ mới, xây dựng các ứng dụng web có tính năng hoàn chỉnh
                    và tối ưu trải nghiệm người dùng.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Kỹ Năng Chuyên Môn</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {["HTML", "CSS", "JavaScript", "Java", "Node.js", "React"].map((skill) => (
                      <div key={skill} className="bg-card border border-border rounded-lg p-3 text-center">
                        <span className="font-semibold text-secondary">{skill}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Kỹ Năng Mềm</h2>
                  <ul className="space-y-2">
                    {[
                      "Làm việc nhóm hiệu quả",
                      "Giao tiếp rõ ràng và chuyên nghiệp",
                      "Giải quyết vấn đề sáng tạo",
                      "Quản lý thời gian tốt",
                    ].map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="bg-card border border-border rounded-lg p-6">
                  <p className="text-lg italic text-secondary">
                    "Tôi tin rằng lập trình không chỉ là viết code, mà là giải quyết vấn đề và tạo ra giá trị cho người
                    dùng."
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
