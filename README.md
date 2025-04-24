# 📉 Real-Time Crypto Price Tracker

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_NETLIFY_SITE_ID/deploy-status)](https://app.netlify.com/sites/YOUR_PROJECT_NAME/deploys)  
[![React](https://img.shields.io/badge/React-2025-blue?logo=react)](https://reactjs.org)
[![Redux Toolkit](https://img.shields.io/badge/Redux--Toolkit-Modern-purple?logo=redux)](https://redux-toolkit.js.org)
[![CoinGecko API](https://img.shields.io/badge/API-CoinGecko-green?logo=coinmarketcap)](https://www.coingecko.com/en/api)

> A responsive React + Redux Toolkit app that tracks live crypto prices using a free API and simulates real-time updates — just like CoinMarketCap!

---

## 🚀 Live Demo

🌐 **Deployed on Netlify**: [Click here to view the app](https://real-time-crypto-tracker1.netlify.app/)

🎥 **Demo Walkthrough (2–5 min)**: [Watch on YouTube](https://youtu.be/your-demo-link)

---

## 🎯 Objective

Build a responsive crypto tracker app using React and Redux Toolkit that:

- Displays live crypto market data from CoinGecko  
- Simulates real-time price changes using `setInterval`  
- Manages all state globally via Redux

---

## 🧠 Features

- 📊 **Crypto Table**: Displays top 5 assets with full market stats  
- 🎨 **Color-coded Changes**: Green for gain, red for loss  
- 📈 **7D Sparkline Chart**: 7-day mini line chart  
- 🔄 **Real-Time Simulated Updates**  
- ⚙️ **Redux Toolkit**: Global state management  
- 💻 **Responsive Design**  
- ☁️ **Netlify Deployed**

---

## 🛠️ Tech Stack

| Tech             | Usage                                |
|------------------|---------------------------------------|
| React            | Frontend Framework                    |
| Redux Toolkit    | State Management                      |
| CoinGecko API    | Free Crypto Market Data               |
| Sparklines       | Tiny Line Charts                      |
| CSS              | Responsive Styling                    |
| Netlify          | Hosting & CI/CD                       |

---

## 🧱 Project Structure

```
crypto-tracker/
🔻 public/
🔻 src/
   🔻 App.js
   🔻 Component/
       └── CryptoTable.js
   🔻 Reducer/
       └── CryptoSlice.js
       └── store.js    
   🔻 styles/
🔻 package.json
🔻 README.md
```

---

## 📦 Getting Started

```bash
git clone https://github.com/Vickykr115/Real-Time-Crypto-Price-Tracker.git
cd crypto-price-tracker
npm install
npm start
```

Runs at `http://localhost:3000`

---

## 🔄 Real-Time Sim Updates

```js
useEffect(() => {
  dispatch(fetchCryptoData());
  const interval = setInterval(() => dispatch(simulateUpdate()), 1000 + Math.random() * 1000);
  return () => clearInterval(interval);
}, [dispatch]);
```

---

## 📤 Deploy to Netlify

1. Push to GitHub  
2. Connect GitHub repo to [Netlify](https://netlify.com)  
3. Build command: `npm run build`  
4. Publish directory: `build`  
5. Deploy 🎉

---

## 🎢 Demo

> Here's how it looks:

![Demo GIF](https://your-demo-link.gif)

---

## 🤝 Contributing

Open an issue or submit a PR 💬

---

## 📄 License

MIT License

---

**Made with 💻 by [Vicky Kumar](https://github.com/your-username)**

