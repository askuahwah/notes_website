import React from 'react';
import style from '../trade.module.css';

function TradeBAAB() {
  const sellData = [
    { price: '98.00', size: '5', cumulative: 0 },
    { price: '97.00', size: '10', cumulative: 0 },
    { price: '96.00', size: '15', cumulative: 0 },
    { price: '96.00', size: '15', cumulative: 0 },
  ];
  const buyData = [
    { price: '101.00', size: '5', cumulative: 0 },
    { price: '102.00', size: '10', cumulative: 0 },
    { price: '103.00', size: '15', cumulative: 0 },
    { price: '103.00', size: '15', cumulative: 0 },
  ];

  // add in field for cumulative where it is the sum of all the sizes before it
  for (let i = 1; i < sellData.length; i++) {
    const cumulativeValue = sellData[i - 1].cumulative + parseInt(sellData[i].size, 10);
    sellData[i].cumulative = cumulativeValue;
  }
  for (let i = 1; i < buyData.length; i++) {
    const cumulativeValue = buyData[i - 1].cumulative + parseInt(buyData[i].size, 10);
    buyData[i].cumulative = cumulativeValue;  
  }

  return (
    <div className={style.Tradebaab}>
      <div className={style.tradebaab_order}>Orderbook</div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Price</th>
            <th>Size(USD)</th>
            <th>Cumulative(USD)</th>
          </tr>
        </thead>
        <tbody>
          {sellData.reverse().map((user, index) => (
            <tr key={index} style={{ color: 'red' }}>
              <td style={{ color: '#C00C45' }}>${user.price}</td>
              <td>{user.size}</td>
              <td>
                {user.cumulative}
                <div className={style.redorderbg} style={{ width: `${user.cumulative}%` }}></div>
              </td>
            </tr>
          ))}
          {buyData.map((user, index) => (
            <tr key={index}>
              <td style={{ color: '#05B306' }}>${user.price}</td>
              <td>{user.size}</td>
              <td>
                {user.cumulative}
                <div className={style.greenorderbg} style={{ width: `${user.cumulative}%` }}></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TradeBAAB;
