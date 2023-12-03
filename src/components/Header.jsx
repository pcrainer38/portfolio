import { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './pages/Footer';


export default function Header() {  
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
            <header className='d-flex justify-content-between w-100 mt-5 mx-2'>
    
                <h2 id='name'>Pamela Crainer</h2>
                <img src='../src/assets/Pam.jpg' className='photo'></img>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>

            <main className='container mx-3 mt-5 w-100 p-5'>
                {renderPage()}
            </main>
            <footer className='footer d-flex'>
             <Footer />
            </footer>
        </div>
    );
}
