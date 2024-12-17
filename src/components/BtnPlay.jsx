import React from "react";

function BtnPlay() {

  return (
    <>
    <div className="flex flex-col gap-5 justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" className="cursor-pointer">
  <circle cx="50" cy="50" r="45" stroke="red" stroke-width="5" fill="none"/>
  <polygon points="35,20 35,80 75,50" fill="red"/>
</svg>
Ver Trailer 
    </div>
    </>
  );
}

export default BtnPlay;
