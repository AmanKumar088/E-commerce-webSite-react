import { useNavigate, useParams } from "react-router-dom";
import { PublicImg } from "../../Constent/Url";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import "./SingleCart.css"
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdLocalOffer } from "react-icons/md";
import { useEffect, useState } from "react";
import { SingleProductApi } from "../../../Api/Api";
import { FcRating } from "react-icons/fc";
import AddCartApi from "../../../Api/CartApi";
import { GetStorage } from "../../Constent/Storage";

export default function SingleCart() {
    const {id}=useParams()
    const [data,setData]=useState({})
    const navigate=useNavigate()
    const singledata=async ()=>{
        const res=await SingleProductApi(id)
        setData(res.data)
    }


    const addcart={
        user_id:GetStorage()?.user_id,
        product_id:id,
        product_quantity:""
    }
    const AddCart=async ()=>{
        const ww=await AddCartApi(addcart)
       if(ww.status==="success"){
        toast.success( 'Add Cart successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
        // window.alert('add cart successfully')
        setTimeout(()=>{
            navigate('/addcart')
        })
       }else{
        // window.alert('please login now!')
        toast.error('please login now!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
           navigate('/login')
       }
    }
    useEffect(()=>{
        singledata()
    },[])
    return (
        <>
            <Header />

            <div className="containte">
                <div className="ro">
                    <div className="col-6">
                        <div className="img-div">
                            <img src={data.product_img} width={500} height={500}></img>
                        </div>
                        <div className="addcart-div">
                            <button id="add-btn" onClick={AddCart}>AddCart</button>
                        </div>
                        <div className="buy-div">
                            <button id="buy-btn">Buy Now</button>
                        </div>  
                    </div>
                    <div className="product-info">
                        <h4>{data.brand_name}</h4>
                        
                        <h6 style={{ color: "green" }}>Extra <LiaRupeeSignSolid />3000 off</h6>
                        <h3>{data.product_price} <del>43,999</del> <span style={{ color: "green" }}>6% off</span></h3>
                        
                        <h5>{data.product_highlight}</h5>
                        <h5>{data.model_number}</h5>
                        <h5>{data.operation_version}</h5>
                        <h5>{data.cellular_technology}</h5>
                        <h5>{data.product_color}</h5>
                        <h5>15,000 Rating & Reviews</h5>
                        <h5 style={{backgroundColor:"green",color:"#fff",borderRadius:"8px",width:"8%",padding:"0px 5px"}}>{data.product_rating}<FcRating/></h5>
                        <h5>Available offers</h5>
                        <p><MdLocalOffer style={{ color: "green" }} />Bank Offer10% off on Canara Bank Credit Card Transactions, up to ₹1,000 on orders of ₹5,000 and aboveT&C</p>
                        <p><MdLocalOffer style={{ color: "green" }} /> Bank OfferFlat ₹750 off on OneCard Credit Card and Credit EMI Transactions on orders of ₹12,500 and aboveT&C</p>
                        <p><MdLocalOffer style={{ color: "green" }} /> Bank Offer8% off on Yes Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹10,000 and aboveT&C</p>
                        <p><MdLocalOffer style={{ color: "green" }} /> FreebieSpotify Premium - 12M at ₹699T&C</p>
                        <h4>Description</h4>
                        <h5>{data.product_description}</h5>
                    </div>
                </div>
            </div>

            {/* Description div start */}
                {/* <div className="descrip-div">
                    <div className=""> 
                       
                    </div>
                </div> */}
            <Footer />

            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </>
    )
}