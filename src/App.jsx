import { Routes, Route } from 'react-router-dom'
import Footer from './components/global/Footer'
import Header from './components/global/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Error from './pages/Error'
import Details from './pages/Details'
import Cart from './pages/Cart'
import { CartProvider } from './components/context/cart'
import User from './pages/User'
import HomeUser from './pages/user/HomeUser'
import Purchases from './pages/user/Purchases'
import Settings from './pages/user/Settings'
import ProductList from './pages/user/ProductList'
import ProductDetails from './pages/user/ProductDetails'
import AddProduct from './pages/user/AddProduct'
import Search from './pages/Search'
import { FilterProvider } from './components/context/filters'
import DetailsPurch from './pages/user/DetailsPurch'
import PrivateRoute from './pages/user/PrivateRoute'
import PrivateRoutesLS from './utils/PrivateRoutesLS'

function App() {

  return (
    <CartProvider>
      <FilterProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutesLS />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/details/:id" element={<Details />} />
          <Route path='/search' element={<Search />} />
          <Route element={<PrivateRoute />}>
            <Route path="/user" element={<User />}>
              <Route index element={<HomeUser />} />
              <Route path="compras" element={<Purchases />} />
              <Route path="compras/:id" element={<DetailsPurch />} />
              <Route path="settings" element={<Settings />} />
              <Route path="productos" element={<ProductList />} />
              <Route path="productos/add/new" element={<AddProduct />} />
              <Route path="productos/:idProducto/edit" element={<ProductDetails />} />
            </Route>
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </FilterProvider>
    </CartProvider>
  )
}

export default App
