import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import logo from './logo.png';
import { NavLink } from 'react-router-dom';
import { useWallet } from '@manahippo/aptos-wallet-adapter';
import { ReactComponent as Sun } from '../assets/Sun.svg'
import { ReactComponent as Moon }  from '../assets/Moon.svg'

function TNavbar({theme, setTheme}) {
  const { connect, disconnect, isConnected } = useWallet();
  const wallet = 'PontemWallet';

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (isConnected && wallet) {
      setConnected(true);
    } else {
      setConnected(false);
    }
  }, [isConnected, wallet]);

  const handleConnectWallet = async () => {
    try {
      if (!wallet) {
        throw new Error('WalletNotSelectedError');
      }
  
      await connect(wallet);
      setConnected(true);
    } catch (error) {
      if (error.message === 'WalletNotSelectedError') {
        alert('Please select a wallet before connecting.');
      } else {
        console.error('Error connecting wallet:', error);
      }
    }
  };

  const handleDisconnectWallet = async () => {
    try {
      if (!wallet) {
        throw new Error('WalletNotSelectedError');
      }
  
      await disconnect(wallet);
      setConnected(false);
    } catch (error) {
      if (error.message === 'WalletNotSelectedError') {
        alert('Please select a wallet before disconnecting.');
      } else {
        console.error('Error disconnecting wallet:', error);
      }
    }
  };

  const setDarkMode = ()=> {
    document.querySelector("body").setAttribute('data-theme', 'dark')
  }
  const setLightMode = ()=> {
    document.querySelector("body").setAttribute('data-theme', 'light')
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      const Theme = theme === 'dark' ? 'light' : 'dark';
      setTheme(Theme);
      setDarkMode();
    }
    else {
      const Theme = theme === 'light' ? 'dark' : 'light';
      setTheme(Theme);
      setLightMode();
    }
  };


  return (

    <div className={style.tnav}>
      <div className={style.navlink1}>
        <div className={style.logo}>
          <img src={logo} alt='Aptos Logo' />
        </div>
        <div className={style.navlink3}>
          <NavLink to="/trading" exact>Trading</NavLink>
          <NavLink to="/portfolio" exact>Portfolio</NavLink>
        </div>
      </div>
      <div className={style.navlink2}>
        <div className={style.navnums}>
          <NavNum label='Balance' value='0.0000' />
          <NavNum label='P&L' value='0.0000' />
          <NavNum label='Equity' value='0.0000' />
        </div>
        {connected ?
          <div className={style.connected} onClick={handleDisconnectWallet}>User ID</div>
          :
          <div className={style.connect} onClick={handleConnectWallet}>Connect Wallet</div>
        }
        <div className={style.dark_mode}>
            <input
                className={style.dark_mode_input}
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className={style.dark_mode_label} for='darkmode-toggle'>
                <div className={style.sun}>
                  <Sun/>
                </div>
                <div className={style.Moon}>
                <Moon />
                </div>
            </label>
        </div>
      </div>
    </div>
  );
}

export default TNavbar;

function NavNum({ label, value }) {
  return (
    <div className={style.navnum}>
      <div className={style.head}>{label}</div>
      <div className={style.value}>{value}</div>
    </div>
  );
}