import React, { useState } from 'react';
import PBlocks from '../../portfolio/component/pblock';
import style from '../trade.module.css';

function TradeBB() {
  const [buySellValue, setBuySellValue] = useState('Buy');
  const [orderTypeValue, setOrderTypeValue] = useState('Market');
  const [orderSize, setOrderSize] = useState(0);
  const [leverage, setLeverage] = useState(1);
  const [limitPrice, setLimitPrice] = useState(0);
  const [connected, setConnected] = useState(1);

  return (
    <PBlocks bwidth="22%" bheight="98.5%">
      <div className={style.tradebb}>
        <div className={style.buysell}>
          <span className={`${buySellValue === 'Buy' ? style.hoverbuy : style.hoversell}`} ></span>
          <div className={`${buySellValue === 'Buy' && style.buyactive}`} onClick={() => setBuySellValue('Buy')}>Buy</div>
          <div className={`${buySellValue === 'Sell' && style.sellactive}`} onClick={() => setBuySellValue('Sell')}>Sell</div>
        </div>
        <div className={style.marketlimit}>
          <span className={`${orderTypeValue === 'Market' && style.hoverleft}`} ></span>
          <div onClick={() => setOrderTypeValue('Market')}>Market</div>
          <div onClick={() => setOrderTypeValue('Limit')}>Limit</div>
        </div>
          <form>
            <div className={style.formcontent}>
              <label htmlFor="orderSize">Order Size</label>
              <input
                type="integer"
                id="orderSize"
                value={orderSize}
                placeholder='0'
                onChange={(e) => setOrderSize(e.target.value)}
              />
            </div>

            {orderTypeValue === 'Limit' && (
              <div className={style.formcontent}>
                <label htmlFor="limitPrice">Limit Price</label>
                <input
                  type="number"
                  id="limitPrice"
                  value={limitPrice}
                  placeholder='0'
                  onChange={(e) => setLimitPrice(e.target.value)}
                />
              </div>
            )}

            <div className={style.leverage}>
              <label htmlFor="leverage">Leverage</label>
              <div>
                <input
                  type="range"
                  id="leverage"
                  value={leverage}
                  min={1}
                  max={25}
                  onChange={(e) => setLeverage(e.target.value)}
                />
                <input 
                  type="integer"
                  value={leverage}
                  onChange={(e) => setLeverage(e.target.value)}
                />
              </div>
            </div>

            <div className={style.formcontent}>
              <label>Total</label>
              <input type="text" value={2} readOnly />
            </div>

            <div className={style.formcontent}>
              <label>Fees</label>
              <input type="text" value={1} readOnly /> 
            </div>
          </form>
          {connected===0 ? 
                <div className={style.sideconnect} >Connect Wallet</div> 
                : 
                <div className={style.sideconnected}>Trade</div>
            }
      </div>
    </PBlocks>
  );
}

export default TradeBB;
