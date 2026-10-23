'use client'

import {useRouter} from 'next/navigation'

const Page = () => {

  const router = useRouter()
  
  const cards = [{name:"Paris", pathName:"/paris"}, {name:"France", pathName:"/france"}, {name:"Italy", pathName:"/italy"}]

  return (
    <div className="flex items-center justify-center flex-col mt-10">
      <h1 className="mb-2">Choose Your Destination</h1>
      <div className="flex flex-col gap-2">
        {
          cards.map((item, idx)=>(
            <div key={idx} onClick={()=> router.push(`/destination${item.pathName}`)} className="w-50 h-30 hover:scale-105 hover:cursor-pointer ease-in duration-150 rounded-3xl flex justify-center items-center bg-amber-50 text-black">
              <h1>{item.name}</h1>
            </div>
          ))
        }
      
      </div>
      
    </div>
  )
}

export default Page