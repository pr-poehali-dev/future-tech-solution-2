interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "About the Author",
    paragraphs: [
      "Elena Sorokina is a contemporary writer whose work spans literary fiction, psychological drama, and philosophical prose. She began her literary journey at the Moscow Literary Institute, where she studied under renowned authors and discovered her unique voice — intimate, precise, and deeply human.",
      "Her debut novel 'The Weight of Silence' was published in 2018 and immediately attracted attention from critics and readers alike. The book spent twelve weeks on national bestseller lists and was translated into seven languages, opening doors to the international literary community.",
      "Elena's writing is distinguished by her ability to find the extraordinary within the ordinary — to illuminate the hidden depths of everyday human experience. Her characters are vivid and complex, her plots deceptively simple, her prose luminous and precise.",
      "In 2021, she was awarded the prestigious 'New Voice' literary prize for her short story collection 'Letters Never Sent.' The collection was praised for its emotional range, from tender comedy to devastating tragedy, often within the same story.",
      "Her most recent novel 'The Garden of Forgotten Things' (2024) has been described by critics as her most ambitious work yet — a multigenerational family saga spanning three continents and a hundred years of history.",
      "When not writing, Elena leads creative writing workshops and masterclasses, believing passionately that storytelling is a skill that can be taught, nurtured, and shared.",
    ],
  },
  de: {
    heading: "Über die Autorin",
    paragraphs: [
      "Elena Sorokina ist eine zeitgenössische Schriftstellerin, deren Werk literarische Fiktion, psychologisches Drama und philosophische Prosa umfasst. Sie begann ihre literarische Reise am Moskauer Literaturinstitut, wo sie unter renommierten Autoren studierte.",
      "Ihr Debütroman 'Das Gewicht der Stille' wurde 2018 veröffentlicht und zog sofort die Aufmerksamkeit von Kritikern und Lesern auf sich. Das Buch verbrachte zwölf Wochen auf nationalen Bestsellerlisten und wurde in sieben Sprachen übersetzt.",
      "Elenas Schreiben zeichnet sich durch ihre Fähigkeit aus, das Außergewöhnliche im Gewöhnlichen zu finden — die verborgenen Tiefen alltäglicher menschlicher Erfahrung zu beleuchten.",
      "Im Jahr 2021 wurde sie mit dem renommierten Literaturpreis 'Neue Stimme' für ihre Kurzgeschichtensammlung 'Briefe, die nie abgeschickt wurden' ausgezeichnet.",
      "Ihr neuester Roman 'Der Garten der vergessenen Dinge' (2024) wird von Kritikern als ihr bislang ehrgeizigstes Werk bezeichnet — eine mehrgenerationelle Familiensaga.",
      "Wenn sie nicht schreibt, leitet Elena kreative Schreibworkshops und Meisterkurse und glaubt leidenschaftlich daran, dass Geschichtenerzählen eine Fähigkeit ist, die gelehrt werden kann.",
    ],
  },
  ru: {
    heading: "Об авторе",
    paragraphs: [
      "Елена Сорокина — современный писатель, чьё творчество охватывает литературную прозу, психологическую драму и философскую эссеистику. Она начала свой литературный путь в Литературном институте имени Горького, где обучалась у именитых мастеров слова и обрела свой неповторимый голос — камерный, точный и глубоко человечный.",
      "Её дебютный роман «Тяжесть тишины» вышел в 2018 году и сразу привлёк внимание критиков и читателей. Книга двенадцать недель держалась в списках национальных бестселлеров и была переведена на семь языков, открыв автору двери в международное литературное сообщество.",
      "Особенность прозы Елены — умение найти исключительное в обыденном, высветить скрытые глубины повседневного человеческого опыта. Её персонажи живые и сложные, сюжеты обманчиво просты, а язык — точен и образен.",
      "В 2021 году она была удостоена престижной премии «Новый голос» за сборник рассказов «Письма, которые не были отправлены». Сборник был отмечен критиками за широкий эмоциональный диапазон — от нежной комедии до сокрушительной трагедии, нередко в рамках одного рассказа.",
      "Её последний роман «Сад забытых вещей» (2024) критики называют самым амбициозным произведением автора — многопоколенческая семейная сага, охватывающая три континента и сто лет истории.",
      "В свободное от писательства время Елена ведёт мастер-классы по творческому письму, искренне веря в то, что искусство рассказывать истории можно передать другим.",
    ],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
