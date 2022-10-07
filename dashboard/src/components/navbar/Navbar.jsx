import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchIcon className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
