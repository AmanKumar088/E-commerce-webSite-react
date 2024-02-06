import { Link } from "react-router-dom";
import "../Footer/Footer.css";
import { PublicImg } from "../../../Constent/Url";
import { CiShop } from "react-icons/ci";
import { TiGift } from "react-icons/ti";
import { PiShootingStar } from "react-icons/pi";
import { AiOutlineCopyrightCircle } from "react-icons/ai"

export default function Footer(){
    return(
        <>
        <div className="contain">
            <div className="row">
                <ul style={{listStyle:"none"}}>
                    <li>ABOUT
                        <p><Link id="link">Contact Us</Link></p>
                        <p><Link  id="link">About Us</Link></p>
                        <p><Link  id="link">Careers</Link></p>
                        <p><Link  id="link" >Flipkart Stories</Link></p>
                        <p><Link  id="link">Cleartrip</Link></p>
                        <p><Link  id="link">Corporate Information</Link></p>
                    </li>

                    <li>HELP
                        <p><Link  id="link">Patment</Link></p>
                        <p><Link  id="link" >Shipping</Link></p>
                        <p><Link  id="link">Cancellation & returns</Link></p>
                        <p><Link  id="link">FAQ</Link></p>
                        <p><Link  id="link">Report Infringement</Link></p>
                    </li>

                    <li>CONSUMER POLICY
                        <p><Link  id="link">Cancellation & returns</Link></p>
                        <p><Link  id="link">Terms of use</Link></p>
                        <p><Link  id="link">Security</Link></p>
                        <p><Link  id="link">Privacy</Link></p>
                        <p><Link  id="link">Sitemap</Link></p>
                        <p><Link  id="link">Grivance Redressal</Link></p>
                        <p><Link  id="link">EPR Compliance</Link></p>
                    </li>


                    <li>SOCIAL
                        <p><Link  to='https://www.facebook.com/flipkart' id="link" >Facebook</Link></p>
                        <p><Link  to='https://twitter.com/flipkart'      id="link">Twitter</Link></p>
                        <p><Link  to='https://www.youtube.com/flipkart'  id="link">YouTube</Link></p>
                    </li>


                    <li>MAIL US:

                        <p>Flipkart Interent Private Limited</p>
                        <p>Buildings Alyssa,Begonia &</p>
                        <p>Clove Embassy Tech village,</p>
                        <p>Outer Ring Road,Devarbeesanabhalli village,</p>
                        <p>Bengluru, 560103,</p>
                        <p>Karnataka, India</p>
                    </li>


                    <li>Regristered Office Address:
                        <p>Flipkart Interent Private Limited</p>
                        <p>Bullidings Alyssa,Begonia &</p>
                        <p>Clove Embassy Tech village,</p>
                        <p>Outer Ring Road,Devarbeesanabhalli village,</p>
                        <p>Bengluru, 560103,</p>
                        <p>Karnataka, India</p>
                        <p>CIN:U5119KA2012PTC066107</p>
                        <p>TelePhone:<span style={{color:"blue"}}>044-456114700</span></p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="height-div">
        </div>
        <div className="row2">
            <div className="col">
                <div className="md-2">
                <p><CiShop style={{ width: "35", height: "30" ,color:"orange"}} /><Link style={{textDecoration:"none",color:"#fff"}}>Become a seller</Link></p>
                </div>
                <div className="md-4">
                    <p><PiShootingStar style={{ width: "35", height: "30" ,color:"orange"}}/> <Link style={{textDecoration:"none",color:"#fff"}}>Adversite</Link></p>
                </div>
                <div className="md-6">
                    <p><TiGift style={{ width: "35", height: "30" ,color:"orange"}} /><Link style={{textDecoration:"none",color:"#fff"}}>Gift Cards</Link></p>
                </div>
                <div className="md-8">
                    <p><AiOutlineCopyrightCircle />2007-2024 Flipkart.com</p>
                </div>
                <div className="visa-div">
                    <img src={`${PublicImg}visa logo.jpg`} width={320} height={45}></img>
                </div>

            </div>

        </div>

        
        </>
    )
}