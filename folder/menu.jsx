import React from 'react'
import { TbReportMoney } from "react-icons/tb";
import { ImUpload2 } from "react-icons/im";
import { GiWallet } from "react-icons/gi";
import { TbSpeakerphone } from "react-icons/tb";
import { HiMiniReceiptPercent } from "react-icons/hi2";
import { FcCurrencyExchange } from "react-icons/fc";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { FaBell } from "react-icons/fa6";
import { FcOnlineSupport } from "react-icons/fc";
import { IoMdSettings } from "react-icons/io";
import './style.css'

import {  NavLink } from 'react-router-dom'
const menu = () => {
  return (
<div>
  
    <div className='Container-fluid p-1 bg-warning'><h1>Menu</h1></div>
    
    <nav className=' bg-white pt-2 mb-2'>
           <h5 className='text-secondary'> Manage Business</h5><hr/>
            <ul>
                <li><NavLink to="/pricing"><TbReportMoney /> Pricing</NavLink></li>
                <li><NavLink to="/catalogupload"><ImUpload2 /> Catalog Upload</NavLink></li>
                <li><NavLink to="/payments"><GiWallet /> Payments</NavLink></li>
              
            </ul>
           <hr/>
            </nav>
          
       <nav className='bg-white  mb-2'>
           <h5 className='text-secondary'> Boost Sales</h5><hr/>
            <ul>
                <li><NavLink to="/advertisement"><TbSpeakerphone /> Advertisement</NavLink></li>
                <li><NavLink to="/promotions"><HiMiniReceiptPercent /> Promotions</NavLink></li>
                <li><NavLink to="/pricerecommendation"><FcCurrencyExchange /> Price Recommendation</NavLink></li>
            </ul>
            <hr/>
            </nav>
          
            <nav className='bg-white  '>
           <h5 className='text-secondary'> More</h5><hr/>
            <ul>
                <li><NavLink to="/learninghub"><PiYoutubeLogoFill /> Learning Hub</NavLink></li>
                <li><NavLink to="/noticeboard"><FaBell /> Notice Board</NavLink></li>
                <li><NavLink to="/support"><FcOnlineSupport /> Support</NavLink></li>
                <li><NavLink to="/setting"><IoMdSettings /> Settings</NavLink></li>
            </ul>
            </nav>
</div>
  )
}

export default menu

