import About from './About';
import Project from './Project';
import Footer from './Footer';

const Header = () => {    
    return ( 
    <>
        <div className='container d-flex p-2 '>
            <div id='header'>
                <h1>Pamela Crainer</h1>
                <Project />
            </div>
        </div>
    </>
    )
}

export default Header;