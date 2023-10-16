import Cards from "../../components/BannerBottomCard/Cards";
import BottomBanner from "../../components/BottomBanner/BottomBanner";
import Banner from "../../components/Homebanner/Banner";
import OutServices from "../../components/OurServices/OutServices";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=" px-6">
            <Cards></Cards>
            </div>
            <OutServices></OutServices>
            <BottomBanner></BottomBanner>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;