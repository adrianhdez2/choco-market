import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Error from './pages/Error'
import Details from './pages/Details'
import ProductsUser from './pages/ProductsUser'
import Cart from './pages/Cart'
import { CartProvider } from './components/context/cart'
import User from './pages/User'
import Purchases from './components/user/Purchases'
import Settings from './components/user/Settings'
import Statistics from './components/user/Statistics'
import HomeUser from './components/user/HomeUser'

function App() {

  return (
    <CartProvider>

      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/signup' Component={SignUp} />
        <Route path='/cart' Component={Cart} />
        <Route path='/products/:user' Component={ProductsUser} />
        <Route path='/products/details/:id' Component={Details} />
        <Route path='/*' Component={Error} />
        <Route path='/user' Component={User}>
          <Route path='/user/home' Component={HomeUser} />
          <Route path='/user/compras' Component={Purchases} />
          <Route path='/user/estadisticas' Component={Statistics} />
          <Route path='/user/settings' Component={Settings} />
        </Route>
      </Routes>
      <Footer />

    </CartProvider>
  )
}

export default App
