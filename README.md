# DigitalKiss — Next.js Application

Сучасна версія веб-сайту **DigitalKiss**, переписана на **Next.js (App Router)**, **TypeScript** та **Tailwind CSS**. Готова до безкоштовного розгортання на **Cloudflare Pages** або **GitHub Pages**.

---

## 🚀 Швидкий старт для розробки

```bash
# Перейти в папку з проєктом
cd digitalkiss-app

# Встановити залежності (якщо не встановлені)
npm install

# Запустити локальний сервер розробки
npm run dev
```

Сайт буде доступний за адресою: `http://localhost:3000`

---

## 🛠 Збірка проєкту під Cloudflare Pages

Проєкт налаштовано на статичний експорт HTML (`output: 'export'`).

```bash
npm run build
```

Після виконання збірки в папці `digitalkiss-app/out` згенерується готовий статичний сайт.

---

## ☁️ Інструкція з деплою на Cloudflare Pages

### Крок 1: Завантаження на GitHub
1. Створіть новий репозиторій на [GitHub](https://github.com/new) (наприклад, `digitalkiss-website`).
2. Запустіть у папці `digitalkiss-app`:

```bash
git init
git add .
git commit -m "Initial commit: DigitalKiss Next.js site"
git branch -M main
git remote add origin https://github.com/ВАШ_НІКНЕЙМ/digitalkiss-website.git
git push -u origin main
```

### Крок 2: Підключення Cloudflare Pages
1. Увійдіть у [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Перейдіть у розділ **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Оберіть ваш репозиторій `digitalkiss-website`.
4. Налаштуйте параметри збірки:
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
5. Натисніть **Save and Deploy**.

Сайт миттєво розгорнеться та отримає безкоштовний SSL-сертифікат і підключення до мережі Cloudflare CDN!

---

## 📁 Структура проєкту

```text
digitalkiss-app/
├── public/
│   ├── images/          # Графічні ресурси (котики, лого, баннери)
│   └── video/           # Відео ролики
├── src/
│   ├── app/
│   │   ├── globals.css  # Стилі Tailwind CSS та кастомні анімації
│   │   ├── layout.tsx   # Шрифти, метатеги, SEO та темна тема
│   │   └── page.tsx     # Головна сторінка проєкту
│   └── components/
│       ├── Header.tsx             # Шапка сайту з навігацією
│       ├── Hero3DCards.tsx        # 3D картки з ефектом нахилу миші
│       ├── ProjectsCarousel.tsx   # 3D Карусель проєктів (WEB, APPS, SEO, DESIGN, ANIMATION, GAMES, NFT)
│       ├── AboutSection.tsx       # Блок про компанію та переваги
│       ├── TeamSection.tsx        # Команда та спеціалізації
│       ├── BlogSection.tsx        # Статті та новини з Reddit-інтеграцією
│       ├── Footer.tsx             # Підвал сайту та соціальні мережі
│       └── ParticlesBackground.tsx# Анімований графічний фоновий ефект
├── next.config.ts       # Конфігурація Next.js статичного експорту
└── package.json
```
