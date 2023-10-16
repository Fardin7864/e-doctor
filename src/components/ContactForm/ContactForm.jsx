import  bannerbg from '../../assets/images/appointment.png'

const ContactForm = () => {
    return (
        <div>
            <div className='' style={{backgroundImage: `url(${bannerbg})`}}>
                <div className='text-center py-10'>
                    <h5 className=' text-p'>Contact Us</h5>
                    <h3 className=' text-4xl text-white'>Stay connected with us</h3>
                </div>
                <form className=' flex flex-col items-center gap-7 justify-center pb-20'>
                    <div className=' w-full px-6 md:px-0 md:w-[450px]'>
                        <input 
                        type="email" 
                        name="email" 
                        id="" 
                        placeholder='Email Address'
                        className=' w-full py-2 text-xl pl-4 rounded-lg'
                        />
                    </div>
                    <div className=' w-full px-6 md:px-0 md:w-[450px]'>
                        <input 
                        type="text" 
                        name="subject" 
                        id="" 
                        placeholder='Subject'
                        className=' w-full py-2 text-xl pl-4 rounded-lg'
                        />
                    </div>
                    <div className=' w-full px-6 md:px-0 md:w-[450px]'>
                        <textarea 
                        type="text" 
                        name="message" 
                        id="" 
                        placeholder='Message'
                        className=' w-full py-2 text-xl pl-4 rounded-lg'
                        />
                    </div>
                    <button type='submit' className=" text-white text-sm font-bold w-32 h-12 rounded-lg bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;