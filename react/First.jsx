import React, { useState, useEffect } from "react";

const First = () => {



  const handleUpClick = () => {
    //  console.log('upperclick was clicked' + text)
      setText(text.toUpperCase())
      
    // setText('i am ayaan')
  }
  const handleLoClick = () => {
    //  console.log('upperclick was clicked' + text)
     setText(text.toLowerCase())
   
  }
  const handleClearClick = () => {
    //  console.log('upperclick was clicked' + text)
    setText(' ')
   
  }
  const handleOnChange = (event) => {
    //  console.log('On change')
     setText(event.target.value)
  }
  const handleCopyClick = () => {
    //  console.log('copy text')
    navigator.clipboard.writeText(text).then(()=>{
      alert('copied : ' + text)
    })
    
  }

  const [isDarkMode, setIsGrayMode] = useState(false);

   useEffect(() => {
      // Update the body background color based on the theme
      document.body.style.backgroundColor = isDarkMode ? "gray" : "black";
    }, [isDarkMode]);
  

  const toggleGrayMode = () => {
    setIsGrayMode(!isDarkMode);
  };

 
  const [text, setText] = useState('')
  return (
    <>
    <div className={` w-full h-screen flex items-center justify-center flex-col gap-8 app ${isDarkMode ? "black" : "white"}`}  >
    <button className='btn btn-soft' onClick={toggleGrayMode}>
        Switch to {isDarkMode ? "dark" : "light"} Mode
      </button>

    <div className='gap-y-5 flex flex-col  '>

    <h1 className='font-semibold text-4xl text-zinc-400 '   style={{ color: isDarkMode ? "black" : "gray" }} >Change text to UPPERCASE </h1>
    <textarea className="form-Control w-[900px] h-[290px] p-2 shadow-2xl"   id="myBox" value={text} onChange={handleOnChange} rows="8" style={{ color: isDarkMode ? "black" : "gray" }}  ></textarea>       

      <div className='flex gap-6'>
    <button className='btn  btn-soft' onClick={handleUpClick}>Convert to UPPERCASE</button>
    <button className='btn  btn-soft' onClick={handleLoClick}>Convert to lowercase</button>
    <button className='btn  btn-soft ' onClick={handleClearClick}>Clear text</button>
    <button className='btn  btn-soft ' onClick={handleCopyClick}>Copy text</button>
      </div>
      <p className='text-zinc-400' style={{ color: isDarkMode ? "black" : "gray" }} >{text.split(" ").filter((element)=>{return element.length!==0}).length} Words &  {text.replace(/\s/g, '').length} Characters</p>
    
      </div>
    </div>
      {/* <div className="h-[01px] bg-zinc-400 w-full"></div> */}

    

    
    </>
  )
}

export default First