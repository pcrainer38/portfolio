import { useState } from 'react';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Header from './pages/Header';



export default function Navigation() {  
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Header'){
            return <Header />;
        }
        if (currentPage === 'Project') {
            return <Project />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <main className='mx-3'>{renderPage}</main>
        </div>
    );
}
