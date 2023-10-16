import Cards from "../../components/BannerBottomCard/Cards";
import Banner from "../../components/Homebanner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=" px-6">
            <Cards></Cards>
            </div>
        </div>
    );
};

export default Home;