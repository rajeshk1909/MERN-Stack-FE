import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Shop from "./pages/Shop"
import ShopCategory from "./pages/ShopCategory"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import LoginSignup from "./pages/LoginSignup"
import Footer from "./components/Footer/Footer"
import men_banner from "./Assets/banner_mens.png"
import women_banner from "./Assets/banner_women.png"
import kids_banner from "./Assets/banner_kids.png"

function App() {
  return (
    <div className='h-[100vh] bg-[]'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route
            path='/men'
            element={<ShopCategory banner={men_banner} category='men' />}
          />
          <Route
            path='/women'
            element={<ShopCategory banner={women_banner} category='women' />}
          />
          <Route
            path='/kids'
            element={<ShopCategory banner={kids_banner} category='kids' />}
          />
          <Route path='/product' element={<Product />}>
            <Route path=':productID' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App
