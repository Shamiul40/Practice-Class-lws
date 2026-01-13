
import './App.css'
import AddProduct from './Components/AddProduct'
import ProductDetails from './Components/ProductDetails'
import Productlist from './Components/Productlist'

function App() {
  

  return (
    <div className='flex w-10/12 mx-auto'>
      <AddProduct></AddProduct>
      <Productlist></Productlist>
      <ProductDetails id={5}></ProductDetails>
    </div>
  )
}

export default App
