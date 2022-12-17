import React from 'react';
import img from '../../../assets/cup.webp'

const Banner = () => {
    return (
        <div className='bg-[url("https://cdn.shopify.com/s/files/1/1274/9187/files/beans-1.png?v=1635847936")] lg:h-screen h-full bg-cover bg-[#e6e6e6]'>
            <div className='container mx-auto flex lg:flex-row flex-col justify-center items-center h-full'>
            <div className='lg:my-0 my-20'>
                <h4 className='text-secondary text-2xl font-nav'>Black cofee is awesome.</h4>
                <h1 className='text-8xl font-bold text-secondary font-body my-5'>
                    Time Discover Cofee House
                </h1>
                <p className='text-secondary text-xl leading-loose'>
                    Experience the decibels like your ears deserve to. Safe for
                    <br />
                    the ears, very for the heart. A treat to your ears.
                </p>
                <button className='bg-primary px-14 py-4 rounded-full text-xl text-white hover:bg-secondary duration-200 mt-10'>
                    Explore More
                </button>
            </div>
            <div className='aspect-auto'>
                <img className='object-cover' src={img} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;