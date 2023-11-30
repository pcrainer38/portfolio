import img1 from '../assets/Concert-Tracker.png';
import img2 from '../assets/pexels-tima-miroshnichenko-7991579.jpg';

const Project = () => {

    return (
        <>
            <div className='container d-flex m-5' id='project'>
                <div className='img '>
                    <div className='container-sm'>
                        <img src={img1} alt='concert' className='img1 mt-5 mx-auto' />
                        <h5>Concert/Event Tracker</h5>
                    </div>
                    <div className='img'>
                        <img src={img2} alt='movie theater' className='img2 mt-5' />
                        <h5>Movie Time</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;