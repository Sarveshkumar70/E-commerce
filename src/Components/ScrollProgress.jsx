import React,{useState,useEffect} from "react";

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollBar = ()=>{
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const progress = (scrollTop/scrollHeight)*100 
    setScrollProgress(progress)
  };

  useEffect(() => {
    window.addEventListener('scroll',scrollBar)
  
    return () => {
      window.removeEventListener('scroll',scrollBar)
    }
  }, [])
  

  return (
    <>
      <div
        style={{
          position: "fixed",
          width: `${scrollProgress}%`,
          height: "6px",
          top: 0,
          left: 0,
          zIndex: 9999,
          backgroundColor: "#3498db",
        }}
      ></div>
    </>
  );
}

export default ScrollProgress;
