// framer-motion
import { delay, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { CgDatabase } from "react-icons/cg";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from 'react-responsive';
import { MdMenu } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';
import SubMenu from './SubMenu';
import { IoLogOutOutline } from 'react-icons/io5'; // For sign-out icon

const Sidebar = () => {
    let isTab = useMediaQuery({ query: '(max-width: 768px)' });
   
    // sidebar open menu
    const [isOpen, setIsOpen] = useState(isTab ? false : true);
    const { pathname } = useLocation();

    // desktop view
    const Sidebar_animation = isTab ? 
    // mobile view
    { 
        open: {
            x: 0,
            width: "16rem",
            transition: {
                damping: 40,
            }
        },
        closed: {
            x: -250,
            width: 0,
            transition: {
                damping: 40,
                delay: 0.15,
            },
        },
    }
    // system view
    : {
        open: {
            width: "16rem",
            transition: {
                damping: 40,
            }
        },
        closed: {
            width: "4rem",
            transition: {
                damping: 40,
            },
        },
    };

    useEffect(() => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }, [isTab]);

    // pathname change -> close the sidebar (mobile view)
    useEffect(() => {
        isTab && setIsOpen(false);
    }, [pathname]);

    const subMenuLists = [
        {
            name: "build",
            icon: RiBuilding3Line,
            menus: ["auth", "app setting", "storage", "hosting"]
        },
        {
            name: "analytics",
            icon: TbReportAnalytics,
            menus: ["dashboard", "real time", "events"]
        },
    ];

    return (
        <div>
            <div
                onClick={() => setIsOpen(false)}  // to close the sidebar when clicked outside the sidebar menu on mobile view.
                className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${isOpen ? 'block' : 'hidden'}`}
            />

            <motion.div
                variants={Sidebar_animation}
                initial={{ x: isTab ? -250 : 0 }}
                animate={isOpen ? 'open' : 'closed'}
                className="bg-blue-950 text-gray shadow-md z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
            >
                <div className='flex items-center gap-2.5 font-medium border-b py-3 border-slate-300 mx-3'>
                    <img src="/icon.png" alt=".." width={45} height={35} />
                    <span className='text-xl text-white font-semibold whitespace-pre'>
                        Dash-Mobile
                    </span>
                </div>

                {/* Menu items */}
                <div className='flex flex-col h-full'>
                    <ul className='whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-green-700 scrollbar-thumb-green-200 h-[65%] md:h-[60%]'>
                        <li>
                            <NavLink to='/' className={'link text-white'}>
                                <AiOutlineAppstore size={23} className='min-w-max' />
                                All Apps
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/authentication' className={'link text-white'}>
                                <IoPersonOutline size={23} className='min-w-max' />
                                Authentication
                            </NavLink>
                        </li>

                        <NavLink to='/storage' className={'link text-white'}>
                            <CgDatabase size={23} className='min-w-max' />
                            Storage Section
                        </NavLink>

                        {/* Submenu section */}
                        {(isOpen || isTab) && (
                            <div className='border-y py-5 border-slate-300 text-white'>
                                <small className='pl-3 text-slate-500 inline-block mb-2'>
                                    Product Categories
                                </small>

                                {/* The submenu dropdowns */}
                                {subMenuLists?.map((menu) => (
                                    <div key={menu.name} className="flex flex-col gap-1">
                                        <SubMenu data={menu} />
                                    </div>
                                ))}
                            </div>
                        )}

                        <NavLink to='/settings' className={'link text-white'}>
                            <SlSettings size={23} className='min-w-max' />
                            Settings
                        </NavLink>
                    </ul>

                    {/* User Profile and Sign Out */}
                    {isOpen && (
                        <div className='flex flex-col p-8 border-t border-slate-300 items-center'>
                            <img
                                src="/userimg.png"  // Replace with actual user profile image source
                                alt="User Profile"
                                className='w-12 h-12 rounded-full mb-2'
                            />
                            <div className='text-center'>
                                <p className='text-white font-semibold'>John Doe</p>  {/* Replace with user's name */}
                                <small className='text-slate-400 cursor-pointer'>View Profile</small>
                            </div>

                            <button
                                onClick={() => console.log('Sign out')}  // Replace with actual sign-out logic
                                className='flex items-center gap-2 mt-4 text-red-400 font-semibold w-full justify-center'
                            >
                                <IoLogOutOutline size={23} />
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>

                {/* The control button */}
                <motion.div
                    animate={isOpen ? { x: 0, y: 0, rotate: 0 } : { x: -10, y: -200, rotate: 180 }}
                    transition={{ duration: 0.5 }}
                    className='absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden'
                >
                    <IoArrowBackCircleSharp
                        size={30}
                        onClick={() => setIsOpen(!isOpen)}
                        className='text-green-600'
                    />
                </motion.div>
            </motion.div>

            <div className='m-3 md:hidden' onClick={() => setIsOpen(true)}>
                <MdMenu size={25} />
            </div>
        </div>
    );
};

export default Sidebar;
