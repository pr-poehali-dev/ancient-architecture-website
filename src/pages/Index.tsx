import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const STRUCTURES = [
  {
    id: 1,
    name: "Пирамида Хеопса",
    location: "Гиза, Египет",
    year: "~2560 до н.э.",
    region: "Африка",
    description:
      "Единственное из семи чудес древнего мира, сохранившееся до наших дней. Высота 138 метров. Около 2,3 миллиона каменных блоков весом до 80 тонн каждый были уложены вручную с невероятной точностью.",
    image:
      "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/b449713c-0b72-47d9-851f-0cf318492c52.jpg",
    tag: "Чудо света",
  },
  {
    id: 2,
    name: "Колизей",
    location: "Рим, Италия",
    year: "72–80 н.э.",
    region: "Европа",
    description:
      "Крупнейший амфитеатр античного мира вмещал до 80 000 зрителей. Строился 8 лет. Гладиаторские бои, морские сражения — арена была залита настоящей водой. Сегодня Колизей — символ вечного Рима.",
    image:
      "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/1a45b5a3-995c-401e-ab3a-7985dead0d4b.jpg",
    tag: "Амфитеатр",
  },
  {
    id: 3,
    name: "Мачу-Пикчу",
    location: "Куско, Перу",
    year: "~1450 н.э.",
    region: "Южная Америка",
    description:
      "«Затерянный город инков» на высоте 2430 метров над уровнем моря. Построен без колеса и железных инструментов. Испанские конкистадоры так и не нашли его. Город был заброшен — и заново открыт лишь в 1911 году.",
    image:
      "https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/e0156dc5-acdd-4036-bea4-d25be68cd43e.jpg",
    tag: "Чудо света",
  },
  {
    id: 4,
    name: "Великая Китайская стена",
    location: "Китай",
    year: "VII в. до н.э. — XVI в. н.э.",
    region: "Азия",
    description:
      "Самое длинное сооружение в истории человечества — более 21 000 км. Строилась на протяжении 2000 лет. В кладку добавляли рисовый клей для прочности. Миллионы рабочих погибли при строительстве.",
    image: "",
    tag: "Оборонительное",
  },
  {
    id: 5,
    name: "Парфенон",
    location: "Афины, Греция",
    year: "447–438 до н.э.",
    region: "Европа",
    description:
      "Храм богини Афины на афинском Акрополе. Пример совершенства дорической архитектуры. Колонны слегка наклонены и сужаются кверху — оптическая иллюзия, делающая здание идеально прямым на вид.",
    image: "",
    tag: "Храм",
  },
  {
    id: 6,
    name: "Стоунхендж",
    location: "Уилтшир, Англия",
    year: "~3000–1500 до н.э.",
    region: "Европа",
    description:
      "Мегалитический комплекс, возраст которого превышает 5000 лет. Камни весом до 25 тонн были доставлены за сотни километров. Точное предназначение до сих пор неизвестно — солнечная обсерватория или культовое место.",
    image: "",
    tag: "Мегалит",
  },
  {
    id: 7,
    name: "Ангкор-Ват",
    location: "Сиемреап, Камбоджа",
    year: "XII в. н.э.",
    region: "Азия",
    description:
      "Крупнейший религиозный комплекс в мире — площадь 162 гектара. Построен за 30 лет при короле Сурьявармане II. Вырезанные рельефы в общей длине — около 600 метров. Изначально посвящён Вишну, затем стал буддийским.",
    image: "",
    tag: "Храм",
  },
  {
    id: 8,
    name: "Петра",
    location: "Маан, Иордания",
    year: "~400 до н.э.",
    region: "Ближний Восток",
    description:
      "«Розовый город», высеченный прямо в скалах набатеями. Содержал сложнейшую систему водоснабжения для 30 000 жителей в пустыне. Был потерян для западной цивилизации 600 лет — вновь открыт в 1812 году.",
    image: "",
    tag: "Чудо света",
  },
  {
    id: 9,
    name: "Теотиуакан",
    location: "Мехико, Мексика",
    year: "I–VII вв. н.э.",
    region: "Северная Америка",
    description:
      "Крупнейший город доколумбовой Америки с населением до 200 000 человек. Пирамида Солнца — третья по высоте в мире. Имя создателей неизвестно: когда ацтеки нашли город, он уже был заброшен.",
    image: "",
    tag: "Город",
  },
  {
    id: 10,
    name: "Акведук Пон-дю-Гар",
    location: "Гар, Франция",
    year: "I в. н.э.",
    region: "Европа",
    description:
      "Трёхуровневый акведук высотой 49 метров — шедевр римской инженерии. Построен без раствора: камни держатся лишь за счёт идеальной подгонки. Подавал 40 000 кубометров воды в сутки городу Ниму.",
    image: "",
    tag: "Инженерия",
  },
];

