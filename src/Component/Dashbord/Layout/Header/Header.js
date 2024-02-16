import { PublicImg } from '../../../Constent/Url';
import "../Header/Header.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiShop } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Account } from '../../../Context/CreateContext';
export default function Header() {
    const {Logindata,logout}=useContext(Account)
    
    return (
        <>
            <div className='contai'>
                <div className='row'>
                    <div className='col-2'>
                        <h3>E-Commerce</h3>
                    </div>
                    <div className='col-5'>
                        <input type='search' className='input-box' placeholder={`Search for Products, Brands and More`}></input>
                    </div>
                    <div className='col-md-5'>
                        <FaRegCircleUser style={{ width: '24%', height: 'auto' }}/>{Logindata?.data.name}
                        <div className='loginHideDiv'>
                           <p style={{textAlign:"center",fontSize:"18px",color:"black",lineHeight:"20px"}}><Link to="/login" style={{textDecoration:"none"}}>Login</Link></p>
                           <p style={{textAlign:"center",fontSize:"18px",color:"black",lineHeight:"2px"}}><Link to="/signup" style={{textDecoration:"none",lineHeight:"10px"}}>Signup</Link></p>
                           <p style={{textAlign:"center",fontSize:"18px",color:"black",lineHeight:"2px"}}><button onClick={logout} style={{textDecoration:"none",lineHeight:"10px",border:"none",color:"blue",backgroundColor:"#fff"}}>Logout</button></p>
                        </div>
                    </div>
                    
                    <div className='cart-div'>
                        <Link to="/addcart" style={{ textDecoration: "none", color: "black" }}><h5 title='Cart'> <HiOutlineShoppingCart style={{ width: "30", height: "auto" }}/>  Cart</h5></Link>
                        <span id='cart-number'>2</span>
                      
                    </div>
                    <div className='seller-div'>
                        <h5><CiShop style={{ width: "35", height: "auto" }} /> Become a seller</h5>
                    </div>
                    <div className='three-dote-div'>
                        <BsThreeDotsVertical />
                    </div>
                </div>
            </div>


        </>
    )
}