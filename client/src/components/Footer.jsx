import React from 'react'
import {Footer} from 'flowbite-react'
import { Link } from 'react-router-dom'
// import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribble } from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border p-5 border-t-8 border-teal-500'>
        <div className='w-full max-x-7xl mx-auto'>
            <div className = 'grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className = ''>
                    <Link to ="/" className ="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
                        <span className ='px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-lg my-3'> Gabriel's</span>Blog
                    </Link>
                </div>
                <div className ='grid grid-cols-2 gap-8 sm: mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <Footer.Title title = 'ABOUT' />
                        <Footer.LinkGroup col>
                        <Footer.Link href ='https://www.100jsprojects.com' target ='_blank' rel='noopener noreferrer'>
                            100 js Projects
                        </Footer.Link>
                        <Footer.Link href ='https://www.100jsprojects.com' target ='_blank' rel='noopener noreferrer'>
                            Gabriel's Blog
                        </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title = 'FOLLOW US' />
                        <Footer.LinkGroup col>
                        <Footer.Link href ='https://www.100jsprojects.com' target ='_blank' rel='noopener noreferrer'>
                            Github
                        </Footer.Link>
                        <Footer.Link href ='https://www.100jsprojects.com' target ='_blank' rel='noopener noreferrer'>
                            Discord
                        </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title = 'LEGAL' />
                        <Footer.LinkGroup col>
                        <Footer.Link href ='https://www.100jsprojects.com' target ='_blank' rel='noopener noreferrer'>
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href ='https://www.100jsprojects.com' target ='_blank' rel='noopener noreferrer'>
                            Terms and Conditions
                        </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                   
                </div>
            </div>
            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by="Gabriel's Blog" year={new Date().getFullYear()}/>
                {/* <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsFacebook} />
                    <Footer.Icon href='#' icon={BsInstagram} />
                    <Footer.Icon href='#' icon={BsTwitter} />
                    <Footer.Icon href='#' icon={BsGithub} />
                    <Footer.Icon href='#' icon={BsDribble} /> 
                </div> */}
            </div>
        </div>
    </Footer>
  )
}
