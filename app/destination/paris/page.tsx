
import Image from 'next/image'

const page = () => {
  return (
    <div>

        <h1 className='text-center my-3 text-4xl'>Welcome to the Paris, Enjoy the beautiful sight</h1>

        <div className='flex items-center w-full'>
            <Image alt='paris' width={200} height={100} src={"https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"} />
        </div>

    </div>
  )
}

export default page