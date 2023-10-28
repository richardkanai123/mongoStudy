import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div className='w-full py-4 px-10 flex justify-between align-middle text-sky-100 bg-sky-600 rounded-b '>
            <Link className='font-bold text-xl hover:text-sky-300' href='/' >MongoTopics</Link>
            <div className="flex align-middle gap-4">
                <Link href={`/Add`} className='text-lg hover:text-sky-300'>Add</Link>
                <button className='p-1 rounded-lg bg-sky-800 hover:bg-sky-900'>Profile</button>
            </div>
        </div>
    )
}

export default NavBar