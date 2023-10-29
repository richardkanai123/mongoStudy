import NavBar from './components/NavBar'
import './globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClerkProvider } from '@clerk/nextjs'
export const metadata = {
  title: 'Mongo Study',
  description: 'Round two trial',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className='mx-auto min-h-screen max-h-fit w-screen max-w-5xl  bg-slate-500'>
          <NavBar />
          <main className='w-full min-h-[70vh] flex flex-col items-center align-middle px-4'>
            {children}
          </main>
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  )
}
