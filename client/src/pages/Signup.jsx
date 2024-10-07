import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className = "flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left side */}
        <div className ="flex-1">
        <Link to ="/" className ="font-bold dark:text-white text-white text-4xl">
            <span className ='px-2 py-1 bg-gradient-to-r from-indigo-600 tex via-purple-500 to-pink-500 rounded-lg my-3'> Gabriel's</span><p className ="font-bold dark:text-white text-black text-4xl my-2">Blog</p>
        </Link>
        <p className='text-sm mt-5'>This is a Demo project. You can sign up with your email<br/> and Password or with Goodle</p>
        </div>
         {/* right side */}
         <div className ="mx-10 flex-1">
            <form className='flex flex-col gap-4'>
              <div>
                <Label value='Your Username'></Label>
                <TextInput type='text' placeholder='Username' id='username'></TextInput>
              </div>
              <div>
                <Label value='Your Email'></Label>
                <TextInput type='email' placeholder='name@company.com' id='email'></TextInput>
              </div>
              <div>
                <Label value='Your Password'></Label>
                <TextInput type='text' placeholder='Password' id='password'></TextInput>
              </div>
              <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-4 mt-4 text-white font-bold' type = 'submit'>
                Sign UP
              </button>
            </form>
            <div className='mt-5 flex gap text-sm'>
              <span>Have an account?</span>
              <Link to ='/sign-in' className='text-blue-500'>Sign in</Link>
            </div>
          </div>
      </div>
    </div>
  )
}
