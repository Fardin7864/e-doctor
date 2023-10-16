import Cards from "../../components/BannerBottomCard/Cards";
import BottomBanner from "../../components/BottomBanner/BottomBanner";
import ContactForm from "../../components/ContactForm/ContactForm";
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
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;