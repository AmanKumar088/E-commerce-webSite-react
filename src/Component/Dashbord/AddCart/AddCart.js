import { useEffect, useState } from "react";
import { PublicImg } from "../../Constent/Url";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import "./AddCart.css";
import { DeleteCartApi, GetCartApi } from "../../../Api/CartApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


export default function AddCart() {
    const [data, setData] = useState([])
    const [cunt, setCunt] = useState(1)
    const navigate=useNavigate()
    const getCart = async () => {
        const ee = await GetCartApi();
        setData(ee.data)
    }

    const DeleteCart=async (id)=>{
        const res=await DeleteCartApi(id)
        console.log(res)
        if(res.status==="success"){
            toast.success( 'remove cart successfully', {
                position: "top-center",
                autoClose:4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            navigate('/addcart')
        }else{
            toast.success( 'id dose not match', {
                position:'top-right',
                autoClose:4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }

    useEffect(() => {
        getCart()
    }, [])
    return (
        <>
            <Header />

            <div className="con">
                {
                    data?.map((value, index) => {
                        return (
                            <>
                                <div className="row">
                                    <div className="cart-div">
                                        <div className="cart-inner-div">
                                            <div className="cart-img">
                                                <img src={`http://localhost:200/uploadImages/${value.cartDetails[0].product_img}`} width={150} height={150}></img>
                                            </div>
                                            <div className="cart-info">

                                                {/* <h5>Google Pixel 7a (Snow, 128 GB)8 GB RAM</h5> */}
                                                <h5>{value.cartDetails[0].brand_name}</h5>
                                                <p>Seller:IndiFlashMart</p>
                                                <h5><del style={{ color: "gray" }}>₹42999</del> {value.cartDetails[0].product_price}<span style={{ color: "green" }}> 6% Off3 offers applied</span></h5>
                                            </div>
                                            <div className="quantity-div">
                                                <button id="addQuantity" onClick={() => setCunt(cunt - 1)}>-</button>
                                                <input text='text' value={cunt} id="input"></input>
                                                <button id="addQuantity" onClick={() => setCunt(cunt + 1)}>+</button>
                                            </div>
                                            <div className="save-later">
                                                <h5>SAVE FOR LATER</h5>
                                            </div>
                                            <div className="remove-div">
                                                <button id="removebtn" onClick={()=>DeleteCart(value._id)}>REMOVE</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price-div">
                                        <div className="price-details-div">
                                            <h1>PRICE DETAILS</h1>
                                        </div>
                                        <div className="price-item-div">
                                            <h1>Price (1 items)<span>{value.cartDetails[0].product_price}</span></h1>
                                            <h1>Discount<span style={{ color: "green" }}>− ₹5,001</span></h1>
                                            <h1>Delivery Charges<span style={{ color: "green" }}><del>₹70</del> Free</span></h1>
                                            <h1>Total Amount<span>{value.cartDetails[0].product_price}</span></h1>
                                            <h1 style={{ color: "green" }}>You will save ₹5,001 on this order</h1>
                                        </div>


                                    </div>


                                    <div className="placeorder-div">
                                        <button id="order-btn" onClick={()=>navigate('/placeorder')}>PLACE ORDER</button>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }



            </div>



            <Footer />


            <ToastContainer position="top-center"
                autoClose={4000}
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