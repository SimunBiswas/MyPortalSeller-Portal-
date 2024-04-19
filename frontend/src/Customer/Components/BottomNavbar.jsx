// have to do buttom Navbar like limeroad.com when web run on mobile
//with fuctionlity to 
// redirct  to particlue page


import React from 'react'
import '../Components/styles/BottomNavbar.css'
import { FaHome, FaSearch ,FaUser} from "react-icons/fa";
import { Link } from 'react-router-dom';
 
const BottomNavList = [
  {
    id : 0,
    to: "/",
    icon : <FaHome size={25} />,
    NavName: "Home"
  },
  {
    id : 1,
    to: "#",
    icon : <FaSearch size={25} />,
    NavName: "Categories"
  },
  {
    id : 2,
    to: "#",
    icon : <FaUser size={25} />,
    NavName: "Account"
  },
]

function BottomNavbar() {
  return (
    <nav className="bottom-nav">
    
    {BottomNavList.map(({ id, to, icon ,NavName}) => (
        <Link to={to} className="nav-item">
        {icon}
          <span>{NavName}</span>
        </Link>
      ))}
  </nav>
  )
}

export default BottomNavbar