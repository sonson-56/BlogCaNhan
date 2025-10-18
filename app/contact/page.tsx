"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <PageBanner title="Liên Hệ" subtitle="Hãy liên hệ với tôi qua form hoặc các kênh khác" />

        <div className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-2">Liên Hệ</h1>
            {/* Removed subtitle from here as it's now in the PageBanner */}
            {/* <p className="text-muted-foreground mb-12">Hãy liên hệ với tôi qua form hoặc các kênh khác</p> */}

            <div className="grid md:grid-cols-2 gap-8">
              {/* Form */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Gửi Tin Nhắn</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                    ✓ Cảm ơn bạn! Tin nhắn đã được gửi thành công.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Họ Tên</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Nhập tên của bạn"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Nội Dung</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Nhập nội dung tin nhắn..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    Gửi Tin Nhắn
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">📧 Email</h3>
                  <a href="mailto:son.phamtk654123@gmail.com" className="text-accent hover:underline">
                    son.phamtk654123@gmail.com
                  </a>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">👤 Mạng Xã Hội</h3>
                  <div className="space-y-3">
                    <a
                      href="https://www.facebook.com/son.pham.834723/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-accent hover:underline"
                    >
                      Facebook: son.pham.834723
                    </a>
                    <a
                      href="https://github.com/sonson-56"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-accent hover:underline"
                    >
                      GitHub: sonson-56
                    </a>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">ℹ️ Thông Tin</h3>
                  <p className="text-muted-foreground">Tôi sẽ cố gắng trả lời tin nhắn của bạn trong vòng 24 giờ.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
