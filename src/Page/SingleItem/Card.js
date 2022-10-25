import React from 'react';

const Card = ({ cardItem }) => {
    const { name, title } = cardItem
    return (
        <div>
            {name}
        </div>
    );
};

export default Card;