import React, { useEffect, useState } from 'react';
import cup from '../../../assets/cup-20.webp';

const Menu = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menus')
            .then(res => res.json())
        .then(data => setMenus(data))
    },[])
    return (
        <div className='bg-[#010103]'>
            <div className='text-center space-y-2 py-20'>
            <p className='text-primary text-xl font-nav'>Popular Item</p>
            <h1 className='text-white text-5xl font-bold uppercase font-body'>Cofee Build Your Base</h1>
            </div>
 
            <div className='flex lg:flex-row flex-col justify-center items-center w-4/5 mx-auto lg:space-y-0 space-y-4'>
                <div className='space-y-6'>
                {
                menus.slice(0, 4).map(menu => <div key={menu._id} className='text-secondary'>
                    <h3 className='font-body text-primary text-2xl text-right mb-2'>{menu.name}</h3>
                    <p className='font-nav text-white text-right'>{ menu.desc}</p>
                </div>)
                }
            </div>
                <img src={cup} alt="" />
                <div className='space-y-6'>
                {menus.slice(4, 8).map(menu => <div key={menu._id} className='text-secondary'>
                    <h3 className='font-body text-primary text-2xl mb-2'>{menu.name}</h3>
                    <p className='font-nav text-white'>{ menu.desc}</p>
                </div>)}
                </div>
            </div>
        </div>
    );
};

export default Menu;