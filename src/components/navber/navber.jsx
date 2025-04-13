import React from 'react';
import Link from './link';
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
    return (
        <nav>
            <ul className='flex'>
                {
                    navigetionData.map(route=><Link key={route.id} route={route}></Link>)
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
        </nav>
    );
};

export default Navber;