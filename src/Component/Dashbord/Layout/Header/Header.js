import { PublicImg } from '../../../Constent/Url';
import "../Header/Header.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiShop } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
export default function Header() {

    return (
        <>
            <div className='contai'>
                <div className='row'>
                    <div className='col-2'>
                        {/* <img src={`${PublicImg}Flipkart logo.jpeg`} width={180} height={50}></img> */}
                        <h3>E-Commerce</h3>
                    </div>
                    <div className='col-5'>
                        <input type='search' className='input-box' placeholder={`Search for Products, Brands and More`}></input>
                    </div>
                    <div className='col-md-5'>
                        <button id='user'><FaRegCircleUser style={{ width: '24%', height: 'auto' }} /> Login</button>
                    </div>
                    <div className='cart-div'>
                       <Link to="/addcart" style={{textDecoration:"none",color:"black" }}><h5 title='Cart'> <HiOutlineShoppingCart style={{ width: "30", height: "auto"}} />Cart</h5></Link> 
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