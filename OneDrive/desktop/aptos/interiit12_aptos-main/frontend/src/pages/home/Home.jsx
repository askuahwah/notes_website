import React, {useEffect, useState} from 'react'
import UserData from './Userdata';
import style from './home.module.css'
import { Link } from 'react-router-dom'
import Image from "../../assets/divimage.jpg"
const API = "https://api.coingecko.com/api/v3/simple/price?ids=aptos%2Cbitcoin%2Cethereum&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=false&precision=2";

function Home() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            if(data.length >0){
                setUsers(data);
            }
            console.log(data);
            setUsers(data)
        }catch(e){
            console.error(e);
            
        }
    }
    useEffect(()=>{
        fetchUsers(API);
    },[])


  return (

    <div className={style.bg}>
        <div className={style.navbar}>
            <div className={style.nav_logo}>
                <p className={style.nav_text}>Aptos</p>
            </div>
            <div className={style.nav_button}>
            <Link to="/trading" className={style.button}>Launch Exchange</Link>
            </div>
        </div>
        <div className={style.herosection}>
            <div className={style.hero_text}>
            <p>Trade Options, Perps and <br/>
            Strategies.<br/>
            All in One Place.</p>
            </div>
        </div>
        <div className= {style.information}>
            <div className={style.inside}>
                <div className={style.inside_a}>
                    <UserData users = {users}/>
                </div>

            </div>
        </div>

        <div className={style.hero_img_section}>
            <div className={style.hero_img}>  
            </div>
            <div className={style.hero_img_text}>
                <img className={style.round} src={Image} alt='logo' />
                <h3>FRIEND-USD is Live</h3>
                <p>Long or short the market cap of friend. Tech account on Aptos Today</p>
            </div>
        </div>


        <div className={style.decen_section}>
            <div className={style.decen_text}>
            <p>Decentralised Trading <br/>
            With CEX-Like <br/>
            Performance</p>
            </div>
            <div className={style.decen_information}>
                <p>Aptos supports options, perpetual futures, and many other products within a single margin account. Combining off-chain matching with on-chain settlement, the platform allows traders to have unparalleled performance and latency while inheriting the security of Ethereum. </p>
                <div className={style.decen_number}>
                <div className={style.decen_trade}>
                    <div>
                    <p className={style.total}>Total volume Traded</p>
                    <p className={style.decen_numberfont}>{'>'}$1P</p>
                    </div>
                    <div className={style.total_margin}>
                    <p className={style.total}>Current Open Traded</p>
                    <p className={style.decen_numberfont}>{'>'}$50m</p>
                    </div>
                </div>
                <div className={style.decen_trade}>
                    <div>
                    <p className={style.total}>Aptos Tanscation Exchange</p>
                    <p className={style.decen_numberfont}>{'>'}5, 000 tps</p>
                    </div>
                    <div className={style.total_margin}>
                    <p className={style.total}> Aptos Exchange Latency</p>
                    <p className={style.decen_numberfont}>{'<'}10ms</p>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div className={style.footer}>
            <div className={style.footer_information}>
                <p className={style.foot_info_text}>Make Your<br/> Move</p>
            </div>
            <div style={{display: 'flex', marginLeft : '3vw' }}>
            <div className={style.footer_link}>
                <div className={style.link_inside}>
                    <a style={{ color: 'blue' }}>Community /</a>
                    <a>Twitter</a>
                    <a>Discord</a>
                    <a>Github</a>
                </div>
            </div>
            <div className={style.footer_link}>
                <div className={style.link_inside}>
                    <a style={{ color: 'blue' }}>Community /</a>
                    <a>Twitter</a>
                    <a>Discord</a>
                    <a>Github</a>
                </div>
            </div>
            <div className={style.footer_link}>
                <div className={style.link_inside}>
                    <a style={{ color: 'blue' }}>Community /</a>
                    <a>Twitter</a>
                    <a>Discord</a>
                    <a>Github</a>
                </div>
            </div>
            <div className={style.footer_link}>
                <div className={style.link_inside}>
                    <a style={{ color: 'blue' }}>Community /</a>
                    <a>Twitter</a>
                    <a>Discord</a>
                    <a>Github</a>
                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Home;