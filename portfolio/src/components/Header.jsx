import React from 'react';
import Navigation from './Navigation';
import Project from './Project';

const Header = () => {    
    return ( 
    <>
        <div className='container d-flex p-2 .align-items-center'>
            <div>
                <h1>Pamela Crainer</h1>
                <Project />
            </div>
           
        </div>
    </>
    )
}

export default Header;