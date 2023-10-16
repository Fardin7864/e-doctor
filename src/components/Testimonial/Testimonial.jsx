import testimonital from "../../assets/icons/quote.svg";
import person from '../../assets/images/people1.png'
import person1 from '../../assets/images/people2.png'
import person2 from '../../assets/images/people3.png'

const Testimonial = () => {
  return (
    <div className=" mt-20">
      <div className=" px-20 flex flex-col md:flex-row justify-between items-center h-20">
        <div className=" mb-16 text-center">
          <h5 className=" text-p">OUT SERVICES</h5>
          <h3 className=" title-text text-4xl mt-2">Services We Provide</h3>
        </div>
        <div className="">
          <img src={testimonital} alt="" className="h-28"/>
        </div>
      </div>
      <div className=" grid lg:grid-cols-3 grid-cols-1 gap-6 py-10 px-5">
            <div className=' flex flex-col gap-5 py-5 px-6 items-center rounded-xl shadow-xl'>
                <p className=' text-black text-base mt-4'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className=" w-full flex justify-start gap-8 items-center">
                    <img src={person} alt="" className=" w-16 h-16 rounded-full border-4 border-[#19D3AE]"/>
                    <div className="">
                    <h5 className=" title-text text-xl font-semibold">Winson Herry</h5>
                    <p className=" text-black text-base">California</p>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col gap-5 py-5 px-6 items-center rounded-xl shadow-xl'>
                <p className=' text-black text-base mt-4'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className=" w-full flex justify-start gap-8 items-center">
                    <img src={person} alt="" className=" w-16 h-16 rounded-full border-4 border-[#19D3AE]"/>
                    <div className="">
                    <h5 className=" title-text text-xl font-semibold">Winson Herry</h5>
                    <p className=" text-black text-base">California</p>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col gap-5 py-5 px-6 items-center rounded-xl shadow-xl'>
                <p className=' text-black text-base mt-4'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className=" w-full flex justify-start gap-8 items-center">
                    <img src={person} alt="" className=" w-16 h-16 rounded-full border-4 border-[#19D3AE]"/>
                    <div className="">
                    <h5 className=" title-text text-xl font-semibold">Winson Herry</h5>
                    <p className=" text-black text-base">California</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default Testimonial;
