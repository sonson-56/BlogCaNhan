interface PageBannerProps {
  title: string
  subtitle?: string
}

export function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section
      className="relative py-16 px-4 md:py-24 text-center"
      style={{
        backgroundImage: "url(https://wallpapers.com/images/high/cool-vintage-gnji2h2bgsnysva1.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-balance">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-gray-100">{subtitle}</p>}
      </div>
    </section>
  )
}
