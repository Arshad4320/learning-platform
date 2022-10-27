import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Card = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch(`https://assigenment-server-arshad4320.vercel.app/course`)
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])


    return (
        <div className='mt-11'>
            {
                card.map(cards => <div className='bg-dark'><Link className='text-decoration-none text-white ' to={`/course/${cards.id}`}> <button className=' p-2  rounded-md hover:bg-orange-600 w-100'>{cards.name}</button></Link></div>)
            }

        </div>
    );
};

export default Card;