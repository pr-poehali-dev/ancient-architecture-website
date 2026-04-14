import { useState } from "react";

const buildings = [
  {
    id: 1,
    name: "Пирамида Хеопса",
    location: "Египет",
    year: "~2560 до н.э.",
    description: "Единственное из семи чудес древнего мира, дошедшее до наших дней. Высота 138 метров, около 2,3 миллиона каменных блоков.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/b449713c-0b72-47d9-851f-0cf318492c52.jpg",
  },
  {
    id: 2,
    name: "Колизей",
    location: "Рим, Италия",
    year: "72–80 н.э.",
    description: "Крупнейший амфитеатр античного мира. Вмещал до 80 000 зрителей. Строился 8 лет.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/1a45b5a3-995c-401e-ab3a-7985dead0d4b.jpg",
  },
  {
    id: 3,
    name: "Мачу-Пикчу",
    location: "Перу",
    year: "~1450 н.э.",
    description: "«Затерянный город инков» на высоте 2430 метров. Построен без колеса и железных инструментов.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/e0156dc5-acdd-4036-bea4-d25be68cd43e.jpg",
  },
  {
    id: 4,
    name: "Великая Китайская стена",
    location: "Китай",
    year: "VII в. до н.э. — XVI в.",
    description: "Самое длинное сооружение в истории — более 21 000 км. Строилась 2000 лет.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/4755964d-e0d1-4ab9-830f-af93af03a117.jpg",
  },
  {
    id: 5,
    name: "Парфенон",
    location: "Афины, Греция",
    year: "447–438 до н.э.",
    description: "Храм богини Афины — шедевр дорической архитектуры. Колонны наклонены, чтобы выглядеть прямыми.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/b6fe69af-06ef-4498-bec5-020e5fe1019c.jpg",
  },
  {
    id: 6,
    name: "Стоунхендж",
    location: "Англия",
    year: "~3000–1500 до н.э.",
    description: "Мегалитический комплекс старше 5000 лет. Камни весом до 25 тонн привезены за сотни километров.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/549d9048-e986-434d-8620-ed38bf078b7c.jpg",
  },
  {
    id: 7,
    name: "Ангкор-Ват",
    location: "Камбоджа",
    year: "XII в. н.э.",
    description: "Крупнейший религиозный комплекс в мире — 162 гектара. Построен за 30 лет.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/a91ac934-db6e-4b94-b09c-c2005ddf782d.jpg",
  },
  {
    id: 8,
    name: "Петра",
    location: "Иордания",
    year: "~400 до н.э.",
    description: "«Розовый город», высеченный в скалах. Потерян для мира на 600 лет, открыт вновь в 1812 году.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/bd4655ed-0734-4923-be54-24d11ac3e807.jpg",
  },
  {
    id: 9,
    name: "Теотиуакан",
    location: "Мексика",
    year: "I–VII вв. н.э.",
    description: "Крупнейший город доколумбовой Америки. Пирамида Солнца — третья по высоте в мире.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/dbff547b-2486-484d-b360-89a080d7b803.jpg",
  },
  {
    id: 10,
    name: "Пон-дю-Гар",
    location: "Франция",
    year: "I в. н.э.",
    description: "Римский акведук высотой 49 метров. Построен без раствора — камни держатся за счёт идеальной подгонки.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/f207113f-1818-41dc-9f3f-0a2646bd9653.jpg",
  },
];

const emojis = ["🏺", "🏛️", "🗻", "🏯", "⛩️", "🪨", "🕌", "🏜️", "🌋", "🌉"];

export default function Index() {
  const [selected, setSelected] = useState<(typeof buildings)[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Шапка */}
      <header className="bg-card border-b border-border px-4 pt-12 pb-10">
        <div className="max-w-4xl mx-auto">
          {/* Декоративная линия сверху */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-300" />
            <span className="text-amber-400 text-lg">✦</span>
            <div className="h-px w-8 bg-amber-300" />
            <span className="text-amber-400 text-lg">✦</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-300" />
          </div>

          <p className="text-xs tracking-widest uppercase text-amber-500 font-medium mb-3">
            Наследие цивилизаций
          </p>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            🏛️ Великие постройки древности
          </h1>

          {/* Описание проекта */}
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-2">
            Этот сайт — путеводитель по десяти самым выдающимся архитектурным сооружениям,
            которые человечество создало за тысячи лет своей истории. Каждая постройка
            отражает гений своей эпохи: от египетских пирамид до римских акведуков.
          </p>
          <p className="text-muted-foreground text-sm">
            Нажмите на любую карточку, чтобы узнать подробнее.
          </p>

          {/* Три маленьких факта */}
          <div className="flex flex-wrap gap-4 mt-6">
            {[
              { icon: "🗺️", text: "6 регионов мира" },
              { icon: "📅", text: "5000+ лет истории" },
              { icon: "🏗️", text: "10 построек" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 bg-amber-950/40 border border-amber-800/40 rounded-full px-4 py-1.5 text-sm text-amber-400"
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Декоративная линия снизу */}
          <div className="flex items-center gap-3 mt-8">
            <div className="h-px w-8 bg-border" />
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {buildings.map((b, i) => (
            <div
              key={b.id}
              onClick={() => setSelected(b)}
              className="bg-card rounded-xl border border-border overflow-hidden cursor-pointer hover:shadow-lg hover:border-blue-500/50 transition-all"
            >
              {b.image ? (
                <img
                  src={b.image}
                  alt={b.name}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="w-full h-40 bg-muted flex items-center justify-center text-5xl">
                  {emojis[b.id - 1]}
                </div>
              )}

              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-blue-500 font-medium">
                    {b.location}
                  </span>
                  <span className="text-xs text-muted-foreground">{b.year}</span>
                </div>
                <h2 className="text-lg font-semibold text-foreground mb-2">
                  {b.name}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </main>

      {/* Модальное окно */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-lg w-full overflow-hidden shadow-xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {selected.image ? (
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-56 object-cover"
              />
            ) : (
              <div className="w-full h-32 bg-muted flex items-center justify-center text-6xl">
                {emojis[selected.id - 1]}
              </div>
            )}

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-xs text-blue-500 font-medium">
                    {selected.location}
                  </span>
                  <span className="text-xs text-muted-foreground ml-3">
                    {selected.year}
                  </span>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-muted-foreground hover:text-foreground text-xl leading-none"
                >
                  ✕
                </button>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {selected.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}