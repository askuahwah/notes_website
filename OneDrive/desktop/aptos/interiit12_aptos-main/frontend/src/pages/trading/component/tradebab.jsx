import React from 'react'
import PBlocks from '../../portfolio/component/pblock'  
import style from '../trade.module.css'

function TradeBAB() {

  const orderdata = [
    { Symbol: 'AAPL', ID: 1, LastAmount: 150.10, Price: 200.00, Side: 'Buy', Profit: 49.90, Type: 34.05 },
    { Symbol: 'MSFT', ID: 2, LastAmount: 250.50, Price: 300.00, Side: 'Sell', Profit: 49.50, Type: 34.05 },
    { Symbol: 'GOOGL', ID: 3, LastAmount: 100.75, Price: 150.00, Side: 'Buy', Profit: 49.25, Type: 34.05 },
    { Symbol: 'AAPL', ID: 1, LastAmount: 150.10, Price: 200.00, Side: 'Buy', Profit: 49.90, Type: 34.05 },
    { Symbol: 'MSFT', ID: 2, LastAmount: 250.50, Price: 300.00, Side: 'Sell', Profit: 49.50, Type: 34.05 },
    { Symbol: 'GOOGL', ID: 3, LastAmount: 100.75, Price: 150.00, Side: 'Buy', Profit: 49.25, Type: 34.05 },
    { Symbol: 'AAPL', ID: 1, LastAmount: 150.10, Price: 200.00, Side: 'Buy', Profit: 49.90, Type: 34.05 },
    { Symbol: 'MSFT', ID: 2, LastAmount: 250.50, Price: 300.00, Side: 'Sell', Profit: 49.50, Type: 34.05 },
    { Symbol: 'GOOGL', ID: 3, LastAmount: 100.75, Price: 150.00, Side: 'Buy', Profit: 49.25, Type: 34.05 },
  ]


  return (
      <PBlocks bwidth="99%" bheight="35%">
        <div className={style.tradebab}>
        <div className={style.table}>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>ID</th>
              <th>LastAmount</th>
              <th>Price</th>
              <th>Side</th>
              <th>Profit</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody className={style.tradebab_table_data}>
            {orderdata.map((user, index)=>(
              <tr key={index}>
                <td>{user.Symbol}</td>
                <td>{user.ID}</td>
                <td>{user.LastAmount}</td>
                <td>{user.Price}</td>
                <td className={`${user.Side==="Buy" ? style.positiongreen : style.positionred}`}>{user.Side}</td>
                <td>{user.Profit}</td>
                <td>{user.Type}</td>
              </tr>
            ))}
          </tbody>
        </div>
        </div>
      </PBlocks>
  )
}

export default TradeBAB