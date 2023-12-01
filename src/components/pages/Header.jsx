

const Header = () => {

    render (
        <>
        <div className='container d-flex p-4'>
            <div id='header'>
                <h1>Pamela Crainer</h1>
                <div class='navbar '>
                    <h4><a href='#about'>About</a></h4>
                    <h4><a href='#project'>Portfolio</a></h4>
                    <h4><a href='#resume'>Resume</a></h4>
                    <h4><a href='#contact'>Contact</a></h4>
                </div> 
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    </>
    )
}

export default Header;