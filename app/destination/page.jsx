'use client'

import {useRouter} from 'next/navigation'

const Page = () => {

  const router = useRouter()
  

  return (
    <div className="flex items-center justify-center flex-col mt-10">
      <h1 className="mb-2">Choose Your Destination</h1>
      <div className="flex flex-col gap-2">

        <div onClick={()=> router.push('/destination/paris')} className="w-50 h-30 hover:scale-105 hover:cursor-pointer ease-in duration-150 rounded-3xl flex justify-center items-center bg-amber-50 text-black">
          <h1>Paris</h1>
        </div>
        
        <div onClick={()=> router.push('/destination/france')} className="w-50 h-30 hover:scale-105 hover:cursor-pointer ease-in duration-150 rounded-3xl flex justify-center items-center bg-amber-50 text-black">
          <h1>France</h1>
        </div>
        
        <div onClick={()=> router.push('/destination/italy')} className="w-50 h-30 hover:scale-105 hover:cursor-pointer ease-in duration-150 rounded-3xl flex justify-center items-center bg-amber-50 text-black">
          <h1>Italy</h1>
        </div>
      
      </div>
      
    </div>
  )
}

export default Page