import React from 'react'
import style from './trade.module.css'
import TradeAA from './component/tradeaa'
import TradeBAB from './component/tradebab'
import TradeBB from './component/tradebb'
import TradeBAAA from './component/tradebaaa'
import TradeBAAB from './component/tradebaab'
import TradeAB from './component/tradeab'
import Layout from '../../component/layout'

function Trading({theme, setTheme}) {
  return (
    <Layout theme={theme} setTheme={setTheme} >
      <div className={style.trade}>
          <div className={style.tradea}>
            <TradeAA active={0} />
            <TradeAB/>
          </div>
          <div className={style.tradeb}>
            <div className={style.tradeba}>
              <dir className={style.tradebaa}>
                <TradeBAAA theme={theme} setTheme={setTheme} />
                <TradeBAAB/>
              </dir>
              <TradeBAB/>
            </div>
            <TradeBB/>          
          </div>
      </div>
    </Layout>
  )
}

export default Trading