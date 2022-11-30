import React from 'react';
import treatment from '../../../../assets/images/treatment.png';
import Primarybtn from '../../../../components/PrimaryBtn/Primarybtn';

const ExceptionalCare = () => {

    return (
        <div className="hero lg:p-32 mt-6 bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <img src={treatment} className=" lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div className='pl-8'>
                <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Primarybtn>Get Started</Primarybtn>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;