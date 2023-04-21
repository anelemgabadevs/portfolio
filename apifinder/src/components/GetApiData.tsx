import React from "react"
import IApiDataType from '@/services/ApiDataService'
import mockData from "./MockedData"
import Link from "next/link"
import {RxDividerHorizontal} from 'react-icons/all'
import Image from "next/image"

export async function getApiData () {
    
    const data = await fetch('https://api.publicapis.org/entries')
    const resp = await data.json()

    const apiData = resp.entries || []
    
    // Group the API data by category
    const groupedData: {[key: string]: IApiDataType[]} = {};
    apiData.forEach((item: IApiDataType) => {
        if (!groupedData[item.Category]) {
            groupedData[item.Category] = [item];
        } else {
            groupedData[item.Category].push(item);
        }
    });

    return(
        <div className='w-full flex flex-col items-center gap-8'>
        <nav className='sticky w-full flex flex-row top-0 z-50 bg-blue-50 py-5 self-center items-center gap-8'>
            <h1 className='text-black cursor-pointer'>Home</h1>
            <h1 className='text-black cursor-pointer'>About</h1>
            <h1 className='text-black cursor-pointer'>More</h1>
        </nav>
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-48 self-center w-full'>
        <h1 className='font-bold text-pink-300 text-2xl'>Find APIs</h1>

        {/* Cards outer container */}
        <div className=' gap-8 self-stretch items-start w-[600px]'>
        
        {/* Render the cards for each category separately */}
        {Object.entries(groupedData).map(([category, data]) => (
            <div key={category} className='flex flex-col gap-1 self-stretch items-start w-full bg-blue-200 rounded-lg'>
                <h2 className='font-bold text-blue-500 text-lg '>{category}</h2>
                <div className='flex flex-col lg:flex-row gap-2 w-full'>

                <div className='grid grid-cols-1 gap-4 '>
                    {data.map((item: IApiDataType, index: number) => (
                        <div key={index} className='flex self-stretch items-center text-black rounded-lg bg-pink-100 w-full'>
                            {mockData.map((mItem, id) => (
                                <div key={id} className='items-center '>
                                    <div className='flex flex-row self-center items-center gap-1 pb-2'>
                                        <h1 className='flex'>{mItem.api_title}</h1>
                                        <h1 className='flex'>{item.API}</h1>
                                    </div>
                                    <div className='flex flex-col self-center pb-2'>
                                        <h1 className='flex text-left'>{mItem.description}</h1>
                                        <RxDividerHorizontal/>
                                        <h1 className='flex'>{item.Description}</h1>
                                    </div>
                                    <div className='flex flex-row self-center gap-1 pb-2'>
                                        <h1 className='flex'>{mItem.link}</h1>
                                        <Link href={item.Link}>
                                            <h1 className='flex text-pink-300'>Click Here</h1>
                                        </Link>
                                    </div>
                                    <div className='flex flex-col self-center pb-2'>
                                        <h1 className='flex'>{mItem.category}</h1>
                                        <RxDividerHorizontal/>
                                        <h1 className='flex'>{item.Category}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>


            </div>
            
            </div>
        ))}
        
        </div>
        <div className='flex flex-col p-10s text-black'>
                    {/* <Image 
                    alt='text image'
                    width={200}
                    height={400}
                    src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fartisantalent.com%2Fjob-descriptions%2Fback-end-developer-job-description%2F&psig=AOvVaw2Deh7znfddoy8iNVBa1cci&ust=1682069542807000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNjN97eTuP4CFQAAAAAdAAAAABAE'}
                    /> */}
                    <h1 className='text-lg'>ADS! ADS! </h1>
                    <h1 className='text-lg'>ADS! ADS! </h1>
                    <h1 className='text-lg'>ADS! ADS! </h1>
                    <h1 className='text-lg'>ADS! ADS! </h1>
                    <h1 className='text-lg'>ADS! ADS! </h1>

        </div>
    </div>
    </div>
    )

}

export default getApiData