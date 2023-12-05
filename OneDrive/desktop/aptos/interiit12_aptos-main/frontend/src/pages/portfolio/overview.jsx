import React from 'react';
import style from './potfolio.module.css';
import CircularProgressBar from '../../component/progressbar';

function PortfolioOverview(theme, setTheme) {
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

export default PortfolioOverview;
