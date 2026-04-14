import React from "react";

const buildings = [
  {
    id: 1,
    name: "Пирамида Хеопса",
    location: "Египет",
    year: "~2560 до н.э.",
    description: "Единственное из семи чудес древнего мира, дошедшее до наших дней. Высота 138 метров. Около 2,3 миллиона каменных блоков весом до 80 тонн были уложены вручную с невероятной точностью. Строительство заняло около 20 лет. До XIV века оставалась самым высоким сооружением на Земле.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/b449713c-0b72-47d9-851f-0cf318492c52.jpg",
  },
  {
    id: 2,
    name: "Колизей",
    location: "Рим, Италия",
    year: "72–80 н.э.",
    description: "Крупнейший амфитеатр античного мира, вмещавший до 80 000 зрителей. Строился 8 лет. Здесь проводились гладиаторские бои, охоты на диких зверей и даже морские сражения — арена заполнялась настоящей водой. Сегодня Колизей — один из главных символов Рима и всей античной цивилизации.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/1a45b5a3-995c-401e-ab3a-7985dead0d4b.jpg",
  },
  {
    id: 3,
    name: "Мачу-Пикчу",
    location: "Перу",
    year: "~1450 н.э.",
    description: "«Затерянный город инков» на высоте 2430 метров над уровнем моря. Построен без колеса и железных инструментов. Испанские конкистадоры так и не нашли его. Город был заброшен и заново открыт лишь в 1911 году американским исследователем Хайрамом Бингемом.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/e0156dc5-acdd-4036-bea4-d25be68cd43e.jpg",
  },
  {
    id: 4,
    name: "Великая Китайская стена",
    location: "Китай",
    year: "VII в. до н.э. — XVI в.",
    description: "Самое длинное сооружение в истории человечества — более 21 000 км. Строилась на протяжении 2000 лет разными династиями. В кладку добавляли рисовый клей для прочности. Миллионы рабочих погибли при строительстве, за что стену называют «самым длинным кладбищем мира».",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/4755964d-e0d1-4ab9-830f-af93af03a117.jpg",
  },
  {
    id: 5,
    name: "Парфенон",
    location: "Афины, Греция",
    year: "447–438 до н.э.",
    description: "Храм богини Афины на вершине афинского Акрополя — совершенный пример дорической архитектуры. Колонны слегка наклонены и сужаются кверху — это оптическая иллюзия, которая делает здание идеально прямым на вид. Строительство заняло всего 9 лет.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/b6fe69af-06ef-4498-bec5-020e5fe1019c.jpg",
  },
  {
    id: 6,
    name: "Стоунхендж",
    location: "Англия",
    year: "~3000–1500 до н.э.",
    description: "Мегалитический комплекс, возраст которого превышает 5000 лет. Камни весом до 25 тонн были доставлены за сотни километров. Точное предназначение до сих пор неизвестно — возможно, солнечная обсерватория или культовое место для ритуалов.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/549d9048-e986-434d-8620-ed38bf078b7c.jpg",
  },
  {
    id: 7,
    name: "Ангкор-Ват",
    location: "Камбоджа",
    year: "XII в. н.э.",
    description: "Крупнейший религиозный комплекс в мире — площадь 162 гектара. Построен за 30 лет при короле Сурьявармане II. Вырезанные на стенах рельефы тянутся на 600 метров. Изначально посвящён индуистскому богу Вишну, позднее стал буддийским храмом.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/a91ac934-db6e-4b94-b09c-c2005ddf782d.jpg",
  },
  {
    id: 8,
    name: "Петра",
    location: "Иордания",
    year: "~400 до н.э.",
    description: "«Розовый город», высеченный прямо в скалах набатеями. Содержал сложнейшую систему водоснабжения для 30 000 жителей посреди пустыни. Был потерян для западной цивилизации на 600 лет и вновь открыт швейцарским путешественником в 1812 году.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/bd4655ed-0734-4923-be54-24d11ac3e807.jpg",
  },
  {
    id: 9,
    name: "Теотиуакан",
    location: "Мексика",
    year: "I–VII вв. н.э.",
    description: "Крупнейший город доколумбовой Америки с населением до 200 000 человек. Пирамида Солнца — третья по высоте в мире. Имя создателей неизвестно: когда ацтеки нашли город, он уже был заброшен. Они дали ему название «место, где рождаются боги».",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/dbff547b-2486-484d-b360-89a080d7b803.jpg",
  },
  {
    id: 10,
    name: "Пон-дю-Гар",
    location: "Франция",
    year: "I в. н.э.",
    description: "Трёхуровневый римский акведук высотой 49 метров — шедевр инженерии. Построен без раствора: камни держатся лишь за счёт идеальной подгонки друг к другу. Подавал 40 000 кубометров воды в сутки городу Ниму на протяжении нескольких столетий.",
    image: "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/f207113f-1818-41dc-9f3f-0a2646bd9653.jpg",
  },
];

const emojis = ["🏺", "🏛️", "🗻", "🏯", "⛩️", "🪨", "🕌", "🏜️", "🌋", "🌉"];

export default function Index() {

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
        <div className="grid grid-cols-1 gap-4">
          {buildings.map((b, i) => (
            <div
              key={b.id}
              className="bg-card rounded-xl border border-border overflow-hidden"
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
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </main>

      {/* Футер с контактами */}
      <footer className="border-t border-border mt-8 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-amber-500 font-medium mb-4">
            Контакты
          </p>
          <div className="flex flex-col sm:flex-row gap-3 text-sm">
            <span className="border border-border rounded-lg px-4 py-2 text-muted-foreground cursor-default">
              MAX: @ancientworld
            </span>
            <span className="border border-border rounded-lg px-4 py-2 text-muted-foreground cursor-default">
              Telegram: @ancientworld
            </span>
            <span className="border border-border rounded-lg px-4 py-2 text-muted-foreground cursor-default">
              Почта: ancientworld@yandex.ru
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}