import Image from 'next/image'
import Topic from './components/Topic'
import { Suspense } from 'react'
import TopicsLoading from './components/TopicsLoading'

const FetchTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Topics', {
      cache: 'no-store'
    })

    if (!res.ok) {
      throw new Error("Fetch failed")
    }

    const data = await res.json()
    const TopicsList = data.data
    return TopicsList

  } catch (error) {
    console.log(error)
    return error
  }

}

export default async function Home() {

  const TopicsData = await FetchTopics()

  return (
    <div className="mx-auto w-full flex flex-col items-center align-middle  gap-4 md:flex-row md:flex-wrap py-4">
      <Suspense fallback={TopicsLoading}>
        {
          (TopicsData.length > 0) ?
            TopicsData.map((topic) => (
              <Topic
                data={topic}
                key={topic._id}
              />
            )) :

            (
              <>
                <p className="text-base text-center text-slate-200">No Topics Found. Click Add button to add a new topic</p>
              </>
            )
        }
      </Suspense>
    </div>
  )
}
