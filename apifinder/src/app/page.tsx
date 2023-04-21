import Image from 'next/image'
import getApiData from '@/components/GetApiData'


export default async function Home() {
  
  const apiData = await getApiData()

  return (
    <div className="flex items-center justify-between bg-white">
      
     {apiData}
      
    </div>
  )
}
