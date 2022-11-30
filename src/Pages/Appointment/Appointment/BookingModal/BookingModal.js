
import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider';

const BookingModal = ({treatment, selectedDate, setTreatment, refetch }) => {
    const {name: treatementName, slots, price } = treatment; // treatment is appointment options just different name
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking ={
            appointmentDate: date,
            treatment: treatementName,
            patient: name,
            slot,
            email,
            phone,
            price,
        }
        //TODO: send data to the server 
        // And once data is saved then close the modal
        //and display success toast 
        console.log(booking);

        fetch('https://dental-care-server-lime.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // when the state null then the modal will be close
            if (data.acknowledged) {
                setTreatment(null);
                toast.success('Booking confirmed')
                refetch();
            }
            else{
                toast.error(data.message);
            }
        })

        
       
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatementName}</h3>

                    <form onSubmit={handleBooking} className=' grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full" required  disabled/>
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email Address" className="input input-bordered w-full " readOnly disabled />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " required/>
                        <br />
                        <input className='w-full btn btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div> 
        </>
    );
};

export default BookingModal;