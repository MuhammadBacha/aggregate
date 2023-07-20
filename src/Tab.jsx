import React from 'react'

function Tab({setTab,tab,text}){
  return (
  <h1
    className={`border-t-2 border-solid border-black cursor-pointer ${
      tab === text && 'border-b-2'
    }`}
    onClick={() => setTab(text)}
  >
    {text}
  </h1>
);

  
}


export default Tab;