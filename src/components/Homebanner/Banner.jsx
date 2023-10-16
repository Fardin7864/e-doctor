import bgImg from '../../assets/images/bg.png'
import BannerIntro from '../BannerIntro/BannerIntro';
import bannerchair from '../../assets/images/chair.png'
import { useLocation } from 'react-router-dom';
import Calender from '../Calender/Calender';

const Banner = () => {
    const location = useLocation();

    return (
        <div className="   bg-cover bg-center h-[750px]" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className=' bg-gradient-to-b from-transparent via-transparent to-white flex lg:flex-row flex-col-reverse justify-center items-center gap-9 h-full px-6 lg:px-2 md:pt-20'>
                <div className=' w-full lg:w-2/5'>
                    {
                        location.pathname == '/' ?<BannerIntro></BannerIntro> : <Calender></Calender>
                    }
                </div>
                <div className=' w-full lg:w-2/5'>
                    <img src={bannerchair} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;