import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const ContactUs = () => {

    return (
        <div style={{background: `url(${appointment})`}} className='text-center px-5 py-20 mt-20'>
            <h4 className='text-lg font-bold text-primary'>Contact Us</h4>
            <h1 className="text-white text-4xl font-bold">Stay connected with us</h1>
            <form className='lg:w-1/3 mx-auto mt-8'> 
                <input name='email' type="email" placeholder="Email Address" className="input mb-5 input-bordered w-full" />
                <input name='subject' type="text" placeholder="Subject" className="input mb-5 input-bordered w-full" />
                <textarea name='message' className="textarea h-32 textarea-bordered w-full" placeholder="Your message"></textarea>
                <input className='mt-8 btn btn-primary bg-gradient-to-r from-primary to-secondary text-white' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ContactUs;