import Banner from '../../components/Homebanner/Banner';
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from 'react-router-dom';

const Appointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [categorys, setCategorys] = useState([]);
    const [toDisplay, setToDisplay] = useState();
    
    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };
    
    const datepick = (
        <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
        />
    );
    const subcategorys = useLoaderData();

     // Format the startDate to display only month and date
     const formattedStartDate = startDate.toLocaleString('default', { month: 'short', day: 'numeric' });
    
     useEffect(() => { 
        fetch('/category.json')
        .then(res => res.json())
        .then(data => setCategorys(data))
      },[])
    
    const handleCategory= (cat) => { 
        const displayCategory = subcategorys.filter(category => category.category == cat);
        setToDisplay(displayCategory);
     }
    
    return (
        <div>
            <Banner datepick={datepick} />
            <div>
                <div className=' text-center'>
                <h3 className='text-p'>Available Services on {formattedStartDate}</h3>
                <p className=' text-[#939393] text-[22px]'>Please select a service.</p>
                </div>
                <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6 px-8 mt-10'>
                    {
                        categorys.map(category => 
                            <div onClick={() => handleCategory(category.category)} key={category.id} className=' btn rounded-lg shadow-xl py-14 flex justify-center items-center'>
                                <h3 className=' text-p'>{category.category}</h3>
                            </div>)
                    }
                </div>
                <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6 px-8 mt-10'>
                    {
                        toDisplay.map(category =>
                            <div key={category.id} className='rounded-lg shadow-xl py-14 flex flex-col justify-center items-center'>
                                <h3 className=' text-p'>{category.subcategory}</h3>
                                <p className=' py-4'>{category.time}</p>
                                <button className=" text-white text-sm font-bold px-3 h-12 rounded-lg bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">
                                    BOOK APPOINTMENT
                                </button>
                            </div> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Appointment;
