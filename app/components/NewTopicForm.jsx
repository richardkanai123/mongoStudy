'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"
import { toast } from 'react-toastify';

const NewTopicForm = () => {
    const [topicTitle, setTopicTitle] = useState('')
    const [topicDescription, setTopicDescription] = useState('')

    const Router = useRouter()

    return (
        <form onSubmit={async (e) => {
            e.preventDefault()

            if (topicTitle === "" || topicDescription === "") {

                toast.error("Fill in all fields")
                return false;
            }

            const res = await fetch(`${process.env.BASEURL}/api/Topics`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title: topicTitle, details: topicDescription })
            })

            if (!res.ok) {
                toast.error("Failed, Please try again later!")
                return;
            }

            setTopicDescription('');
            setTopicTitle('');
            toast.success('Topic Added!');

            Router.refresh('/')
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