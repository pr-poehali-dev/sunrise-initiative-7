const weekMenu = [
  {
    day: "Понедельник",
    breakfast: [
      { name: "Каша овсяная с маслом", price: "35 ₽" },
      { name: "Яйцо варёное", price: "15 ₽" },
      { name: "Чай с сахаром", price: "10 ₽" },
    ],
    lunch: [
      { name: "Борщ со сметаной", price: "65 ₽" },
      { name: "Котлета + пюре картофельное", price: "95 ₽" },
      { name: "Компот из сухофруктов", price: "20 ₽" },
    ],
  },
  {
    day: "Вторник",
    breakfast: [
      { name: "Блинчики со сгущёнкой", price: "50 ₽" },
      { name: "Какао с молоком", price: "20 ₽" },
    ],
    lunch: [
      { name: "Суп куриный с лапшой", price: "60 ₽" },
      { name: "Гречка + гуляш", price: "90 ₽" },
      { name: "Кисель", price: "15 ₽" },
    ],
  },
  {
    day: "Среда",
    breakfast: [
      { name: "Творожная запеканка со сметаной", price: "55 ₽" },
      { name: "Чай с лимоном", price: "10 ₽" },
    ],
    lunch: [
      { name: "Рассольник", price: "60 ₽" },
      { name: "Рыба запечённая + рис", price: "100 ₽" },
      { name: "Компот из яблок", price: "20 ₽" },
    ],
  },
  {
    day: "Четверг",
    breakfast: [
      { name: "Каша манная с вареньем", price: "35 ₽" },
      { name: "Пирожок с капустой", price: "30 ₽" },
      { name: "Чай", price: "10 ₽" },
    ],
    lunch: [
      { name: "Щи из свежей капусты", price: "60 ₽" },
      { name: "Тефтели + макароны", price: "90 ₽" },
      { name: "Кисель", price: "15 ₽" },
    ],
  },
  {
    day: "Пятница",
    breakfast: [
      { name: "Омлет с сыром", price: "50 ₽" },
      { name: "Хлеб с маслом", price: "10 ₽" },
      { name: "Какао", price: "20 ₽" },
    ],
    lunch: [
      { name: "Гороховый суп", price: "55 ₽" },
      { name: "Котлета куриная + овощи тушёные", price: "95 ₽" },
      { name: "Компот", price: "20 ₽" },
    ],
  },
];

export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ГИМНАЗИЯ*ВКУС</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Режим</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Расписание</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              СЫТНЫЙ
              <br />
              УЧЕБНЫЙ <span>день</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Столовая гимназии города Суворова. Кормим вкусно, честно и по-домашнему — чтобы на уроках думалось, а не урчало.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Посмотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Режим работы
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ГОТОВИМ
              <br />
              С ДУШОЙ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ГИМНАЗИЯ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ВКУСНО!
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * СТОЛОВАЯ ГИМНАЗИИ СУВОРОВА * ЗАВТРАК С 8:00 * ОБЕД С 12:00 * СВЕЖИЕ ПРОДУКТЫ * БЕЗ КОНСЕРВАНТОВ * ГОТОВИМ С ДУШОЙ *
            СТОЛОВАЯ ГИМНАЗИИ СУВОРОВА * ЗАВТРАК С 8:00 * ОБЕД С 12:00 * СВЕЖИЕ ПРОДУКТЫ * БЕЗ КОНСЕРВАНТОВ * ГОТОВИМ С ДУШОЙ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">МЕНЮ ДНЯ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Полное меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит</span>
              <img
                src="https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Борщ"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Борщ со сметаной</h3>
                  <span className="price">65 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Наваристый борщ со свежей свёклой, капустой и ложкой домашней сметаны.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Любимое
              </span>
              <img
                src="https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Котлета с пюре"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Котлета + пюре</h3>
                  <span className="price">95 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Сочная котлета из свинины с нежным картофельным пюре и подливой.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Свежее
              </span>
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Выпечка"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Пирожок с капустой</h3>
                  <span className="price">30 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Свежая выпечка каждое утро. Пышное тесто, сочная начинка — как у бабушки.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ borderTop: "var(--border)" }}>
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            МЕНЮ НА НЕДЕЛЮ
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {weekMenu.map((day) => (
              <div key={day.day} style={{ border: "var(--border)", background: "white", boxShadow: "4px 4px 0 #1a1a1a" }}>
                <div style={{ background: "var(--dark)", color: "white", padding: "14px 20px" }}>
                  <span style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "16px", textTransform: "uppercase" }}>
                    {day.day}
                  </span>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ fontWeight: 800, fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", color: "var(--primary)", marginBottom: "10px" }}>
                      Завтрак
                    </div>
                    {day.breakfast.map((item) => (
                      <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px", borderBottom: "1px dashed #ddd", paddingBottom: "6px" }}>
                        <span style={{ fontSize: "14px", color: "#444" }}>{item.name}</span>
                        <span style={{ fontWeight: 700, fontSize: "14px", whiteSpace: "nowrap", marginLeft: "8px" }}>{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", color: "var(--secondary)", marginBottom: "10px" }}>
                      Обед
                    </div>
                    {day.lunch.map((item) => (
                      <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px", borderBottom: "1px dashed #ddd", paddingBottom: "6px" }}>
                        <span style={{ fontSize: "14px", color: "#444" }}>{item.name}</span>
                        <span style={{ fontWeight: 700, fontSize: "14px", whiteSpace: "nowrap", marginLeft: "8px" }}>{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ЕДА С ЗАБОТОЙ О КАЖДОМ.</h2>
            <p className="vibe-text">
              Мы знаем: хороший обед — половина успешного учебного дня. Поэтому готовим только из свежих продуктов, без лишних добавок. Настоящая домашняя кухня — прямо в стенах гимназии.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О столовой
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            НАША КУХНЯ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Блюдо 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Блюдо 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Блюдо 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Блюдо 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ГИМНАЗИЯ*ВКУС</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Столовая гимназии города Суворова. Вкусно, сытно, по-домашнему.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О столовой
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Режим работы</h4>
          <ul>
            <li>Пн–Пт: 8:00 – 16:00</li>
            <li>Завтрак: 8:00 – 9:30</li>
            <li>Обед: 12:00 – 14:00</li>
            <li>Сб–Вс: выходной</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>г. Суворов</li>
            <li>ул. Суворова, д. 7</li>
            <li>Столовая, 1 этаж</li>
          </ul>
        </div>
      </footer>
    </>
  );
}