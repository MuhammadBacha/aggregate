import React, { useState } from 'react'
import Info from './Info'
import { useForm } from 'react-hook-form'

function calcAggregate(type,{Matric, MatricTotal,FSc,FScTotal,MatricEquivalance,MatricEquivalanceTotal,NET}){
  if(type==='FSc') return ((Matric/MatricTotal)*10 + (FSc/FScTotal)*15 + (NET/200)*75).toFixed(3);
  if(type==='A levels') return ((MatricEquivalance/MatricEquivalanceTotal)*25 + (NET/200)*75).toFixed(3);
}

function Form({tab,infoArray}) {
  const [agg,setAgg] = useState();
  const {register,handleSubmit,getValues,formState:{errors}} = useForm();
  // console.log(infoArray);
  function onSubmit(formData){
    const {Matric, MatricTotal,FSc,FScTotal,NET,MatricEquivalance,MatricEquivalanceTotal} = formData;
    setAgg(calcAggregate(tab,{Matric, MatricTotal,FSc,FScTotal,NET,MatricEquivalance,MatricEquivalanceTotal}));
    // console.log(formData)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-7 p-5 max-w-[25rem]'>
      
          {infoArray.map(info => <Info register={register} infoType={info} getValues={getValues} errors={errors}/>)}
          <div className='flex justify-center'>
            <button type="submit" className='mt-5 border-2 border-black border-solid h-10 w-[9rem] text-xl hover:bg-black hover:text-white'>Calculate</button>
          </div>
      </form>
      {agg && <h1 className='p-3 text-bold text-2xl text-center'>Aggregate: <span className={`${agg>80 ? 'text-green-600' : 'text-yellow-600 '}`}>{agg}%</span></h1>}
    </>
  )
}

export default Form