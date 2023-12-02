import { useState } from 'react';
import NavLinks from './NavLinks';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


export default function Navigation() {  
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Project') {
            return <Project />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div> 
            <NavLinks currentPage={currentPage} handlePageChange={handlePageChange} />
            <main className='mx-3'>{renderPage()}</main>
        </div>
    );
}
