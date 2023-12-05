import React, { useState } from 'react'
import style from '../trade.module.css'
import { NavLink } from 'react-router-dom'
import PBlocks from '../../portfolio/component/pblock'

function TradeAA({active}) {
  
  return (
      <PBlocks bwidth="15%" bheight="100%" >
        <div className={style.tradeaa}>
          <NavLink to="apt" className={`${active===0 ? style.aaactive : ''} `}>APT</NavLink>
          <NavLink to="eth" className={`${active===1 ? style.aaactive : ''} `}>ETH</NavLink>
          <NavLink to="btc" className={`${active===2 ? style.aaactive : ''} `}>BTC</NavLink>
        </div>
      </PBlocks>
  );
}

export default TradeAA

