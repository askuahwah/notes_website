import React, { useState } from 'react'
import style from './portfolio.module.css'
import TNavbar from '../../component/trad_navbar'
import PBlocks from './component/pblock'
import btc from './component/btc.svg'
import eth from './component/eth.svg'
import apt from './component/apt.svg'
import CircularProgressBar from '../../component/progressbar';
import { Globe, Layers, AlignLeft, History, User } from 'lucide-react';
import TFooter from '../../component/trad_footer'
import Layout from '../../component/layout'



function Portfolio({theme, setTheme}) {
  const [activeComponent, setActiveComponent] = useState('overview');
  const [connected, setConnected] = useState(1);

  const traddata = [
    { name: 'BTC-USD', icon: btc, value: '36,990.50', change: -1.26 },
    { name: 'ETH-USD', icon: eth, value: '2,008.06', change: -2.67 },
    { name: 'APT-USD', icon: apt, value: '7.170594', change: 2.63 }
]
return (
  <Layout theme={theme} setTheme={setTheme}>
    <div className={style.layoutbody}>
      <div className={style.layoutcard}>
        <PBlocks  bwidth='20vw' bheight='95%'>
            <div className={style.sidelink}>
              <Sidebarbutton img={<Globe size={15}/>} text='Overview' active={activeComponent === 'overview'} onClick={() => setActiveComponent('overview')} />
              <Sidebarbutton img={<Layers size={15}/>} text='Positions' active={activeComponent === 'positions'} onClick={() => setActiveComponent('positions')} />
              <Sidebarbutton img={<AlignLeft size={15}/>} text='Open Orders' active={activeComponent === 'openOrders'} onClick={() => setActiveComponent('openOrders')} />
              <Sidebarbutton img={<History size={15}/>} text='Order History' active={activeComponent === 'orderHistory'} onClick={() => setActiveComponent('orderHistory')} />
            </div>
            {connected===0 ? 
              <div className={style.sideconnect}>
                Connect Wallet
            </div>
                : 
                <div className={style.sideconnected_div}>
                <div className={style.sideconnected}>Deposit</div>
                <div className={style.sideconnected}>Withdraw</div>
                <div className={style.sideconnected}>Transfer</div>
                </div>
            }
        </PBlocks>
      </div>
      <div className={style.layoutcard}>
        <PBlocks bwidth='58vw' bheight='95%'>
          {activeComponent === 'overview' && <Overview/>}
          {activeComponent === 'positions' && <Positions/>}
          {activeComponent === 'openOrders' && <OpenOrder/>}
          {activeComponent === 'orderHistory' && <OrderHistory/>}
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
  </Layout>
  )
}

export default Portfolio

