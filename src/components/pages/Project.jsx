import img1 from '../../assets/Concert-Tracker.png';
import img2 from '../../assets/pexels-tima-miroshnichenko-7991579.jpg';

const Project = () => {

    return (
        <>
            <div className='container d-flex m-5' id='project'>
                <div className='img '>
                    <div className='container-sm'>
                        <img src={img1} alt='concert' className='img1 mt-5 mx-auto' />
                        <h5><a href='https://bfinch3.github.io/Concert-Tracker/' target="_blank">Concert/Event Tracker</a></h5>
    
                        <img src={img2} alt='movie theater' className='img2 mt-5' />
                        <h5><a href='https://github.com/ashoener/movie-time' target="_blank">Movie Time</a></h5>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;