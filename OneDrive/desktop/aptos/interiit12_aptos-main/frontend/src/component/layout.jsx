import React from 'react'
import style from './style.module.css'
import TNavbar from './trad_navbar'
import TFooter from './trad_footer'

function Layout({children, theme, setTheme}) {
  return (
    <div className={style.layout} >
    <TNavbar theme={theme} setTheme={setTheme} />
    {children}
    <TFooter/>
    </div>
  )
}

export default Layout