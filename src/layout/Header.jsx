import React from 'react'
import Container from '../Components/Container'
import logo from '../assets/logo (1).png'
import { Link } from 'react-router'
import { IoMdSearch } from 'react-icons/io'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { IoBagHandleOutline } from 'react-icons/io5'
import { FaBarsStaggered } from 'react-icons/fa6'
const Header = () => {
    let routeBar = [
        {nav : "HOME", link: ""},
        {nav : "SHOP", link: "shop"},
        {nav : "COLLECTION", link: "collection"},
        {nav : "JOURNAL", link: "journal"},
        {nav : "LOOKBOOK", link: "lookbook"},
        {nav : "PAGES", link: "pages"},
    ]

  return (
    <>
    <header className='py-7 bg-white z-999 border-b border-gray-300 sticky top-0 left-0 w-full'>
    <Container>
        <div className="flex justify-between">
            <div className="flex gap-3 items-center">
               <img src={logo} alt="Logo" />
               <ul className='flex items-center gap-5 ml-3'>
                {routeBar.map((item)=>(
               <Link to={`/${item.link}`}>
                <li className=' font-medium text-[17px]'>{item.nav}</li></Link>

                ))}
               </ul>
            </div>
            <div className="flex gap-3 items-center ">
                <div className=" text-3xl text-gray-700 cursor-pointer">
                    <IoMdSearch/>
                </div>
                <div className=" text-2xl text-gray-700 cursor-pointer">
                    <FaRegUser />
                </div>
                <div className=" text-2xl text-gray-700 cursor-pointer">
                    <FaRegHeart />
                </div>
                <div className=" text-2xl text-gray-700 cursor-pointer">
                    <IoBagHandleOutline/>
                </div>
                <div className=" text-2xl text-gray-700 cursor-pointer">
                    <FaBarsStaggered />
                </div>
            </div>
        </div>

    </Container>
    </header>
    
    </>
  )
}

export default Header