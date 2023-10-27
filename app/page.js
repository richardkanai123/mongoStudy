import Image from 'next/image'
import Topic from './components/Topic'
import { Suspense } from 'react'
import TopicsLoading from './components/TopicsLoading'

export default function Home() {
  return (
    <div className="mx-auto w-full flex flex-col items-center align-middle  gap-4 md:flex-row md:flex-wrap py-4">
      <Suspense fallback={TopicsLoading}>
        <Topic />
        <Topic />
        <Topic />
        <Topic />
      </Suspense>
    </div>
  )
}
