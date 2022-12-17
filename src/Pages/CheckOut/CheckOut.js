import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const {name, price} = useLoaderData();
    // console.log(coffee);
    return (
        <div>
            <h2 className='text-2xl font-bold font-body text-primary text-center'>{name}</h2>
            <p className='text-xl font-nav text-secondary text-center mb-5'>${ price}.00</p>
            <h2 className='text-2xl font-bold text-secondary text-center'>Place an Order</h2>
            <form className='flex justify-center p-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-2/4'>
                <input type="text" placeholder="First Name" className="input bg-slate-200 focus:outline-none text-primary" />
            <input type="text" placeholder="Last Name" className="input bg-slate-200 focus:outline-none text-primary" />
            <input type="text" placeholder="Phone" className="input bg-slate-200 focus:outline-none text-primary" />
            <input type="text" placeholder="Email" className="input bg-slate-200 focus:outline-none text-primary" />
                <button className='btn btn-block bg-secondary capitalize col-span-2'>Place Order</button>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;