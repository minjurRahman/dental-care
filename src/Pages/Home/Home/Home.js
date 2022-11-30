import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import InfoCards from '../InfoCards/InfoCards';
import Testimonial from '../Testimonial/Testimonial';
import ExceptionalCare from './ExceptionalCare/ExceptionalCare';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalCare></ExceptionalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;