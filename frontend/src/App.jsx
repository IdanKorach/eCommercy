import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/host/Dashboard';
import ShoppingCart from './pages/Host/ShoppingCart';
import Listing from './pages/Host/Listing';
import Messeges from './pages/Host/Messeges';
import ListingDetail from './pages/host/ListingDetail';
import ListingsLayout from './components/ListingsLayout';
import ListingPricing from './pages/host/ListingPricing';
import ListingPhotos from './pages/host/ListingPhotos';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Layout/> }>
          <Route index element={<Home />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
          <Route path='products'>
            <Route index element={<Products />} />
            <Route path=':id'>
              <Route index element={<ProductDetail />} />
              <Route path='contact' element={<Contact />} />
            </Route>
          </Route>

          <Route path='host' element={<HostLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path='shoppingcart' element={<ShoppingCart/>} />
            <Route path='listing'>
              <Route index element={<Listing/>} />
              <Route path=':id' element={<ListingsLayout/>}>
                <Route index element={<ListingDetail/>} />
                <Route path='pricing' element={<ListingPricing/>} />
                <Route path='photos' element={<ListingPhotos/>} />
              </Route>
            </Route>
            <Route path='messeges' element={<Messeges/>} /> 
          </Route>
     
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;