import Carousel from 'react-bootstrap/Carousel';
import { PublicImg } from "../../../Constent/Url";
import "../Section/Section.css";
import { Link } from 'react-router-dom';
import { CiCircleChevRight } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useEffect, useState } from 'react';
import GetAllProductApi from '../../../../Api/Api';
export default function Section() {
    const [data, setData] = useState([])

    const getData = async () => {
        const res = await GetAllProductApi()
        setData(...data, res?.data.slice(0,10))
        console.log(res)
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <>

            <div className='containe'>
                <div className='row1'>
                    <div className='grocery-div'>
                        <Link style={{ textDecoration: "none" }} to="/google">
                            <img src={`${PublicImg}google.jpeg`} width={100} height={90}></img>
                            <h4 style={{ color: "black" }}>Google</h4>
                        </Link>
                    </div>


                    <div className='moblie-div'>
                        <Link style={{ textDecoration: "none" }} to="/nokia">
                            <img src={`${PublicImg}Nokia.jpeg`} width={100} height={90}></img>
                            <h4 style={{ color: "black" }}>Nokia</h4>
                        </Link>
                    </div>

                    <div className='fashion-div'>
                        <Link style={{ textDecoration: "none" }} to="/oneplus">
                            <img src={`${PublicImg}oneplus.webp`} width={100} height={90}></img>
                            <h4 style={{ color: "black" }}>One plus</h4>
                        </Link>
                    </div>

                    <div className='eletronis-div'>
                        <Link style={{ textDecoration: "none" }} to="/samsung">
                            <img src={`${PublicImg}sumsung.jpeg`} width={100} height={90}></img>
                            <h4 style={{ color: "black" }}>Samsung</h4>
                        </Link>
                    </div>

                    <div className='home-div'>
                        <Link style={{ textDecoration: "none" }} to="/vivo">
                            <img src={`${PublicImg}vivo.webp`} width={100} height={90}></img>
                            <h4 style={{ color: "black" }}>Vivo</h4>
                        </Link>

                    </div>

                    <div className='appliances-div'>
                        <Link style={{ textDecoration: "none" }} to="/realme">
                            <img src={`${PublicImg}realme.jpg`} width={100} height={90}></img>
                            <h4 style={{ color: "black" }}>Realme</h4>
                        </Link>
                    </div>

                    <div className='travel-div'>
                        <Link style={{ textDecoration: "none" }} to="/redmi">
                            <img src={`${PublicImg}redmi.jpeg`} width={100} height={90}></img>
                            <h4 style={{ color: "black" }}>Redmi</h4>
                        </Link>
                    </div>

                    <div className='beauty-toy-div'>
                        <Link style={{ textDecoration: "none" }} to="/iphone">
                            <img src={`${PublicImg}iphone.jpeg`} width={100} height={90}></img>
                            <h4 style={{ color: "black" }}>Iphone</h4>
                        </Link>
                    </div>

                    <div className='two-wheelers-div'>
                        <Link style={{ textDecoration: "none" }} to="/oppo">
                            <img src={`${PublicImg}oppo.jpg`} width={100} height={90}></img>
                            <h4 style={{ color: "black" }}>oppo</h4>
                        </Link>
                    </div>
                </div>
            </div>

            <Carousel>
                <Carousel.Item interval={1000}>
                    <img src={`${PublicImg}3959ad9f670aeeeb.jpg`}></img>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src={`${PublicImg}e7b40c1b2a494248.jpg`}></img>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={`${PublicImg}ed12b7707a04473c.jpg`}></img>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={`${PublicImg}fd77eeeb2d597bb0.jpg`}></img>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='product'>
            <div className='row1'>
                    <div className='Best-div'>
                        <div className='heading-div'>
                            <h1>Mobile's</h1>
                            {/* <h1>{value.product_name}</h1> */}
                        </div>
                        <div className='right-div'>
                            <h1>
                                <Link to='/seemore' style={{ textDecoration: "none" }} title='see more phone'> <CiCircleChevRight /></Link>
                            </h1>
                        </div>
                    </div>
                    <div className='flex-div'>
            {
                data?.map((value, index, array) => {
                    return (
                        <>
                            
                
                        <div className='product-div'  key={index} >
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







            {/* <div className='product'>
                <div className='row1'>
                    <div className='Best-div'>
                        <div className='heading-div'>

                            <h1>Google Mobile</h1>
                        </div>
                        <div className='right-div'>
                            <h1>
                                <Link to="/seemore" style={{ textDecoration: "none" }} title='see more phone'> <CiCircleChevRight /></Link>
                            </h1>
                        </div>
                    </div>
                    <div className='flex-div'>
                        <div className='product-div6'>
                        <Link to="/singlecart" style={{textDecoration:"none"}}><Single /></Link>
                        </div>
                        <div className='product-div7'>
                        <Link to="/singlecart" style={{textDecoration:"none"}}><Single /></Link>
                        </div>
                        <div className='product-div8'>
                        <Link to="/singlecart" style={{textDecoration:"none"}}><Single /></Link>
                        </div>
                        <div className='product-div9'>
                        <Link to="/singlecart" style={{textDecoration:"none"}}><Single /></Link>
                        </div>
                        <div className='product-div10'>
                        <Link to="/singlecart" style={{textDecoration:"none"}}><Single /></Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}