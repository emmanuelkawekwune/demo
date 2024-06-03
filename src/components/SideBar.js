"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { sideBarArray } from '@/arrays/SideBarArray'
import Link from 'next/link'




const SideBar = () => {
    const [isActive, setIsActive] = useState("User Profile")


  return (
    <div>

        {
            sideBarArray.map((item) => (
            <Link href={item.href}>
                    <div 
                    className={`flex gap-4 text-[#282833] opacity-[75%] hover:opacity-[100%] h-[50px] w-full items-center my-2 cursor-pointer ${isActive === item.name ? "bg-[#F4F4FA] opacity-[100%] " : "bg-white opacity-[75%]"} hover:bg-[#F4F4FA] px-2 rounded-[15px]`}
                    onClick={() => setIsActive(item.name)}
                    >
                        <Image src={item.icon} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
            </Link>
            ))
        }
        
    </div>
  )
}

export default SideBar