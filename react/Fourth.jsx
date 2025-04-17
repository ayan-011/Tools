// import React  from "react";
// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";

 

// const Fourth = () => {

//   const SpotlightButton = () => {
//     const btnRef = useRef(null);
//     const spanRef = useRef(null);
  
//     useEffect(() => {
//       const handleMouseMove = (e) => {
//         const { width } = e.target.getBoundingClientRect();
//         const offset = e.offsetX;
//         const left = `${(offset / width) * 100}%`;
  
//         spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
//       };
  
//       const handleMouseLeave = () => {
//         spanRef.current.animate(
//           { left: "50%" },
//           { duration: 100, fill: "forwards" }
//         );
//       };
  
//       btnRef.current.addEventListener("mousemove", handleMouseMove);
//       btnRef.current.addEventListener("mouseleave", handleMouseLeave);
  
//       return () => {
//         btnRef.current.removeEventListener("mousemove", handleMouseMove);
//         btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
//       };
//     }, []);
  
//     return (
//       <motion.button
//         whileTap={{ scale: 0.985 }}
//         ref={btnRef}
//         className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white cursor-pointer "
//       >
//         <span className="pointer-events-none relative z-10 mix-blend-difference">
//           Hover me
//         </span>
//         <span
//           ref={spanRef}
//           className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
//         />
//       </motion.button>
//     );
//   };
   

//   return (
//     <div     className="bg-zinc-800 w-full h-screen flex items-center justify-center" >
//          <SpotlightButton />
//     </div>
//   );
// };

// export default Fourth;

import React, { useEffect, useState } from "react";
import {  FiArrowRight,  FiBarChart2,  FiChevronDown,  FiHome,  FiPieChart,} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Fifth from "./Fifth";
import Sixth from "./Sixth";
import Seven from "./Seven";
import Eight from "./Eight";
import Nine from "./Nine";
import { Eleven } from "./Eleven";
 


 const Fourth = () => {
  return (
    <div className="flex h-96   w-full justify-start bg-neutral-950 p-8 text-neutral-200 md:justify-center">
      <Tabs />
      <div className="fifth  w-full absolute mt-72">

      <Fifth/>
      <Sixth/>
      <Seven/>
      <Eight/>
      <Nine/>
      <Eleven/>
       
       
      </div>
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? " bg-neutral-800 text-neutral-100"
          : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const Products = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">Startup</h3>
          <a href=" " className="mb-1 block text-sm text-neutral-400">
            Bookkeeping
          </a>
          <a href=" " className="block text-sm text-neutral-400">
            Invoicing
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Scaleup</h3>
          <a href="" className="mb-1 block text-sm text-neutral-400">
            Live Coaching
          </a>
          <a href="" className="mb-1 block text-sm text-neutral-400">
            Reviews
          </a>
          <a href="" className="block text-sm text-neutral-400">
            Tax/VAT
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Enterprise</h3>
          <a href="" className="mb-1 block text-sm text-neutral-400">
            White glove
          </a>
          <a href=" " className="mb-1 block text-sm text-neutral-400">
            SOX Compliance
          </a>
          <a href=" " className="block text-sm text-neutral-400">
            Staffing
          </a>
          <a href=" " className="block text-sm text-neutral-400">
            More
          </a>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <div
        href=" "
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50 cursor-pointer"
      >
        <FiHome className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Startup</span>
      </div>
      <div
        href=""
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50 cursor-pointer"
      >
        <FiBarChart2 className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Scaleup</span>
      </div>
      <div
        href=" "
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50 cursor-pointer"
      >
        <FiPieChart className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Enterprise</span>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a href=" ">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/4.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
        <a href=" ">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/5.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300 ">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const TABS = [
  {
    title: "Products",
    Component: Products,
  },
  {
    title: "Pricing",
    Component: Pricing,
  },
  {
    title: "Blog",
    Component: Blog,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));



export default Fourth