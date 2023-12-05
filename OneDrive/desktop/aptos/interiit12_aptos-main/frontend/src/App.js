import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.js';
import Portfolio from './pages/portfolio/index.jsx';
import Trading from './pages/trading/index.jsx';
import Status from './pages/status/index.jsx';
import {
  PontemWalletAdapter,
  HippoWalletAdapter,
  AptosWalletAdapter,
  HippoExtensionWalletAdapter,
  MartianWalletAdapter,
  FewchaWalletAdapter,
  WalletProvider,
} from '@manahippo/aptos-wallet-adapter';

const wallets = [
  new PontemWalletAdapter(),
  new MartianWalletAdapter(),
  new AptosWalletAdapter(),
  new FewchaWalletAdapter(),
  new HippoWalletAdapter(),
  new HippoExtensionWalletAdapter(),
];

const App: React.FC = () => {
  const [theme, setTheme] = useState("light");
  return (
    <WalletProvider
      wallets={wallets}
      onError={(error: Error) => {
        console.log('Handle Error Message', error);
      }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/trading" element={<Trading theme={theme} setTheme={setTheme} />} />
          <Route exact path="/portfolio" element={<Portfolio theme={theme} setTheme={setTheme} />} />
          <Route exact path="/status" element={<Status />} />
        </Routes>
      </Router>
    </WalletProvider>
  );
};

export default App;
