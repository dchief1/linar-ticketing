import Sidebar from '@/components/Sidebar/Sidebar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return ( 
    <Sidebar className='font-monts'>
      <div className='w-full min-h-screen  '>
        <Component {...pageProps} />
      </div>
    </Sidebar>
    )
}
