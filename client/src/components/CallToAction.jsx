import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-700 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center mb-3 mt-7">
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className='text-2xl font-normal'>Want to learn cool and exciting stuff about javascript ?</h2>
            <p className='text-gray-600 dark:text-white font-sans mt-3'>Check out these resources !!</p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none mt-3'><a href="" target='_blank' rel='noopener noreferrer'>Learn More</a></Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?"/>
        </div>
    </div>
  )
}
