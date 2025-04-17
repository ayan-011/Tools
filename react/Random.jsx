import React, { useState, useEffect } from "react";
 

const Random = () => {

 
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1 );
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures it runs only once

  return <p className="text-center bg-black">Seconds: {seconds}</p>;
}
  
 

export default Random