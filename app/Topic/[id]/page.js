/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
const Page = ({ params }) => {

    const Router = useRouter()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')


    useEffect(() => {
        const FetchTopics = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/Topics/${params.id}`, {
                    cache: 'no-store'
                })

                if (res.status != 200) {
                    throw new Error("Post Does not Exist!")
                }
                const data = await res.json()
                const TopicData = data.data
                setDetails(TopicData.details)
                setTitle(TopicData.title)
            } catch (error) {
                console.log(error)
                return error
            }

        }

        FetchTopics();

    }, [])

    const UpdateTopic = async () => {

        try {
            const res = await fetch(`http://localhost:3000/api/Topics/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newTitle: title, newDetails: details })
            })

            if (!res.ok) {
                toast.error("Update Failed! Refreshing...")
                Router.refresh()
            }
            toast.success("Topic Updated!")
            Router.refresh('/')
            Router.push('/')
        } catch (error) {
            toast.error("Error Occured")
            Router.push('/')

        }
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            // update the topic
            UpdateTopic()

        }}
            className="w-full min-w-[300px] max-w-lg p-3 flex flex-col gap-4 rounded-xl">
            <p>{params.id}</p>
            <section className='w-full flex  flex-col gap-1'>
                <label htmlFor="topicTitle" className="text-lg font-semibold">Title</label>
                <input type="text" id="topicTitle" className="bg-slate-300 rounded font-semibold text-lg p-2 ring-0 outline-0 border-none focus:bg-slate-400 " value={title} onChange={(e) => setTitle(e.target.value)} />
            </section>
            <section className='w-full flex  flex-col gap-1'>
                <label htmlFor="topicDesc" className="text-lg font-semibold">Topic Details</label>
                <textarea cols={5} id="topicDesc" className="bg-slate-300 rounded font-semibold text-lg p-2 ring-0 outline-0 border-none focus:bg-slate-400 " value={details} onChange={(e) => setDetails(e.target.value)} />
            </section>
            <button className="p-2 rounded-xl text-base font-black bg-green-800 cursor-pointer w-[200px] hover:bg-lime-600" type="submit">Update Topic</button>
        </form>
    )
}

export default Page