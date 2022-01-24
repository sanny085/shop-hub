import React from 'react'
import { useDispatch,useSelector } from "react-redux";
import { logout } from './authSlice'
import { useHistory } from "react-router-dom";
const Logout = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const registerUser=useSelector(state=>state.authentication.user);
    
    const logOut = () =>{
        dispatch(logout());
        history.push("/signup");
    }
    console.log('Logout User',registerUser);
    return (
    <div className="cart-wrapper noselect">
      <div className="cart-header">
        <h3>{registerUser?.email && registerUser?.email}</h3> 
      </div>
     
      <div className="cart-checkout">
      <br/> 
      <div className="cart-total"><h4>Do You Really Want to Logout ?</h4></div>
        <div className="cart-checkout-button">
          <button onClick={()=> logOut()}>Logout</button>
        </div>
      </div>
    </div>
    )
}

export default Logout
