import React, { useState, useEffect } from 'react' 
import Marquee from 'react-fast-marquee'
import { motion } from "framer-motion";
import { style } from 'framer-motion/client';
import gsap from 'gsap';


const Second = () => {



  const [showCard, setShowCard] = useState(false);
  const [showCard2, setShowCard2] = useState(false);
  
  const handleCardClick  = () =>{
    setShowCard(!showCard);
    // console.log('hello')
  }
  const handleCard2Click  = () =>{
    setShowCard2(!showCard2);
    // console.log('hello')
  }
  
  
  
  const [menu, setMenu] = useState(false);
  let tl = gsap.timeline({ paused: true }); // Ensure the timeline is paused by default

  useEffect(() => {
    // Define animations
    tl.to(".menu", {
      right: 0,
      duration: 0.5,
      // ease: "power2.out",
    })
      .from(".menu-icon", {
        opacity: 0,
        duration: 1,
      });

    return () => {
      tl.kill(); // Cleanup timeline when component unmounts
    };
  }, [tl]);

  // OPEN MENUBAR
  const handleMenuOpen = () => {
    setMenu(false);
    tl.play(); // Play animation
  };

  // CLOSE MENUBAR
  const handleMenuClose = () => {
    setMenu(false);
    tl.reverse(); // Reverse animation
  };


   
  

   
   

   
   

 
  return (<>
  

    <div  className='main w-full h-screen  bg-zinc-900  flex flex-col justify-between overflow-hidden'> 

        <div className="box2  h-24 w-full   flex justify-between p-2 items-center select-none relative">

          
          <h1   className="  h-12 w-32  text-xl flex items-center">Logo</h1>
          <div className="h-12 w-48 flex items-center gap-x-6 "> 
          <span onClick={handleCard2Click }  className="material-symbols-outlined cursor-pointer hover:text-blue-900 rounded-full hover:bg-black">notifications</span>
          {showCard2 && (<motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}   className="card2 bg-zinc-950  absolute h-16 w-52 mt-2 ml-[-220px] rounded-xl border-1 border-gray-700 p-2"> Notification

          </motion.div>)}
          <span onClick={handleMenuOpen } className="material-symbols-outlined cursor-pointer hover:text-blue-900 rounded-full hover:bg-black" >help</span>
          
         <div  className="menu bg-zinc-950/50   backdrop-blur-2xl  absolute w-[500px] h-[650px]   mt-[700px] rounded-2xl border-1 border-gray-700 flex right-[-540px]  ]">
           <span onClick={handleMenuClose} class=" icon material-symbols-outlined bg-zinc-800  rounded-full cursor-pointer w-fit ">close</span> 
           
              
           
          
          </div> 

          <span onClick={handleCardClick } className="material-symbols-outlined cursor-pointer hover:text-blue-900 rounded-full hover:bg-black">contacts_product</span>

          {showCard && (<motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}   className="card1 bg-zinc-950  absolute h-44 w-32 mt-52 ml-16 rounded-xl border-1 border-gray-700 p-2"> Contact

          </motion.div>)}
          
         
            </div>


        </div>

        <section className='absolute mt-[-90px] select-none pointer-events-none'>     
     <div  className=" img-container flex justify-center items-center flex-col ">
     <img   className="image   opacity-40" src="bg.jpg" alt="" />

     <div className="text-white absolute flex flex-col justify-center items-center">
      <h1 className="text-[170px]">
        <span className="text-stroke">OutLook</span> Above
      </h1>
      <p className="opacity-50 w-48 text-[13px] text-center">
         
        A Showcase of the World's largest aerial photography
      </p>
     

     </div>

   </div>
          </section>


        <Marquee speed={100} pauseOnHover={true}   >
            <div className="boxes flex flex-row gap-8 mx-4  mb-4 cursor-grab pointer-events-none select-none">

      <img src="img1.jpg" alt="" className=' w-80 h-44 ' />
      <img src="img2.jpg" alt="" className=' w-80 h-44' />
      <img src="img3.jpg" alt="" className=' w-80 h-44' />
      <img src="img4.jpg" alt="" className=' w-80 h-44' />
      <img src="img5.jpg" alt="" className=' w-80 h-44' />
      <img src="img6.jpg" alt="" className=' w-80 h-44' />
      <img src="por.jpg" alt="" className=' w-80 h-44' />
      <img src="por.jpg" alt="" className=' w-80 h-44' />
      {/* <div className="box bg-black w-60 h-40">  </div> */}
      {/* <div className="box bg-black w-60 h-40">  </div>
      <div className="box bg-black w-60 h-40">  </div>
      <div className="box bg-black w-60 h-40">  </div>
      <div className="box bg-black w-60 h-40">  </div>
      <div className="box bg-black w-60 h-40">  </div>
      <div className="box bg-black w-60 h-40">  </div>  */}
            </div>
        </Marquee>
     
    </div>

    </>
  )
}

export default Second