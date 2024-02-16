import { useEffect, useState } from "react";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import GetAllProductApi from "../../../Api/Api";

import { Link } from "react-router-dom";
export default function Vivo(){
    const [data, setData] = useState([])
  
    const getData = async () => {
        const res = await GetAllProductApi()
        const ff=res.data;
        const tt=ff.filter((value)=>{
          return value['sub_category_name']==="vivo"
        })
        setData(tt)
    }

    useEffect(() => {
        getData()
    }, [])
    return(
        <>
       <Header />
      <div className='product'>
            <div className='row1'>
            <div className='Best-div'>
                        <div className='heading-div'>
                            
                           <h1>Vivo Phone</h1>
                        </div>
                    </div>
                    <div className='flex-div'>
            {
                data.map((value, index, array) => {
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
      <Footer />
        </>
    )
}