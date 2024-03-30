import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Error from './pages/Error'
import Details from './pages/Details'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/signup' Component={SignUp} />
        <Route path='/product/details/:id' Component={Details} />
        <Route path='*' Component={Error} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
