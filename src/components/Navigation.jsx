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
            <header className='d-flex justify-content-between w-100'>
                <h2 id='name'>Pamela Crainer</h2>
                <NavLinks currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>

            <main className='mx-3 w-100 container'>
                {renderPage()}
            </main>
        </div>
    );
}
