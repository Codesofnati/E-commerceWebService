'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const login = () => {
  return (
    <div className='flex justify-center mx-auto p-10 gap-5 shadow-2xl m-10 max-w-3/5 '>
<div className="bg-linear-to-t from-amber-400 via-amber-500 to-orange-500 w-1/2 rounded-4xl p-10 shadow-2xl">
        <h1 className='text-3xl w-1/2 font-bold text-white'>
          Simplify management with our dashboard
        </h1>
      </div>
      <div className='text-center w-1/2 '>
        <div className='flex justify-center gap-5 m-10'>
          <Image alt="" src='/1.png' width={70} height={70} className='rounded-full'/>
          <h1 className='font-bold text-2xl flex'>
            E Spurt
          </h1>
        </div>
        <div className='pb-7'>
          <h1 className='text-3xl font-bold '>
            Welcome Back
          </h1>
          <p className='text-gray-400 text-sm'>
            Please login to your account 
          </p>
        </div>
        <div>
          <div className=' gap-5 flex flex-col'>
          <input placeholder='Email address' className='shadow-sm p-3 rounded-xl bg-gray-50 '></input>
          <input placeholder='Password' className='shadow-sm p-3 rounded-xl bg-gray-50 '></input>
        </div> 
          <Link className='flex flex-col text-end p-1 text-gray-600' href={"/"}>Forgot Password?</Link>
        </div>
        
        <div className='mt-5 mb-5 gap-4'>
          <button className='text-white bg-orange-400 h-12 rounded-xl w-full flex-col text-center '>
            Login
          </button>
          <p className=''>
            or Login with 
          </p>
          <div className='flex justify-evenly'>
            <div className='flex gap-2'>
            <Image src={"/"} alt='' width={20} height={20}/>
            <p>Google</p>
            </div>
            <div className='flex gap-2'>
              <Image src={"/"} alt=''width={20} height={20}/>
            <p>Facebook</p>
            
            </div>
            
          </div>
          <div className='m-7'>
            <p>
              Do you have an account?
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default login