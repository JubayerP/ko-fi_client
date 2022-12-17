import React from 'react';
import Banner from '../Banner/Banner';
import Coffee from '../Coffees/Coffee';
import Menu from '../Menu/Menu';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Menu />
            <Coffee />
        </div>
    );
};

export default Home;