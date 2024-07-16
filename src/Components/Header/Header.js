import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
function Header() {
  const history = useHistory()
  const {user}= useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        
        <div className="language">
          <span> OLX Demo Website</span>
          
        </div>
        <div className="loginPage">
          <span onClick ={()=>{history.push('/login')}}>{user ? ` Welcome ${user.displayName} ` : 'Login' }</span>
          
          <hr />
          
        </div>
        <div className="logout">
       {user && <span onClick ={()=>{
        firebase.auth().signOut()
        history.push('/login')
       }} >Logout</span> }</div>
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick ={()=>{history.push('/create')}}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
