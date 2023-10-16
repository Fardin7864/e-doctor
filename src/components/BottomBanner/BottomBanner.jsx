import bannerBg from "../../assets/images/appointment.png"
import doctor from "../../assets/images/doctor.png"


const BottomBanner = () => {
    return (
        <div className="">
                <div className=" hidden lg:block absolute left-32" >
                    <img src={doctor} alt="" className=" h-[636px]"/>
                </div>
            <div className=" pt-28">
            <div className="lg:h-[524px] bg-cover lg:flex lg:justify-end lg:pr-48 py-10" style={{backgroundImage: `url(${bannerBg})`}}>
                <div className=" w-full lg:w-2/5 px-6">
                <h5 className=" text-p">Appointment</h5>
                <h3 className=" text-4xl font-semibold text-white">Make an appointment Today</h3>
                <p className=" text-base text-white mt-5 mb-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className=" text-white text-sm font-bold w-32 h-12 rounded-lg bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">
                    GET STARTED
                </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BottomBanner;