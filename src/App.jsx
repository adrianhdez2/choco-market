import { Routes, Route } from 'react-router-dom';
import Footer from './components/global/Footer';
import Header from './components/global/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Error from './pages/Error';
import Details from './pages/Details';
import Cart from './pages/Cart';
import { CartProvider } from './components/context/cart';
import User from './pages/User';
import HomeUser from './pages/user/HomeUser';
import Purchases from './pages/user/Purchases';
import Settings from './pages/user/Settings';
import ProductList from './pages/user/ProductList';
import ProductDetails from './pages/user/ProductDetails';
import AddProduct from './pages/user/AddProduct';
import Search from './pages/Search';
import { FilterProvider } from './components/context/filters';
import DetailsPurch from './pages/user/DetailsPurch';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import { PrivateRoutes } from './utils/PrivateRoute';
import { PublicRoutes } from './utils/PublicRoutes';
import Security from './pages/user/Security';
import VerifyEmail from './pages/user/VerifyEmail';

function App() {
  return (
    <CartProvider>
      <FilterProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<PublicRoutes element={<Login />} />} />
          <Route path='/signup' element={<PublicRoutes element={<SignUp />} />} />
          <Route path='/forgotPassword' element={<PublicRoutes element={<ForgotPassword />} />} />
          <Route path='/resetPassword/:token' element={<PublicRoutes element={<ResetPassword />} />} />
          <Route path='/verify/:token' element={<PrivateRoutes element={<VerifyEmail />} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products/details/:id' element={<Details />} />
          <Route path='/search' element={<Search />} />
          <Route path='/user' element={<PrivateRoutes element={<User />} />} >
            <Route index element={<HomeUser />} />
            <Route path='shopping' element={<Purchases />} />
            <Route path='shopping/:id' element={<DetailsPurch />} />
            <Route path='security' element={<Security />} />
            <Route path='settings' element={<Settings />} />
            <Route path='products' element={<ProductList />} />
            <Route path='products/add/new' element={<AddProduct />} />
            <Route path='products/:idProducto/edit' element={<ProductDetails />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </FilterProvider>
    </CartProvider>
  );
}

export default App;
