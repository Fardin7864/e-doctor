import Cards from "../../components/BannerBottomCard/Cards";
import Banner from "../../components/Homebanner/Banner";
import OutServices from "../../components/OurServices/OutServices";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=" px-6">
            <Cards></Cards>
            </div>
            <div>
                <OutServices></OutServices>
            </div>
        </div>
    );
};

export default Home;