function Sidebarbutton({ img, text, active, onClick }) {
  return (
      <div className={`${style.sidebutton} ${active ? style.sidebarbuttonactive : ''}`} onClick={onClick}>
          <div className={style.sidebuttonicon}>
              {img}
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

// middle routes
function Overview() {
  const item = {
    img: 'https://via.placeholder.com/150', name: 'BTC', balance: '0.00000000', composition: '0.00%', value: '0.00' 
};

  const overviewdata = [
    {title: 'Available Balance', amount:'123243'},
    {title: 'Live PnL', amount:'232'},
    {title: 'Realised PnL', amount:'12'},
    {title: 'Profit Factor', amount:'323'},
  ]

  return (
    <div className={style.portfoliooverview}>
      <h4>Portfolio Overview</h4>
      <div className={style.equity}>
        <h5 className={style.headlite}>Equity</h5>
        <div>
          <div>10502.23</div>
          <div style={{color: 'lime'}}>+12.4%</div>
        </div>
      </div>

      <div className={style.progressbar}>
      <CircularProgressBar
        selectedValue={75}
        maxValue={100}
        radius={100}
        activeStrokeColor='white'
        inactiveStrokeColor='rgba(255,255,255,0.2)'
        backgroundColor = 'rgb(18 18 26)'
        textColor='white'
        withGradient
      />
      <p> % in total Amount </p>
      </div>

      <div className={style.overviewdata}>
        {overviewdata.map((item, index) => (
          <div key={index}>
            <div>{item.title}</div>
            <div>{item.amount}</div>
          </div>
        ))
        }
      </div>

      <div>
        <h5>Collateral</h5>
        <table>
          <thead>
            <tr>
              <th>Asset</th>
              <th>Balance</th>
              <th>Composition</th>
              <th>Value</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={style.td1}>
                <img src='https://via.placeholder.com/150' alt='APT' />
                <span>APT</span>
              </td>
              <td>{item.balance}</td>
              <td>{item.composition}</td>
              <td className={style.td1}>{item.value}</td>
              <td className={style.action}>
                <div>Deposit</div>
                <div>Withdraw</div>
                <div>Transfer</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Positions() {
  return (
    <div className={style.position}>
        <h4>Positions</h4>
    </div>
  )
}

function OpenOrder() {
  return (
    <div className={style.openorder}>
        <h4>Open Orders</h4>
    </div>
  )
}

function OrderHistory() {
  return (
    <div className={style.orderhistory}>
        <h4>Order History</h4>
    </div>
  )
}

// ------------------ sidebar icons ------------------

function sin1({color}){ 
  var a = <svg fill={color} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>globe1</title> <path d="M15.5 2c-8.008 0-14.5 6.492-14.5 14.5s6.492 14.5 14.5 14.5 14.5-6.492 14.5-14.5-6.492-14.5-14.5-14.5zM10.752 3.854c-0.714 1.289-1.559 3.295-2.113 6.131h-4.983c1.551-2.799 4.062-4.993 7.096-6.131zM3.154 10.987h5.316c-0.234 1.468-0.391 3.128-0.415 5.012h-6.060c0.067-1.781 0.468-3.474 1.159-5.012zM1.988 17.001h6.072c0.023 1.893 0.188 3.541 0.422 5.012h-5.29c-0.694-1.543-1.138-3.224-1.204-5.012zM3.67 23.015h4.977c0.559 2.864 1.416 4.867 2.134 6.142-3.046-1.134-5.557-3.336-7.111-6.142zM15.062 30.009c-1.052-0.033-2.067-0.199-3.045-0.46-0.755-1.236-1.736-3.363-2.356-6.534h5.401v6.994zM15.062 22.013h-5.578c-0.234-1.469-0.396-3.119-0.421-5.012h5.998v5.012zM15.062 15.999h-6.004c0.025-1.886 0.183-3.543 0.417-5.012h5.587v5.012zM15.062 9.985h-5.422c0.615-3.148 1.591-5.266 2.344-6.525 0.987-0.266 2.015-0.435 3.078-0.47v6.995zM29.003 15.999h-5.933c-0.025-1.884-0.182-3.544-0.416-5.012h5.172c0.693 1.541 1.108 3.23 1.177 5.012zM27.322 9.985h-4.837c-0.549-2.806-1.382-4.8-2.091-6.090 2.967 1.154 5.402 3.335 6.928 6.090zM16.063 2.989c1.067 0.047 2.102 0.216 3.092 0.493 0.751 1.263 1.72 3.372 2.331 6.503h-5.423v-6.996zM16.063 10.987h5.587c0.234 1.469 0.392 3.126 0.417 5.012h-6.004v-5.012zM16.063 17.001h5.998c-0.023 1.893-0.187 3.543-0.421 5.012h-5.577v-5.012zM16.063 29.991v-6.977h5.402c-0.617 3.152-1.591 5.271-2.343 6.512-0.978 0.272-2.005 0.418-3.059 0.465zM20.367 29.114c0.714-1.276 1.56-3.266 2.112-6.1h4.835c-1.522 2.766-3.967 4.95-6.947 6.1zM27.795 22.013h-5.152c0.234-1.471 0.398-3.119 0.423-5.012h5.927c-0.067 1.787-0.508 3.468-1.198 5.012z"></path> </g></svg>
  return a;
}

function sin2({color}){
  var a = <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.4 10L21 12L17.4 14M17.4 10L12 13L6.6 10M17.4 10L21 8L12 3L3 8L6.6 10M6.6 10L3 12L6.6 14M17.4 14L21 16L12 21L3 16L6.6 14M17.4 14L12 17L6.6 14" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  return a;
}

function sin3({color}){
  var a = <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke={color} stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 12L4 12" stroke={color} stroke-width="1.5" stroke-linecap="round"></path> <path d="M9 17H4" stroke={color} stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
}
