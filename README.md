# 🏦 QuestionMarketCap (QMC)


A decentralized opinion exchange platform where users can buy the right to answer questions. Think CoinMarketCap, but for opinions and answers rather than cryptocurrencies.

## 🚀 Features

* **Question Management**: Submit and manage questions with a unique ID system
* **Answer Trading**: Buy the right to change answers with dynamic pricing
* **Price Mechanism**: Dynamic pricing ranging from -20% to +100%
* **Web3 Integration**: Built on Base blockchain with ThirdWeb integration
* **Fee Structure**: 95% to answer owners, 5% to platform (first 100 questions)

## 🛠️ Tech Stack

* **Frontend**: Next.js 14 with App Router
* **Web3**: ThirdWeb, Onchain Kit by Coinbase
* **Blockchain**: Base
* **UI**: TailwindCSS, Recharts
* **Smart Contracts**: Solidity

## 🏗️ Installation

Clone the repository:

```bash
git clone https://github.com/axelroffi/questionmarketcap.git
cd questionmarketcap
```

Install dependencies:

```bash
npm install
```

Set up environment variables:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Project Structure

```
questionmarketcap/
├── app/
│   ├── components/
│   ├── lib/
│   ├── styles/
│   └── public/
├── contracts/
└── tests/
```

## 🔒 Smart Contract Structure

```solidity
struct Question {
    uint256 id;
    string question;
    string currentAnswer;
    address owner;
    uint256 currentPrice;
    uint256 lastPrice;
    uint256[] labels;
    uint256 totalVolume;
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

* Base blockchain team
* ThirdWeb team
* Coinbase's Onchain Kit team

## 🔗 Links

* 🌐 Website: 
* 🐦 Twitter: 
* 📚 Documentation:

## ⚡ Performance Targets

* Transaction Success Rate: > 99%
* Wallet Connection Time: < 2s
* Page Load Time: < 3s
* System Uptime: > 99.9%

## 📊 Current Status

* 🚧 Project Status: In Development
* 🎯 Current Version: 0.1.0
* 📅 Expected Launch: TBD

---
Built with ❤️ by Axel Roffi
