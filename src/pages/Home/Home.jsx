import Cards from "../../components/BannerBottomCard/Cards";
import BottomBanner from "../../components/BottomBanner/BottomBanner";
import Banner from "../../components/Homebanner/Banner";
import OutServices from "../../components/OurServices/OutServices";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=" px-6">
            <Cards></Cards>
            </div>
            <OutServices></OutServices>
            <BottomBanner></BottomBanner>
        </div>
    );
};

export default Home;