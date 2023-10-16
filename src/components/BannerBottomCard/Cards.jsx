import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'


const Cards = () => {
    return (
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-6">
            <div className=' flex gap-5 py-12 px-6 items-center bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] rounded-xl'>
                <div>
                    <img src={clock} alt="" />
                </div>
                <div>
                <h3 className=' text-white text-xl font-bold'>Opening Hours</h3>
                <p className=' text-white text-base mt-4'>Our openig time is 24/7, Any time We are active.</p>
                </div>
            </div>
            <div className=' flex gap-5 py-12 px-6 items-center bg-gradient-to-r from-gray-800 to-gray-950 rounded-xl'>
                <div>
                    <img src={location} alt="" />
                </div>
                <div>
                <h3 className=' text-white text-xl font-bold'>Visite Our Location</h3>
                <p className=' text-white text-base mt-4'>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className=' flex gap-5 py-12 px-6 items-center bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] rounded-xl'>
                <div>
                    <img src={phone} alt="" />
                </div>
                <div>
                <h3 className=' text-white text-xl font-bold'>Contuct Us</h3>
                <p className=' text-white text-base mt-4'>+000 123 456789</p>
                </div>
            </div>            
        </div>
    );
};

export default Cards;