import React, { useEffect, useState } from 'react';
import CoffeeCard from './CoffeeCard';

const Coffee = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/coffees')
            .then(res => res.json())
        .then(data => setCoffees(data))
    },[])
    return (
        <div className='py-20'>
            <div className='text-center space-y-2 py-20'>
            <p className='text-primary text-xl font-nav'>Menu</p>
            <h1 className='text-secondary text-5xl font-bold uppercase font-body'>Popular Menu</h1>
            </div>

            <div className='grid grid-cols-2 justify-center gap-8'>
            {
                coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={ coffee} />)
            }
            </div>
        </div>
    );
};

export default Coffee;