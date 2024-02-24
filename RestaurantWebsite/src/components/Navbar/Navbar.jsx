import React from 'react'
import {FaCaretDown, FaUser} from 'react-icons/fa'

const Navlinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 1,
        name: "About",
        link: "/about",
    },
    {
        id: 1,
        name: "Contact",
        link: "/contact",
    },

];

const DropdownLinks = [
    {
        id: 1,
        name: "Vegetables",
        link: "/#",
    },
    {
        id: 2,
        name: "Fruits",
        link: "/#",
    },
    {
        id: 3,
        name: "Grains",
        link: "/#",
    },
];
const Navbar =({HandlePopup}) =>  {
  return (
    <>
    <div data-aos="fade"
    className='bg-white shadow-sm'>
        <div className="container flex justify-between py-4 sm:py-3">
            {/* logo section */}
            <div className='font-bold text-3xl'>Logo</div>
            {/* Navlinks Section */}
            <div>
                <ul className='flex items-center gap-10'>
                    {
                        Navlinks.map(({id, name, link}) => (
                            <li key={id}>
                                <a 
                                href={link} 
                                className='hidden sm:inline-block hover:text-primary
                                text-xl font-semibold'>
                                {name}
                                </a>
                            </li>
                        ))
                    }

                    {/* simple dropdown and links */}

                    <li className=' hidden md:block cursor-pointer group'>
                        <a href="/#"
                        className=' inline-block hover:text-primary
                        text-xl font-semibold'>
                           <div className='flex items-center gap-[2px] py-2'>
                           Dropdown
                            <span>
                                <FaCaretDown 
                                className=' group-hover:rotate-180
                                 duration-300'/>
                            </span>
                           </div>
                        </a>

                        {/* Dropdown Section */}
                        <div className='absolute z-[9999] hidden group-hover:block
                        w-[200px] bg-white text-black shadow-md p-2'>
                            <ul>
                                {
                                    DropdownLinks.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link}
                                            className=' inline-block hover:bg-primary/20
                                            text-xl w-full rounded-md p-2'>
                                                {data.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                    {/* Login Button */}
                    <li>
                        <button 
                        onClick={HandlePopup}
                        className='flex justify-center items-center gap-2 bg-secondary
                        text-xl h-[40px] text-white px-2 md:px-3 py-2 hover:scale-105 duration-300 '>
                            <FaUser />
                            My Account
                        </button>
                    </li>

                </ul>
            </div>
        </div>
    </div>
    </>
  )
};

export default Navbar