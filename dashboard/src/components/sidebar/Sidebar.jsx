import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">MalouAdmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <Link to="/users" style={{textDecoration:"none"}}>
            <li>
                <PeopleAltOutlinedIcon className="icon"/>
                <span>Users</span>
            </li>
            </Link>
            <Link to="/hotels" style={{textDecoration:"none"}}>
                 <li>
                <ProductionQuantityLimitsIcon className="icon"/>
                <span>Hotels</span>
            </li>
            </Link>
            <Link to="/rooms" style={{textDecoration:"none"}}>

            <li>
                <ListAltIcon className="icon"/>
                <span>Rooms</span>
            </li>
            </Link>
            <li>
                 <LocalShippingIcon className="icon"/>
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
                <EqualizerIcon className="icon"/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsNoneIcon className="icon"/>
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
                <MonitorHeartIcon className="icon"/>
                <span>System Health</span>
            </li>
            <li>
                <LoginIcon className="icon"/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsIcon className="icon"/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                <AccountBoxIcon className="icon"/>
                <span>Profile</span>
            </li>
            <li>
                < LogoutIcon className="icon"/>
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOptions" onClick={()=>dispatch({type:"DARK"})}></div>
        
      </div>
    </div>
  )
}

export default Sidebar
