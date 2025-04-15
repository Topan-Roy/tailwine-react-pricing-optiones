import React, { use } from 'react';
import PricingCard from '../../../pricingCard/pricingCard';
import Dasyprincig from '../../../dasyPrincingCard/dasyprincig';


const Pricirgoption = ({pricingPromice}) => {
    const pricingData=use(pricingPromice);
    return (
        <div>
            <h1 className='text-2xl'>Get our membership</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* {
                    pricingData.map(pricing=><PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}
                {
                   pricingData.map(pricing=><Dasyprincig key={pricing.id} pricing={pricing}></Dasyprincig>)
                }
            </div>
        </div>
    );
};

export default Pricirgoption;