'use client'
import { useState } from "react"
import { toast } from 'react-toastify';

const NewTopicForm = () => {
    const [topicTitle, setTopicTitle] = useState('')
    const [topicDescription, setTopicDescription] = useState('')


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log(topicTitle, topicDescription);
            setTopicDescription('');
            setTopicTitle('');
            toast.success('Topic Added!')
        }}
            className="w-full min-w-[300px] max-w-lg p-3 flex flex-col gap-4 rounded-xl">
            <section className='w-full flex  flex-col gap-1'>
                <label htmlFor="topicTitle" className="text-lg font-semibold">Title</label>
                <input type="text" id="topicTitle" className="bg-slate-300 rounded font-semibold text-lg p-2 ring-0 outline-0 border-none focus:bg-slate-400 " value={topicTitle} onChange={(e) => setTopicTitle(e.target.value)} />
            </section>
            <section className='w-full flex  flex-col gap-1'>
                <label htmlFor="topicDesc" className="text-lg font-semibold">Topic Details</label>
                <textarea cols={5} id="topicDesc" className="bg-slate-300 rounded font-semibold text-lg p-2 ring-0 outline-0 border-none focus:bg-slate-400 " value={topicDescription} onChange={(e) => setTopicDescription(e.target.value)} />
            </section>
            <button className="p-2 rounded-xl text-base font-black bg-green-800 cursor-pointer w-[200px] hover:bg-lime-600" type="submit">Add Topic</button>
        </form>
    )
}

export default NewTopicForm