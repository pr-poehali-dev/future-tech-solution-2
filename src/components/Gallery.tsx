import { useState } from "react"

interface GalleryProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Gallery",
  },
  de: {
    heading: "Galerie",
  },
  ru: {
    heading: "Галерея",
  },
}

const BOOK_1 = "https://cdn.poehali.dev/projects/e935df53-eb07-4207-9984-6afe480287f8/files/5d0d6cec-b563-4aaf-9543-35378505e16e.jpg"
const BOOK_2 = "https://cdn.poehali.dev/projects/e935df53-eb07-4207-9984-6afe480287f8/files/8881ab65-8228-480c-9e05-20482ce35588.jpg"
const BOOK_3 = "https://cdn.poehali.dev/projects/e935df53-eb07-4207-9984-6afe480287f8/files/e5acccd2-9b4f-4483-95c3-ae2bccc38170.jpg"
const PHOTO_1 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF3768.JPG-Q3wacl3wQVQUhGT4jgw6Rf3OVCni3R.jpeg"
const PHOTO_2 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF3917.JPG-iPCjoD8pZGUcg5qzfRnrkOrb14tK1E.jpeg"

const galleryItems = {
  en: [
    { id: 1, image: BOOK_1, fallback: BOOK_1, title: "The Garden of Forgotten Things" },
    { id: 2, image: BOOK_2, fallback: BOOK_2, title: "Letters Never Sent" },
    { id: 3, image: BOOK_3, fallback: BOOK_3, title: "The Weight of Silence" },
    { id: 4, image: PHOTO_1, fallback: PHOTO_1, title: "Book Launch 2024" },
    { id: 5, image: PHOTO_2, fallback: PHOTO_2, title: "Book Fair 2023" },
  ],
  de: [
    { id: 1, image: BOOK_1, fallback: BOOK_1, title: "Der Garten der vergessenen Dinge" },
    { id: 2, image: BOOK_2, fallback: BOOK_2, title: "Briefe, die nie abgeschickt wurden" },
    { id: 3, image: BOOK_3, fallback: BOOK_3, title: "Das Gewicht der Stille" },
    { id: 4, image: PHOTO_1, fallback: PHOTO_1, title: "Buchpräsentation 2024" },
    { id: 5, image: PHOTO_2, fallback: PHOTO_2, title: "Buchmesse 2023" },
  ],
  ru: [
    { id: 1, image: BOOK_1, fallback: BOOK_1, title: "Сад забытых вещей" },
    { id: 2, image: BOOK_2, fallback: BOOK_2, title: "Письма, которые не были отправлены" },
    { id: 3, image: BOOK_3, fallback: BOOK_3, title: "Тяжесть тишины" },
    { id: 4, image: PHOTO_1, fallback: PHOTO_1, title: "Презентация книги 2024" },
    { id: 5, image: PHOTO_2, fallback: PHOTO_2, title: "Книжная ярмарка 2023" },
  ],
}

export default function Gallery({ language }: GalleryProps) {
  const t = translations[language]
  const items = galleryItems[language]
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const selectedItem = items.find((item) => item.id === selectedId)
  const selectedIndex = items.findIndex((item) => item.id === selectedId)

  const goToNext = () => {
    if (selectedId !== null) {
      const nextIndex = (selectedIndex + 1) % items.length
      setSelectedId(items[nextIndex].id)
    }
  }

  const goToPrev = () => {
    if (selectedId !== null) {
      const prevIndex = (selectedIndex - 1 + items.length) % items.length
      setSelectedId(items[prevIndex].id)
    }
  }

  return (
    <section id="gallery" className="py-24 md:py-36 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="group overflow-hidden bg-charcoal/5 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = item.fallback
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <small className="text-charcoal/70 font-medium">{item.title}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              onError={(e) => {
                (e.target as HTMLImageElement).src = selectedItem.fallback
              }}
              className="max-w-full max-h-full object-contain"
            />

            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={goToPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Previous"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Next"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}