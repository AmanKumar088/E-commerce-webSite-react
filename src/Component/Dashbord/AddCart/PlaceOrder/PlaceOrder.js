import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import "./PlaceOrder.css";
export default function Placeorder(){
    return(
        <>
        <Header />
         <div className="middle_div1">
                <form>
                    
                    <label>Brand Name</label>
                    <p><input type="text" placeholder=" " name=" "></input></p>
                    <label>Model Number</label>
                    <p><input type="text" placeholder=" " name=" "  ></input></p>
                    <label>Operation Version</label>
                    <p><input type="text" placeholder=" " name=" "  ></input></p>
                    <label>Cellular Technology</label>
                    <p><input type="text" placeholder=" " name=" " ></input></p>
                    <label>Product Price</label>
                    <p><input type="text" placeholder=" " name=" "  ></input></p>
                    <label>Product Color</label>
                    <p><input type="text" placeholder=" " name=" "  ></input></p>
                    <label>Product Higtlight</label>
                    <p><input type="text" placeholder=" " name=" " ></input></p>
                    <label>Product Description</label>
                    <p><input type="text" placeholder=" " name=" "  ></input></p>
                    <label>Product Rating</label>
                    <p><input type="text" placeholder=" " name=" "  ></input></p>
                    <label>SubCategory Name</label>
                    <p><input type="text" placeholder=" " name=" "  ></input></p>
                    <label>Product Name</label>
                    <p><input type="text" placeholder=" " name=" "  ></input></p>
                    <label>Product Image</label>
                    <p><input type=" " placeholder=" " name=" "  ></input></p>
                    <p><button type="sumbit">Confirm</button></p>
                </form>
             </div>
        
        <Footer />
        </>
    )
}