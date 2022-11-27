import React/* , { useEffect, useState } */ from 'react';
import Card from './Card';
import { rentalList } from '../datas/locations';



const Cards = () => {
    return (
        <ul className='cards'>
            {rentalList.map(({ cover, title, id }) => (
                <Card
                    key={id}
                    cover={cover}
                    title={title}
                    id={id}
                />
            ))}
        </ul>
    );
};

export default Cards;