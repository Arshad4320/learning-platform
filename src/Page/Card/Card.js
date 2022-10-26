import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Card = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/course`)
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])


    return (
        <div className='mt-5'>
            {
                card.map(cards => <p><Button className='w-60'><Link className='text-decoration-none text-white w-60' to={`/course/${cards.id}`}>{cards.name}</Link></Button></p>)
            }

        </div>
    );
};

export default Card;