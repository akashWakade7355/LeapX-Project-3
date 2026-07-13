# 🌤️ Forecast & NewsVista Dashboard

An elegant, premium weather and news aggregator dashboard built using HTML, CSS (Glassmorphic dark and light theme), vanilla JavaScript, Bootstrap, and Vercel Serverless Functions.

🔗 **Live Production Demo**: [https://weather-project-kappa-peach.vercel.app](https://weather-project-kappa-peach.vercel.app)

---

## ⚡ Features

### 1. 🌤️ Forecast (Weather Dashboard)
- **Automatic Location Detection**: Leverages the browser Geolocation API to auto-detect device coordinates on load and display local weather.
- **Manual Pinpoint Button**: High-precision location button with dynamic loading micro-animations (spins during coordinates request).
- **Search-by-City**: Instant weather lookup by entering any global city name.
- **5-Day Weather Forecast**: Displays future conditions including temperatures and descriptive weather icons.
- **Detailed Metrics**: Real-time readouts for humidity, wind speed, pressure, and feels-like temperature.

### 2. 📰 NewsVista (News Aggregator)
- **Keyword & Category Filter**: Search breaking news by term, select a city, or filter by category (technology, sports, business, science, etc.).
- **Interactive Bookmarks**: Save article highlights locally (persisted using `localStorage`) to read later.
- **Bookmark Management**: Dynamic grid system allowing you to review bookmarked articles or delete them instantly.

### 3. 🌓 Unified Theme Switcher
- **State-of-the-Art Glassmorphism**: High-end theme styling utilizing soft transparency, blurred cards, HSL color tokens, and neon accents.
- **Global Synchronization**: Synchronized light/dark preference. Toggling the theme on one page updates all sections of the application immediately.
- **Local Persistence**: Restores your preferred theme state automatically on subsequent visits.

---

## ⚙️ Architecture & API Security

To prevent API key exposure and bypass CORS restrictions on the browser (which blocks the free tier of NewsAPI in production domains), the application is powered by **Vercel Serverless Functions** (Node.js runtime):

- **`/api/weather`**: OpenWeather API backend proxy.
- **`/api/news`**: NewsAPI.org backend proxy.

*Note: For local developers, the codebase automatically detects the execution environment. When run locally using the `file://` protocol or `localhost` without Vercel CLI, it safely falls back to direct client-side API requests.*

---

## 🛠️ Getting Started

### Run Locally (Direct file execution)
1. Clone the repository:
   ```bash
   git clone https://github.com/adityarajofficial021/Weather_project.git
   ```
2. Simply double-click `index.html` or open it with a local browser preview tool.

### Deploy to Vercel (Activate backend proxies)
1. Install Vercel CLI globally or run it via npx:
   ```bash
   npx vercel --prod
   ```
2. The CLI will automatically connect to your project and deploy the serverless functions in `/api`.

---

## 👥 Team Members
- Aditya Raj
- Akash
- Paree
