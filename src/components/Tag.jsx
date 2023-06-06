import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {

  const[tag,setTag] = useState('car');
  const{gif,loading,fetchData} =  useGif(tag);

  function clickHandler(){
    fetchData(tag); 
  }

  function changeHandler(event){
    setTag(event.target.value);
  }

  return (
    <div className='flex flex-col w-1/2  bg-blue-500 items-center 
        rounded-lg border border-black gap-y-5 mt-[15px]'>
        
        <h1 className=' mt-6 text-2xl underline uppercase font-bold'>Random Gif</h1>
        
        { loading ? <Spinner/> : <img src={gif} width='450' alt='img'/> }
        
        <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center' onChange={changeHandler} value={tag}/>        
        <button onClick={clickHandler} className='w-10/12 mb-6 bg-white text-lg py-2 rounded-lg'>Generate</button>
    
    </div>
  )
}

export default Tag