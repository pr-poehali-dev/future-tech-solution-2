interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Books",
    learnMore: "Buy",
    genre: "Genre",
    year: "Year",
  },
  de: {
    heading: "Bücher",
    learnMore: "Kaufen",
    genre: "Genre",
    year: "Jahr",
  },
  ru: {
    heading: "Книги",
    learnMore: "Купить",
    genre: "Жанр",
    year: "Год",
  },
}

const books = {
  en: [
    {
      year: "2024",
      genre: "Family Saga · Historical Fiction",
      title: "The Garden of Forgotten Things",
      publisher: "Northern Lights Publishing",
      description: "A multigenerational saga spanning three continents",
    },
    {
      year: "2021",
      genre: "Short Stories",
      title: "Letters Never Sent",
      publisher: "Meridian Books",
      description: "Award-winning collection of intimate short stories",
    },
    {
      year: "2018",
      genre: "Psychological Drama",
      title: "The Weight of Silence",
      publisher: "Meridian Books",
      description: "Debut novel · Bestseller · 7 translations",
    },
  ],
  de: [
    {
      year: "2024",
      genre: "Familiensaga · Historische Fiktion",
      title: "Der Garten der vergessenen Dinge",
      publisher: "Northern Lights Verlag",
      description: "Eine mehrgenerationelle Saga auf drei Kontinenten",
    },
    {
      year: "2021",
      genre: "Kurzgeschichten",
      title: "Briefe, die nie abgeschickt wurden",
      publisher: "Meridian Bücher",
      description: "Preisgekrönte Sammlung intimer Kurzgeschichten",
    },
    {
      year: "2018",
      genre: "Psychologisches Drama",
      title: "Das Gewicht der Stille",
      publisher: "Meridian Bücher",
      description: "Debütroman · Bestseller · 7 Übersetzungen",
    },
  ],
  ru: [
    {
      year: "2024",
      genre: "Семейная сага · Историческая проза",
      title: "Сад забытых вещей",
      publisher: "Издательство «Северное сияние»",
      description: "Многопоколенческая сага на трёх континентах",
    },
    {
      year: "2021",
      genre: "Рассказы",
      title: "Письма, которые не были отправлены",
      publisher: "Издательство «Меридиан»",
      description: "Лауреат премии «Новый голос» · Сборник рассказов",
    },
    {
      year: "2018",
      genre: "Психологическая проза",
      title: "Тяжесть тишины",
      publisher: "Издательство «Меридиан»",
      description: "Дебютный роман · Бестселлер · 7 переводов",
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const bookList = books[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {bookList.map((book, idx) => (
            <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <h3 className="text-charcoal mb-1">{book.year}</h3>
                  <small className="text-taupe">{book.genre}</small>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-charcoal mb-1">{book.title}</h3>
                  <p className="text-charcoal/70 mb-1">{book.publisher}</p>
                  <small className="text-taupe">{book.description}</small>
                </div>
                <div className="flex justify-start md:justify-end">
                  <button className="text-gold hover:text-gold/80 transition-colors text-sm font-medium">
                    {t.learnMore} &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
