import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashbord from './Component/Dashbord/Dashbord';
import SeeMoreProduct from './Component/Dashbord/SeeMoreProduct/SeeMore';
import SingleCart from './Component/Dashbord/SingleCart/SingleCart';
import AddCart from './Component/Dashbord/AddCart/AddCart';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<Dashbord />}></Route>
        <Route path='/seemore' element={<SeeMoreProduct />}></Route>
        <Route path='/singlecart/:id' element={<SingleCart />}></Route>
        <Route path='/addcart' element={<AddCart />}></Route>

      </Routes>
    </Router>
    

    </>
  );
}

export default App;
