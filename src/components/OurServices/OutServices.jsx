import caviti from '../../assets/images/cavity.png'
import flouride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import tritment from '../../assets/images/treatment.png'


const OutServices = () => {
    return (
        <div className=' py-10 flex flex-col items-center mt-10'>
            <div className=" mb-16 text-center">
            <h5 className=" text-p">OUT SERVICES</h5>
            <h3 className=" title-text text-4xl mt-2">Services We Provide</h3>
            </div>
            <div className=" grid lg:grid-cols-3 grid-cols-1 gap-6 px-5">
                <div className=' flex flex-col items-center justify-center rounded-lg py-10 px-10 shadow-lg'>
                <div>
                    <img src={flouride} alt="" />
                </div>
                <div className=" text-center">
                    <h3 className=" title-text text-xl font-semibold">Flouride Treatment</h3>
                    <p className=" text-black text-base mt-2">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
                </div>
                <div className=' flex flex-col items-center justify-center rounded-lg py-10 px-10 shadow-lg'>
                <div>
                    <img src={whitening} alt="" />
                </div>
                <div className=" text-center">
                    <h3 className=" title-text text-xl font-semibold">Flouride Treatment</h3>
                    <p className=" text-black text-base mt-2">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
                </div>
                <div className=' flex flex-col items-center justify-center rounded-lg py-10 px-10 shadow-lg'>
                <div>
                    <img src={caviti} alt="" />
                </div>
                <div className=" text-center">
                    <h3 className=" title-text text-xl font-semibold">Flouride Treatment</h3>
                    <p className=" text-black text-base mt-2">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
                </div>
            </div>
            <div className=' flex md:flex-row flex-col gap-32  px-5 justify-center items-center mt-36'>
                <div className=' w-full lg:w-1/4'>
                    <img src={tritment} alt="" className=' rounded-lg'/>
                </div>
                <div className='w-full lg:w-2/5'>
                    <h3 className=' tittle-text text-5xl font-bold'>Exceptional Dental Care, on Your Terms</h3>
                    <p className=' text-black text-base mt-6 mb-12'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className=" text-white text-sm font-bold w-32 h-12 rounded-lg bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">
                        GET STARTED
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OutServices;