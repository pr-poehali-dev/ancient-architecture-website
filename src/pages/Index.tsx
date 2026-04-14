import { buildings } from "@/data/buildings";

const NAV_LINKS = [
  { href: "#main", label: "Главная" },
  { href: "#about", label: "О Древности" },
  { href: "#contacts", label: "Контакты" },
];

const FACTS = [
  { icon: "🗺️", text: "6 регионов мира" },
  { icon: "📅", text: "5000+ лет истории" },
  { icon: "🏗️", text: "10 построек" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background side-decor">
      <nav className="bg-card border-b border-border px-4 py-3 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <span className="text-amber-400 font-bold mr-auto">🏛️ Древность</span>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
          ))}
        </div>
      </nav>

      <header id="main" className="bg-card border-b border-border px-4 pt-12 pb-10">
        <div className="max-w-4xl mx-auto">
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

          <p id="about" className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-2">
            Этот сайт — путеводитель по десяти самым выдающимся архитектурным сооружениям,
            которые человечество создало за тысячи лет своей истории. Каждая постройка
            отражает гений своей эпохи: от египетских пирамид до римских акведуков.
          </p>
          <p className="text-muted-foreground text-sm">
            Десять шедевров архитектуры из разных уголков планеты.
          </p>

          <div className="flex gap-4 mt-6">
            {FACTS.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 bg-amber-950/40 border border-amber-800/40 rounded-full px-4 py-1.5 text-sm text-amber-400"
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-8">
            <div className="h-px w-8 bg-border" />
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-4">
          {buildings.map((b) => (
            <div key={b.id} className="bg-card rounded-xl border border-border overflow-hidden">
              <img src={b.image} alt={b.name} className="w-full h-64 object-cover" loading="lazy" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-blue-500 font-medium">{b.location}</span>
                  <span className="text-xs text-muted-foreground">{b.year}</span>
                </div>
                <h2 className="text-lg font-semibold text-foreground mb-2">{b.name}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer id="contacts" className="border-t border-border mt-8 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-amber-500 font-medium mb-4">
            Контакты
          </p>
          <div className="flex flex-row gap-3 text-sm">
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