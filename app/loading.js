import React from 'react'

const Loading = () => {
    const loadArray = new Array(5)
    return (
        <div className="mx-auto w-full flex flex-col items-center align-middle  gap-4 md:flex-row md:flex-wrap py-4">


            {
                loadArray.map((item, index) => (
                    <div key={index} className='w-full animate-pulse delay-200 bg-zinc-400 h-80 flex-1 min-w-[300px] sm:max-w-xs md:max-w-sm flex flex-col gap-2 p-1 border border-zinc-400 rounded-lg'>

                        <section className='flex align-middle w-full justify-around border-b bg-zinc-500  pb-1'>
                            <h3 className='text-lg font-semibold animate-pulse delay-75 w-full p-1'></h3>

                        </section>

                        <div className="p-3 flex flex-col align-middle">
                            <p className='text-xs italic font-light'>
                                loading ....
                            </p>

                            <p className='text-xs font-extralight italic animate-pulse delay-700'>getting date....</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Loading