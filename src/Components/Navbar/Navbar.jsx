import { useState } from 'react';
import './navbar.css'
import { FaBars,FaXmark} from "react-icons/fa6";
const Navbar = () => {
     const [menu, setMenu] = useState(false)
      
  return (
     <>
     <header>
          <h2 className='logo'>Lo<span>Go</span></h2>
          <nav>
               <ul className= {menu ? "uls active ": "uls"}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Fetuses</a></li>
                    <li><a href="#">Solutions</a></li>
               </ul>
                
          </nav>
          <div 
          className=  " icon  "  
          onClick={()=>setMenu(!menu)} >
               {menu ?  <FaXmark/> :  <FaBars />}
               
          </div>
     </header>
     
     
     </>
  )
}

export default Navbar