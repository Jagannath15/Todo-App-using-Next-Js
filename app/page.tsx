import Image from 'next/image'
import Table from './[components]/Table'

export default function Home() {
  return (
    <main >
      <div className='flex flex-col items-center justify-center w-max-full '>
      <div className='max-w-full mx-4 my-20 flex items-center justify-center'>
          <h1 className='text-2xl font-mono font-bold'>Todo List App</h1>
      </div>
      <button className="btn btn-accent w-1/2  mb-4">Add Task</button>
      <Table/>
      </div>
    </main>
  )
}
