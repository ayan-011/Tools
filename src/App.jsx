import { useState } from 'react' 
import './App.css' 
import First from '../react/First'
import Random from '../react/Random'  
import Second from '../react/second' 
import Third from '../react/Third'
import Fourth from '../react/Fourth'
import Footer from '../react/Footer'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    
       <div className='h-screen w-full overflow-hidden flex items-center justify-center bg-black'>
       <img src="por.jpg" alt="" className='h-screen w-full blur-md absolute    ' />
       <div className='bg-zinc-700 w-44 h-44 rounded-full relative  border-2 border-zinc-500 flex justify-center items-center opacity-80 select-none cursor-pointer animate-bounce'>Ayaan Saifi</div>
       <p className='absolute mt-[180px]  '>Processing...</p>
      
       </div>

       <First/> 
       <Random/> 
       <Second/> 
       <Third/> 
       <Fourth/> 

       {/* Other pages in Fourth.jsx file */}
       {/* Ten.jsx file in nine.jsx file */}
        
        
    </>
         
  )
}

export default App
