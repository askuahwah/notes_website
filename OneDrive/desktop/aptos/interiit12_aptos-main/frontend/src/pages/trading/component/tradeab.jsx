import React from 'react'
import PBlocks from '../../portfolio/component/pblock'
import style from "../trade.module.css"

function TradeAB({curr}) {
  const data = {
    data1 : 1000,
    data2 : 1000,
    data31 : +10.44,
    data32 : 0.343,
    data4 : -0.0001,
    data5 : 1000,
    data6 : 1000,
    data7 : 1000,
    data8 : 50
  }
  return(
    <PBlocks bwidth="85%  " bheight="100%">
    <div className={style.tradeab}>
      <div className={style.blocks}>
        <div>Index Prices</div>
        <div>${data.data1}</div>
      </div>
      <div className={style.blocks}>
        <div>Mark Prices</div>
        <div>${data.data2}</div>
      </div>
      <div className={style.blocks}>
        <div>24h Change</div>
        <div>${data.data31}% <span className={style.data32}>(${data.data32})</span></div>
      </div>
      <div className={style.blocks}>
        <div>1h Funding Rate</div>
        <div>{data.data4}</div>
      </div>
      <div className={style.blocks}>
        <div>Funding Rate Countdown</div>
        <div>{data.data5}</div>
      </div>
      <div className={style.blocks}>
        <div>24h Volume({curr})</div>
        <div>${data.data6}</div>
      </div>
      <div className={style.blocks}>
        <div>24h Volume</div>
        <div>${data.data7}</div>
      </div>
      <div className={style.blocks}>
        <div>Buy/Sell Volume(24h) </div>
        <div>{data.data8}%</div>
      </div>  
    </div>
    </PBlocks>
    )
}

export default TradeAB