import React from 'react'

function Info({infoType,register,getValues,errors}) {

  return (
    <>
        <div className='flex flex-col text-center'>
          <div className='grid grid-cols-2 text-center sm:flex-row' >
            <label htmlFor={infoType} className='mx-2 block text-center'>Obtained marks in {infoType}</label>
            <input type="number" id={infoType} className='border-2 border-solid border-black w-[10rem] h-[2rem]'   {...register(infoType,{required: 'Obtained marks must be given',validate:(value) => {
              if(infoType==="NET") return +value < 200 || 'NET marks must be less than 200';
              else return +value <= +getValues()[`${infoType}Total`] || 'Obtained marks must be less than Total marks'
            }})}/>
          </div>
          {errors[infoType] && <p className='text-red-600 text-sm font-semibold text-center m-3'>{errors[infoType].message}</p>}
        </div>
       {infoType !== 'NET' && 
       <div className='flex flex-col justify-between items-center text-center'>
          <div className='grid grid-cols-2 text-center sm:flex-row' >
            <label htmlFor={`${infoType}Total`} className='mx-2 block text-center'>Total marks in {infoType}</label>
            <input type="number" id={`${infoType}Total`} className='border-2 border-solid border-black w-[10rem] h-[2rem]'  {...register(`${infoType}Total`,{required: "Total marks must be given"})}/>
          </div>
          {errors[`${infoType}Total`] && <p className='text-red-600 text-sm font-semibold text-center m-3'>{errors[`${infoType}Total`].message}</p>}
        </div>}
    </>
  )
}

export default Info