import React, { useEffect, useState } from 'react'
import Tab from './Tab'
import Form from './Form'
import Content from './Content';

function App() {
  const [tab,setTab] = useState('FSc');
  return (
    <div className='flex flex-col h-[100vh] items-center overflow-scroll'>
      <h1 className='text-3xl font-bold p-1'>AGGREGATE CALCULATOR</h1>
      <div className='border-2 border-solid border-black'>
        <h1 className='text-center'>Select your intermediate programme</h1>
        <div className='grid grid-cols-2 text-center text-xl'>
          <Tab tab={tab} setTab={setTab} text='FSc'/>
          <Tab tab={tab} setTab={setTab} text='A levels'/>
        </div>
        <Content tab={tab}/>
      </div>
    </div>
  )
}

export default App