const SECTIONS = ["главная", "о проекте", "галерея"];

type Section = "главная" | "о проекте" | "галерея";

function highlight(text: string, query: string): string {
  if (!query.trim()) return text;
  const regex = new RegExp(
    `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "gi"
  );
  return text.replace(regex, "<mark>$1</mark>");
}

const bgColors = [
  "from-amber-950/80 to-stone-900",
  "from-red-950/80 to-stone-900",
  "from-emerald-950/80 to-stone-900",
  "from-stone-900 to-zinc-900",
  "from-zinc-900 to-stone-900",
  "from-slate-900 to-stone-900",
  "from-teal-950/80 to-stone-900",
  "from-rose-950/80 to-stone-900",
  "from-orange-950/80 to-stone-900",
  "from-blue-950/80 to-stone-900",
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("главная");
  const [search, setSearch] = useState("");
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = STRUCTURES.filter((s) => {
    const q = search.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.location.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.region.toLowerCase().includes(q) ||
      s.tag.toLowerCase().includes(q)
    );
  });

  const selected = STRUCTURES.find((s) => s.id === selectedCard);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCard(null);
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-[hsl(43,65%,60%)] rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-[hsl(43,65%,60%)]" />
            </div>
            <span className="font-cormorant text-lg tracking-[0.15em] text-[hsl(43,65%,60%)] uppercase">
              Antiqua
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {SECTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSection(s as Section)}
                className={`nav-link text-sm tracking-widest uppercase font-golos transition-colors ${
                  activeSection === s
                    ? "text-[hsl(43,65%,60%)] active"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 px-6 py-4 flex flex-col gap-4">
            {SECTIONS.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setActiveSection(s as Section);
                  setMenuOpen(false);
                }}
                className={`text-left text-sm tracking-widest uppercase font-golos transition-colors ${
                  activeSection === s
                    ? "text-[hsl(43,65%,60%)]"
                    : "text-muted-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ───── ГЛАВНАЯ ───── */}
      {activeSection === "главная" && (
        <div>
          {/* Hero */}
          <div className="relative h-screen flex items-center justify-center overflow-hidden grain">
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[20s]"
              style={{
                backgroundImage: `url(https://cdn.poehali.dev/projects/b661f13e-003a-4afa-b085-4c32749f3248/files/b449713c-0b72-47d9-851f-0cf318492c52.jpg)`,
                filter: "brightness(0.3)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />

            <div className="relative z-10 text-center px-6 animate-fade-in">
              <p className="text-xs tracking-[0.4em] uppercase text-[hsl(43,65%,60%)] mb-6 font-golos">
                Наследие цивилизаций
              </p>
              <h1 className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-6">
                Великие
                <br />
                <em className="italic text-[hsl(43,65%,60%)]">Постройки</em>
                <br />
                Древности
              </h1>
              <div className="gold-line w-24 mx-auto my-8" />
              <p className="text-muted-foreground text-lg font-light max-w-lg mx-auto font-golos">
                Десять архитектурных чудес, изменивших понимание возможного
              </p>
              <button
                onClick={() => {
                  document
                    .getElementById("structures")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-12 inline-flex items-center gap-3 border border-[hsl(43,65%,60%,0.4)] px-8 py-3 text-sm tracking-widest uppercase text-[hsl(43,65%,60%)] hover:bg-[hsl(43,65%,60%,0.1)] transition-all font-golos"
              >
                Исследовать
                <Icon name="ArrowDown" size={14} />
              </button>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
              <div className="w-px h-12 bg-gradient-to-b from-[hsl(43,65%,60%,0.6)] to-transparent" />
            </div>
          </div>

          {/* Search + Grid */}
          <div id="structures" className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex items-center gap-4 mb-12 flex-wrap">
              <div className="relative flex-1 min-w-[240px] max-w-md">
                <Icon
                  name="Search"
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  ref={searchRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Поиск по постройкам..."
                  className="w-full bg-card border border-border pl-11 pr-12 py-3 text-sm font-golos placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(43,65%,60%,0.5)] transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground/50 hidden md:block">
                  ⌘K
                </span>
              </div>
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Сбросить
                </button>
              )}
              <span className="text-xs text-muted-foreground ml-auto font-golos">
                {filtered.length} из {STRUCTURES.length}
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground font-cormorant text-3xl italic">
                Ничего не найдено
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((s, idx) => (
                  <div
                    key={s.id}
                    onClick={() => setSelectedCard(s.id)}
                    className="structure-card animate-fade-in-up opacity-0 cursor-pointer bg-card border border-border overflow-hidden group relative"
                    style={{
                      animationFillMode: "forwards",
                      animationDelay: `${idx * 0.06}s`,
                    }}
                  >
                    <div
                      className={`relative h-52 overflow-hidden bg-gradient-to-br ${bgColors[s.id - 1]}`}
                    >
                      {s.image ? (
                        <img
                          src={s.image}
                          alt={s.name}
                          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="font-cormorant text-8xl text-white/10 font-light">
                            {s.id}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 text-xs tracking-widest uppercase border border-[hsl(43,65%,60%,0.4)] text-[hsl(43,65%,60%)] px-2 py-1 bg-background/60 backdrop-blur-sm font-golos">
                        {s.tag}
                      </span>
                    </div>

                    <div className="p-5 relative">
                      <span className="structure-number">
                        {String(s.id).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 font-golos">
                        <Icon name="MapPin" size={11} />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: highlight(s.location, search),
                          }}
                        />
                        <span className="ml-auto">{s.year}</span>
                      </div>
                      <h3
                        className="font-cormorant text-2xl font-light mb-3 group-hover:text-[hsl(43,65%,60%)] transition-colors"
                        dangerouslySetInnerHTML={{
                          __html: highlight(s.name, search),
                        }}
                      />
                      <p
                        className="text-sm text-muted-foreground leading-relaxed line-clamp-3 font-golos"
                        dangerouslySetInnerHTML={{
                          __html: highlight(s.description, search),
                        }}
                      />
                      <div className="mt-4 flex items-center gap-2 text-xs text-[hsl(43,65%,60%)] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Подробнее</span>
                        <Icon name="ArrowRight" size={12} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="border-t border-border/50">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-3 gap-8 text-center">
              {[
                { value: "10", label: "Чудес" },
                { value: "5000+", label: "Лет истории" },
                { value: "6", label: "Регионов мира" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-cormorant text-5xl font-light text-[hsl(43,65%,60%)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-widest uppercase text-muted-foreground font-golos">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ───── О ПРОЕКТЕ ───── */}
      {activeSection === "о проекте" && (
        <div className="min-h-screen pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <p
              className="text-xs tracking-[0.4em] uppercase text-[hsl(43,65%,60%)] mb-4 font-golos animate-fade-in-up opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0s" }}
            >
              О проекте
            </p>
            <h2
              className="font-cormorant text-6xl font-light mb-8 animate-fade-in-up opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.1s" }}
            >
              Зачем это{" "}
              <em className="italic text-[hsl(43,65%,60%)]">создано</em>
            </h2>
            <div
              className="gold-line w-16 mb-10 animate-fade-in-up opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.15s" }}
            />

            <div
              className="space-y-6 text-muted-foreground font-golos leading-relaxed animate-fade-in-up opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
            >
              <p className="text-lg text-foreground/80">
                Этот сайт — путеводитель по десяти величайшим архитектурным
                достижениям человечества. От египетских пирамид до перуанского
                Мачу-Пикчу — каждая постройка несёт в себе загадки, инженерный
                гений и историческую глубину.
              </p>
              <p>
                Мы собрали постройки, которые пережили тысячелетия, войны и
                катастрофы. Они стоят сегодня как молчаливые свидетели эпох,
                когда у людей не было современных технологий — но было нечто
                большее: воля, знания и стремление к вечному.
              </p>
              <p>
                Используйте поиск на главной странице, чтобы быстро найти
                интересующую вас постройку по названию, местоположению или
                историческому периоду. Нажмите на карточку — откроется
                подробное описание.
              </p>
            </div>

            <div
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
            >
              {[
                { icon: "Globe", title: "6 регионов", desc: "Постройки со всего мира" },
                { icon: "Clock", title: "5000 лет", desc: "Охваченная история" },
                { icon: "BookOpen", title: "Только факты", desc: "Достоверные данные" },
              ].map((item) => (
                <div key={item.title} className="border border-border p-6 bg-card">
                  <Icon
                    name={item.icon as "Globe"}
                    size={20}
                    className="text-[hsl(43,65%,60%)] mb-4"
                  />
                  <div className="font-cormorant text-xl mb-1">{item.title}</div>
                  <div className="text-sm text-muted-foreground font-golos">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ───── ГАЛЕРЕЯ ───── */}
      {activeSection === "галерея" && (
        <div className="min-h-screen pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <p
              className="text-xs tracking-[0.4em] uppercase text-[hsl(43,65%,60%)] mb-4 font-golos animate-fade-in-up opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0s" }}
            >
              Галерея
            </p>
            <h2
              className="font-cormorant text-6xl font-light mb-8 animate-fade-in-up opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.1s" }}
            >
              Все <em className="italic text-[hsl(43,65%,60%)]">постройки</em>
            </h2>
            <div className="gold-line w-16 mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {STRUCTURES.map((s, idx) => (
                <div
                  key={s.id}
                  onClick={() => setSelectedCard(s.id)}
                  className="structure-card animate-fade-in-up opacity-0 cursor-pointer group flex gap-6 border border-border bg-card p-5 hover:border-[hsl(43,65%,60%,0.3)] transition-colors"
                  style={{
                    animationFillMode: "forwards",
                    animationDelay: `${idx * 0.06}s`,
                  }}
                >
                  <div
                    className={`flex-shrink-0 w-24 h-24 overflow-hidden bg-gradient-to-br ${bgColors[s.id - 1]} relative`}
                  >
                    {s.image ? (
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-cormorant text-3xl text-white/20">
                          {s.id}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1 font-golos">
                      <Icon name="MapPin" size={10} />
                      <span>{s.location}</span>
                      <span className="ml-auto text-[hsl(43,65%,60%,0.7)]">
                        {s.year}
                      </span>
                    </div>
                    <h3 className="font-cormorant text-2xl font-light mb-2 group-hover:text-[hsl(43,65%,60%)] transition-colors truncate">
                      {s.name}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 font-golos leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-muted-foreground text-sm italic">
            «Архитектура — это застывшая музыка» — Фридрих Шеллинг
          </span>
          <span className="text-xs text-muted-foreground/50 tracking-widest uppercase font-golos">
            Antiqua · {new Date().getFullYear()}
          </span>
        </div>
      </footer>

      {/* MODAL */}
      {selectedCard && selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCard(null)}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
          <div
            className="relative z-10 bg-card border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up opacity-0"
            style={{ animationFillMode: "forwards" }}
            onClick={(e) => e.stopPropagation()}
          >
            {selected.image ? (
              <div className="h-64 overflow-hidden relative">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
            ) : (
              <div
                className={`h-40 bg-gradient-to-br ${bgColors[selected.id - 1]} flex items-center justify-center`}
              >
                <span className="font-cormorant text-9xl text-white/10 font-light">
                  {selected.id}
                </span>
              </div>
            )}

            <div className="p-8">
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs tracking-widest uppercase border border-[hsl(43,65%,60%,0.4)] text-[hsl(43,65%,60%)] px-2 py-1 font-golos">
                  {selected.tag}
                </span>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="X" size={18} />
                </button>
              </div>

              <h2 className="font-cormorant text-5xl font-light mt-4 mb-2">
                {selected.name}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 font-golos">
                <span className="flex items-center gap-1">
                  <Icon name="MapPin" size={13} />
                  {selected.location}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="Calendar" size={13} />
                  {selected.year}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="Globe" size={13} />
                  {selected.region}
                </span>
              </div>

              <div className="gold-line w-12 mb-6" />

              <p className="text-muted-foreground font-golos leading-relaxed text-base">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
