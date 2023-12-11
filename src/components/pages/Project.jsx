import img1 from '../../assets/Concert-Tracker.png';
import img2 from '../../assets/pexels-tima-miroshnichenko-7991579.jpg';
import img3 from '../../assets/MoneyType.png';
import { FaGithub } from "react-icons/fa";

const Project = () => {

    return (
        
            <div className='container d-flex m-5' id='project'>
                <div className='img '>
                    <div className='container-sm'>
                        <img src={img1} alt='concert' className='img1 mt-5 mx-auto' />
                        <h5><a href='https://bfinch3.github.io/Concert-Tracker/' target="_blank">Concert/Event Tracker </a>
                        <a href='https://github.com/Bfinch3/Concert-Tracker' target='_blank'><FaGithub /></a></h5>

                        <img src={img2} alt='movie theater' className='img2 mt-5' />
                        <h5><a href='https://movie-time.dev.133700.xyz/' target="_blank">Movie Time </a>
                        <a href='https://github.com/ashoener/movie-time' target='_blank'><FaGithub /></a></h5>

                        <img src={img3} alt='money type homepage' className='img2 mt-5' />
                        <h5><a href='https://moneytype.dev.133700.xyz/' target="_blank">Money Type </a>
                        <a href='https://github.com/pcrainer38/moneytype' target='_blank'><FaGithub /></a></h5>

                    </div>
                </div>
            </div>
    
    );
};

export default Project;