'use client'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { toast } from 'react-toastify';


const Buttons = () => {

    return (
        <aside className='flex align-middle gap-2'>
            <button
                onClick={() => {
                    console.log('Editing....');
                }}
                className='text-xl text-green-300 hover:text-lime-500'><AiFillEdit /></button>
            <button
                onClick={() => {
                    console.log('deleting....');
                    toast.info("Topic Deleted!")
                }}
                className='text-xl text-red-300 hover:text-yellow-500'><AiFillDelete /></button>
        </aside>
    )
}

export default Buttons