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
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/product/details/:id' element={<Details/>}/>
        <Route path='/*' element={<Error/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
