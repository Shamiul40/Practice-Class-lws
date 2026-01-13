
import './App.css'
import ProductDetails from './Components/ProductDetails'
import Productlist from './Components/Productlist'

function App() {
  

  return (
    <div className='flex'>
      <Productlist></Productlist>
      <ProductDetails id={1}></ProductDetails>
    </div>
  )
}

export default App
