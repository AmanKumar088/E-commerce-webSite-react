import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashbord from './Component/Dashbord/Dashbord';
import SeeMoreProduct from './Component/Dashbord/SeeMoreProduct/SeeMore';
import SingleCart from './Component/Dashbord/SingleCart/SingleCart';
import AddCart from './Component/Dashbord/AddCart/AddCart';
import AuthLogin from './Component/Auth/AuthLogin';
import AuthSignup from './Component/Auth/AuthSignup';
import GetContextData from './Component/Context/GetContext';
import Google from './Component/Dashbord/GooglePhone/Google';
import Nokia from './Component/Dashbord/NokiaPhone/Nokia';
import OnePlus from './Component/Dashbord/OneplusPhone/Oneplus';
import Samsung from './Component/Dashbord/SamSungPhone/Samsung';
import Vivo from './Component/Dashbord/VivoPhone/Vivo';
import Realme from './Component/Dashbord/RealmePhone/Realme';
import Redmi from './Component/Dashbord/RedmiPhone/Redmi';
import Iphone from './Component/Dashbord/IphonePhone/Iphone';
import Oppo from './Component/Dashbord/OppoPhone/Oppo';
import Placeorder from './Component/Dashbord/AddCart/PlaceOrder/PlaceOrder';

function App() {
  return (
    <>
    
    <Router>
    <GetContextData>
      <Routes>
        <Route path='/' element={<Dashbord />}></Route>
        <Route path='/seemore' element={<SeeMoreProduct />}></Route>
        <Route path='/singlecart/:id' element={<SingleCart />}></Route>
        <Route path='/addcart' element={<AddCart />}></Route>
        <Route path='/login' element={<AuthLogin />}> </Route>
        <Route path='/signup' element={<AuthSignup />}></Route>
        <Route  path='/google' element={<Google />}></Route>
        <Route path='/nokia' element={<Nokia />}></Route>
        <Route path='/oneplus' element={<OnePlus />}></Route>
        <Route path='/samsung' element={<Samsung />}></Route>
        <Route path='/vivo' element={<Vivo />}></Route>
        <Route path='/realme' element={<Realme />}></Route>
        <Route path='/redmi' element={<Redmi />}></Route>
        <Route path='/iphone' element={<Iphone />}></Route>
        <Route path='/oppo' element={<Oppo />}></Route>
        <Route path='/placeorder' element={<Placeorder />}></Route>
      </Routes>
      </GetContextData>
    </Router>
    

    </>
  );
}

export default App;
