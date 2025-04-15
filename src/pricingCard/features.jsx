import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Features = ({feature}) => {
    console.log(feature)
    return (
        <p className='flex mt-4'><CircleCheckBig className='mr-2'></CircleCheckBig>{feature}</p>
    );
};

export default Features;