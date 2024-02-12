import { useEffect, useState } from "react";
import GetAllProductApi from "../../../Api/Api";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import { Link } from "react-router-dom";

export default function SeeMoreProduct() {
    const [data, setData] = useState([])

    const getData = async () => {
        const res = await GetAllProductApi()
        setData(...data, res.data)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Header />

            <div className='product'>
                <div className='row1'>
                    <div className='Best-div'>
                        <div className='heading-div'>
                            <h1>Mobile's</h1>
                        </div>
                    </div>
                    <div className='flex-div'>
                        {
                            data.map((value, index, array) => {
                                return (
                                    <>
                                        <div className='product-div' key={index} >
                                            <Link to={`/singlecart/${value._id}`} style={{ textDecoration: "none" }}>
                                                <div className='conatin'>
                                                    <div className='row'>
                                                        <img src={value.product_img} width={130} height={150} className='imgclass'></img>
                                                    </div>
                                                    <p className='product-name'>{value.brand_name}</p>
                                                    <p className='product-price'>{value.product_price} <del></del></p>
                                                </div>
                                            </Link>
                                        </div>


                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}