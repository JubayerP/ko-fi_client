import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee }) => {
    const { name, price, img,_id } = coffee;
    return (
        <div className='flex flex-col justify-around relative items-center border border-secondary p-10 w-3/4 mx-auto'>
            <img src={img} className='absolute lg:-left-10 -top-10 lg:top-4' alt="" />
            <div className='flex lg:flex-row flex-col lg:mt-0 mt-2 justify-around items-center w-full'>
            <Link to={`/checkout/${_id}`}>
            <h3 className='text-2xl font-bold text-secondary font-body uppercase hover:text-primary duration-150 cursor-pointer'>{name}</h3>
            </Link>
            <h4 className='text-xl font-semibold font-nav text-primary'>${ price}.00</h4>
            </div>
        </div>
    );
};

export default CoffeeCard;