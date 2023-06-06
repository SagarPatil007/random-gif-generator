import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

  // hook {custom}
  const {gif,loading,fetchData} = useGif();

  function clickHandler(){
    fetchData();
  }

  return (
    <div className='flex flex-col w-1/2  bg-green-500 items-center 
        rounded-lg border border-black gap-y-5 mt-[15px]'>
        
        <h1 className=' mt-6 text-2xl underline uppercase font-bold'>A Random Gif</h1>

        { loading ? <Spinner/> : <img src={gif} width='450' alt='img'/> }
        
        <button onClick={clickHandler} className='w-10/12 mb-6 bg-white text-lg py-2 rounded-lg'>Generate</button>
    
    </div>
  )
}

export default Random