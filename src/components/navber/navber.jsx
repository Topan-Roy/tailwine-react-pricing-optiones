import React, { useState } from 'react';
import Link from './link';
import { Menu, X } from 'lucide-react';
 const navigetionData=[
    {
      "id": 1,
      "name": "Home",
      "path": "/",
      "navbar": "Main"
    },
    {
      "id": 2,
      "name": "About Us",
      "path": "/about",
      "navbar": "Main"
    },
    {
      "id": 3,
      "name": "Product Page",
      "path": "/products/123",
      "navbar": "Products"
    },
    {
      "id": 4,
      "name": "Blog Post",
      "path": "/blog/2025-article",
      "navbar": "Blog"
    },
    {
      "id": 5,
      "name": "Contact",
      "path": "/contact",
      "navbar": "Main"
    }
  ]
  
const Navber = () => {
    const links =  navigetionData.map(route=><Link key={route.id} route={route}></Link>)
    const [open,setopen]=useState(false)
    return (
        <nav className='flex justify-between mx-10 mt-5'>
            <span className='flex' onClick={()=>setopen(!open)}>
                {open ?<X className='md:hidden'></X>:<Menu className='md:hidden'></Menu>}
            <ul className={`md:hidden absolute duration-1000 text-black
                 ${open ? 'top-8': '-top-40'}
                  bg-amber-200`}>
                {links}
            </ul>
            <h1 className='ml-5'>My NAvber</h1>
            </span>
            <ul className='md:flex hidden'>
                {
                   links
                }
            </ul>
            {/* <ul className='flex'>
                {
                    navigetionData.map(route=>  
                         <li className='mr-10'><a href="/">{route.name}</a></li>)
                }
            </ul> */}
            {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="about">About</a></li>
                <li className='mr-10'><a href="bloge">Bloge</a></li>
            </ul> */}
            <button>Sign in</button>
        </nav>
    );
};

export default Navber;