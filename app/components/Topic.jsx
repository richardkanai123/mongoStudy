import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import Buttons from './Buttons'
const Topic = () => {
    return (
        <div className='w-full flex-1 min-w-[300px] sm:max-w-xs md:max-w-sm flex flex-col gap-2 p-1 border border-slate-50 rounded-lg'>
            <section className='flex align-middle w-full justify-around border-b  pb-1'>
                <h3 className='text-lg font-semibold'>Topic Title</h3>
                <Buttons />
            </section>

            <div className="p-3 flex flex-col align-middle">
                <p className='text-base font-light'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellat quis provident qui ab aliquam velit beatae iusto doloremque soluta.
                </p>

                <p className='text-sm font-extralight italic'>{new Date().toLocaleTimeString()}</p>
            </div>
        </div >
    )
}

export default Topic