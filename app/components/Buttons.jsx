'use client'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Buttons = ({ id }) => {

    const DeleteByID = async () => {
        const res = await fetch(`${process.env.BASEURL}/Topics/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
        })

        if (!res.ok) {
            toast.error("Delete Failed")
            return;
        }
        toast.success("Delete Success")
        Router.refresh('/')
    }

    const Router = useRouter()
    return (
        <aside className='flex align-middle items-center gap-4'>
            <Link href={`Topic/${id}`}
                className='text-2xl text-green-300 hover:text-lime-500'><AiFillEdit /></Link>
            <button
                onClick={() => {
                    console.log(id)
                    DeleteByID()
                }}
                className='text-2xl text-red-300 hover:text-yellow-500'><AiFillDelete /></button>
        </aside>
    )
}

export default Buttons