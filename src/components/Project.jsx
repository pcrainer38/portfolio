import img1 from '../assets/Concert-Tracker.png';
import img2 from '../assets/pexels-tima-miroshnichenko-7991579.jpg';

const Project = () => {

    return (
        <>
            <div className='container d-flex m-5'>
                <div className='img '>
                    <div className='container-sm '>
                        <img src={img1} alt='concert' className='img1 mt-5 mx-auto' />
                    </div>
                    <div className='img'>
                        <img src={img2} alt='movie theater' className='img2 mt-5' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;