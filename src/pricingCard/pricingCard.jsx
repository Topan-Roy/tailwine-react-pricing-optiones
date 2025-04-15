import React from 'react';
import Features from './features';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    const {name,price,description,features}=pricing
    return (
        <div className='flex flex-col border bg-amber-600 rounded-2xl p-4'>
            {/* card header */}
            <div className="">
            <h1 className='text-5xl'>{name}</h1>
            <h4 className='text-2xl'>{price}</h4>
            </div>
            {/* card body */}
            <div className="bg-amber-400 p-4 rounded-2xl mt-10 flex-1">
                <p>{description}</p>
                {
                    features.map((feature,index)=><Features key={index} feature={feature}></Features>)
                }
            </div>
            <button className="btn w-full mt-4">Subcribe</button>
        </div>
        
    );
};

export default PricingCard;