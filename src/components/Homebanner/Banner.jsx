import bgImg from '../../assets/images/bg.png'
import BannerIntro from '../BannerIntro/BannerIntro';
import bannerchair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="bg-cover bg-center h-[750px]" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className=' flex lg:flex-row flex-col-reverse justify-center items-center gap-9 h-full px-6 lg:px-2 md:pt-20'>
                <div className=' w-full lg:w-2/5'>
                    <BannerIntro></BannerIntro>
                </div>
                <div className=' w-full lg:w-2/5'>
                    <img src={bannerchair} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;