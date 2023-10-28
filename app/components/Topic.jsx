import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import Buttons from './Buttons'
const Topic = ({ data }) => {
    const { title, details, createdAt, _id } = data
    return (
        <div className=' flex-1 min-w-[300px] sm:max-w-xs md:max-w-sm flex flex-col gap-2 p-1 border border-slate-50 rounded-lg min-h-[150px]'>
            <section className='flex align-middle w-full justify-around border-b border-zinc-400  pb-1'>
                <h3 className='text-lg font-semibold text-sky-200 '>{title}</h3>
                <Buttons id={_id} />
            </section>

            <div className="p-3 flex flex-col align-middle">
                <p className='text-base font-light'>
                    {details}
                </p>

                <p className='text-xs font-extralight italic justify-self-end self-end mt-3 align-bottom'>{new Date(createdAt).toLocaleTimeString()}: {new Date(createdAt).toLocaleDateString()}</p>
            </div>
        </div >
    )
}

export default Topic