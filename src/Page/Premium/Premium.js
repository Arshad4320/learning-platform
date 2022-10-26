import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PremiumCard from './PremiumCard';

const Premium = () => {
    const allData = useLoaderData()
    console.log(allData)
    return (
        <div>
            <PremiumCard data={allData}></PremiumCard>
        </div>
    );
};

export default Premium;