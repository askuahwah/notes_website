import React, { useState } from 'react'
import style from '../portfolio.module.css'
import TNavbar from '../../../component/trad_navbar'
import PBlocks from './pblock'
import si1 from './sidebar.png'
import btc from './btc.svg'
import eth from './eth.svg'
import apt from './apt.svg'
import {activeComponent} from '../index'


function PortfolioLayout({children, setActiveComponent }) {
    const traddata = [
        { name: 'BTC-USD', icon: btc, value: '36,990.50', change: -1.26 },
        { name: 'ETH-USD', icon: eth, value: '2,008.06', change: -2.67 },
        { name: 'APT-USD', icon: apt, value: '7.170594', change: 2.63 }
    ]
    return (
    <div className={style.layout}>
        <TNavbar/>
        <div className={style.layoutbody}>
            <div className={style.layoutcard}>
                <PBlocks  bwidth='20vw' bheight='95%'>
                    <div className={style.sidelink}>
                    <Sidebarbutton img={si1} text='Overview' active={activeComponent === 'overview'} onClick={() => setActiveComponent('overview')} />
                        <Sidebarbutton img={si1} text='Positions' active={activeComponent === 'positions'} onClick={() => setActiveComponent('positions')} />
                        <Sidebarbutton img={si1} text='Open Orders' active={activeComponent === 'openOrders'} onClick={() => setActiveComponent('openOrders')} />
                        <Sidebarbutton img={si1} text='Order History' active={activeComponent === 'orderHistory'} onClick={() => setActiveComponent('orderHistory')} />
                    </div>
                    <div className={style.sideconnect}>
                        Connect Wallet
                    </div>
                </PBlocks>
            </div>
            <div className={style.layoutcard}>
                <PBlocks bwidth='58vw' bheight='95%'>
                    {children}
                </PBlocks>
            </div>
            <div className={style.layoutcard}>
                <PBlocks bwidth='20vw' bheight='95%'>
                    <h5>Current MarketCap</h5>
                    {traddata.map((data, index) => (
                        <TradData key={index} {...data} />
                    ))}
                </PBlocks>
            </div>
        </div>
    </div>
  )
}

export default PortfolioLayout

function Sidebarbutton({ img, text, active, onClick }) {
    return (
        <div className={`${style.sidebutton} ${active ? style.sidebarbuttonactive : ''}`} onClick={onClick}>
            <div className={style.sidebuttonicon}>
                <img src={img} alt='sidebar icon' />
            </div>
            <div className={style.sidebuttontext}>{text}</div>
        </div>
    );
}

function TradData({ name, icon, value, change }) {
    let tcolor;
    let bcolor;
    if (change > 0) {
        tcolor = 'rgba(0,255,0)'
        bcolor = 'rgba(0,255,0,0.1)'
    } 
    else if (change < 0) {
        tcolor = 'rgba(255,0,0)'
        bcolor = 'rgba(255,0,0,0.1)'}
  
    return (
      <div className={style.traddata} style={{ backgroundColor: bcolor }}>
        <div className={style.traddatacontent}>
            <div className={style.traddataicon}>
            <img src={icon} alt='trad data icon' />
            </div>
          <div className={style.traddatacontentname}>{name}</div>
        </div>
        <div className={style.traddatanums}>
            <div className={style.traddatavalue}> &#36;{value}</div>
            <div className={style.traddatachange} style={{color: tcolor}}>{change}%</div>
        </div>
      </div>
    );
  }






