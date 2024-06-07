import React from 'react'
import {Footer} from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook , BsInstagram , BsTwitter , BsGithub , BsDiscord} from 'react-icons/bs'
export default function FooterCom() {
  return (
    <Footer container className='borer border-t-8 border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-red-500 rounded-lg text-white'>CS's</span> 
                        Blog
                </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div className="">
                    <Footer.Title title='About'/>
                    <Footer.LinkGroup col>
                        <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'> 
                            About
                        </Footer.Link>
                        <Footer.Link href='/' target='_blank' rel='noopener noreferrer'> 
                            Portfolio
                        </Footer.Link>
                    </Footer.LinkGroup>

                    </div>


                    <div className="">
                    <Footer.Title title='Follow Me'/>
                    <Footer.LinkGroup col>
                        <Footer.Link 
                        href='https://www.github.com/ChandraSekhar-1306' 
                        target='_blank' 
                        rel='noopener noreferrer'> 
                            Github
                        </Footer.Link>
                        <Footer.Link 
                        href='https://discord.gg/bQF5kncv' 
                        target='_blank' 
                        rel='noopener noreferrer'> 
                            Discord
                        </Footer.Link>
                    </Footer.LinkGroup>

                    </div>
                    <div className="">
                    <Footer.Title title='Legal'/>
                    <Footer.LinkGroup col>
                        <Footer.Link 
                        href='#' 
                       > 
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link 
                        href='#' 
                       > 
                            Terms &amp; Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>

                    </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href='#' by='ChandraSekhar' year={new Date().getFullYear()}/>
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='#' icon={BsTwitter}/>
                    <Footer.Icon href='https://www.github.com/ChandraSekhar-1306' target='_blank' icon={BsGithub}/>
                    <Footer.Icon href='https://discord.gg/bQF5kncv' icon={BsDiscord}/>

                </div>
            </div>
        </div>
    </Footer>
  )
}
