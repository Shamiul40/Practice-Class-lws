
import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import Stats from './Components/Stats'


const initialCounters = [
  {
    id: 1,
    value: 0
  },
  {
    id: 2,
    value: 0
  }
]

function App() {
const [counters, setCounters] = useState(initialCounters)

const totalValue = counters.reduce((acc, counter) => acc + counter.value, 0);
console.log(totalValue)

  const handleIncrement = (id) => {
    setCounters(counters.map(counter=>{
      if(counter.id===id){
        return {
          ...counter,
          value: counter.value + 1
        }
      }
      return counter;
    }))
  }

  const handleDecrement = (id) => {
    setCounters(counters.map(counter=>{
      if(counter.id===id){
        return {
          ...counter,
          value: counter.value - 1
        }
      }
      return counter;
    }))
  }
 
  

  return (
    <div className='flex justify-center flex-col items-center gap-5 mt-10'>
    <h1 className='text-2xl'>Simple Counter Application</h1>
      {
        counters.map((counter)=>(
          <Counter key={counter.id} count={counter.value} handleIncrement={()=>handleIncrement(counter.id)} handleDecrement={()=>handleDecrement(counter.id)}></Counter>
        ))
      }

      <div>
        <Stats count={totalValue}></Stats>
      </div>
    </div>
  )
}

export default App
