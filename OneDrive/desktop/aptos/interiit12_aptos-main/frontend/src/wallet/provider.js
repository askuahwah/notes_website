import React from "react";
import {PontemWalletAdapter} from '@manahippo/aptos-wallet-adapter';

const wallets = () => {
  new PontemWalletAdapter(),
}

const App: React.FC = () => {
  return (
    <WalletProvider
      wallets={wallets}
      onError={(error: Error) => {
        console.log('Handle Error Message', error)
      }}>
      {/* your website */}
    </WalletProvider>
  );
};

export default App;