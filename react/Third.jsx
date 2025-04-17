import React  from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


const Third = () => {

  // GSAP ScrollTrigger animation
  gsap.to(".card1", {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
      trigger: ".card1",
      start: "top 80%", // Adjust for when the animation starts
      end: "bottom 20%",
      markers: true, // Show debug markers for troubleshooting
      //scrub: true,  // Smooth animation during scrolling
    },
  }); 
  
  
  
  return (
   <>
   <div   className="bg-black w-full h-[450vh]   overflow-hiddenjustify-center relative">
     
      <main className="w-full   text-center text-white flex flex-col items-center gap-16 pt-[15vh]  ">
      {/* card1 */}
      <div className="card card1 sticky top-[15vh] flex flex-col  gap-4  items-center bg-[#2e251e] w-[20vw] py-[10vh] rounded-[25px] px-[20px]">
        <img className="w-[180px] aspect-square" src="./thirdImg/1.png" alt="" />
        <h1 className="text-4xl font-thin">The <br />
        <span className="font-bold">Alforithm</span>
        </h1>
        <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</p>
      </div>
      {/* card2 */}
      <div className="card card2   sticky top-[15vh] flex flex-col  gap-4  items-center bg-[#2e201e] w-[20vw] py-[10vh] rounded-[25px] px-[20px]">
        <img className="w-[180px] aspect-square" src="./thirdImg/2.png" alt="" />
        <h1 className="text-4xl font-thin">The <br />
        <span className="font-bold">Alforithm</span>
        </h1>
        <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</p>
      </div>
      <div className="card card3   sticky top-[15vh] flex flex-col  gap-4  items-center bg-[#2e251e] w-[20vw] py-[10vh] rounded-[25px] px-[20px]">
        <img className="w-[180px] aspect-square" src="./thirdImg/3.png" alt="" />
        <h1 className="text-4xl font-thin">The <br />
        <span className="font-bold">Alforithm</span>
        </h1>
        <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</p>
      </div>
      <div className="card car4   sticky top-[15vh] flex flex-col  gap-4  items-center bg-[#2e201e] w-[20vw] py-[10vh] rounded-[25px] px-[20px]">
        <img className="w-[180px] aspect-square" src="./thirdImg/4.png" alt="" />
        <h1 className="text-4xl font-thin">The <br />
        <span className="font-bold">Alforithm</span>
        </h1>
        <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</p>
      </div>
      <div className="card car5   sticky top-[15vh] flex flex-col  gap-4  items-center bg-[#2e251e] w-[20vw] py-[10vh] rounded-[25px] px-[20px]">
        <img className="w-[180px] aspect-square" src="./thirdImg/5.png" alt="" />
        <h1 className="text-4xl font-thin">The <br />
        <span className="font-bold">Alforithm</span>
        </h1>
        <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</p>
      </div>
      <div className="card car6   sticky top-[15vh] flex flex-col  gap-4  items-center bg-[#2e201e] w-[20vw] py-[10vh] rounded-[25px] px-[20px]">
        <img className="w-[180px] aspect-square" src="./thirdImg/6.png" alt="" />
        <h1 className="text-4xl font-thin">The <br />
        <span className="font-bold">Alforithm</span>
        </h1>
        <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</p>
      </div>
      </main>
     
   </div>
   </>
  );
};

export default Third;


 