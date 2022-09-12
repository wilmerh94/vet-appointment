import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDataBase } from '../store/userSlice';

export const Form = () => {
   /* Creating just one UseState with the default values */
   const [patient, setPatient] = useState({
      petName: '',
      ownerName: '',
      email: '',
      dateOut: '',
      feeling: '',
   });

   const dispatch = useDispatch((state) => state.userData);

   const { petName, ownerName, email, dateOut, feeling } = patient;

   /* Creating the handle functions  */
   const handleChange = (e) => {
      e.preventDefault();
      /* Using setPatient I can change the values of the Default Values, then
      using the spread operator I giving the names of the Default and then with the id
      Im changing the values of them */
      setPatient((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addToDataBase(patient));
      console.log(patient);
   };
   return (
      <div className='md:w-1/2 lg:w-3/5 mx-5'>
         <h2 className='font-black text-3xl text-center'>Patient Follow-up</h2>
         <p className='text-xl mt-5 text-center mb-10'>
            Add Patient and {''} <span className='text-indigo-600 font-bold'>Manage</span>
         </p>
         <form
            onSubmit={handleSubmit}
            className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 text-start'>
            <div className='mb-5'>
               <label
                  htmlFor='petName'
                  className='block text-gray-700 uppercase font-bold'>
                  Pet Name:
               </label>
               <input
                  id='petName'
                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-lg focus:shadow-outline'
                  type='text'
                  placeholder='Pet Name'
                  value={petName}
                  onChange={handleChange}
               />
            </div>
            <div className='mb-5'>
               <label
                  htmlFor='ownerName'
                  className='block text-gray-700 uppercase font-bold'>
                  Owner Name:
               </label>
               <input
                  id='ownerName'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  type='text'
                  placeholder='Owner Name'
                  value={ownerName}
                  onChange={handleChange}
               />
            </div>
            <div className='mb-5'>
               <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
                  Email:
               </label>
               <input
                  id='email'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  type='text'
                  placeholder='Email'
                  value={email}
                  onChange={handleChange}
               />
            </div>
            <div className='mb-5'>
               <label
                  htmlFor='dateOut'
                  className='block text-gray-700 uppercase font-bold'>
                  Out:
               </label>
               <input
                  id='dateOut'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  type='date'
                  value={dateOut}
                  onChange={handleChange}
               />
            </div>
            <div className='mb-5'>
               <label
                  htmlFor='feeling'
                  className='block text-gray-700 uppercase font-bold'>
                  Feeling:
               </label>
               <textarea
                  id='feeling'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  placeholder='Feeling'
                  value={feeling}
                  onChange={handleChange}
               />
            </div>
            <input
               type='submit'
               className='bg-indigo-600 font-bold w-full p-3 rounded-md text-white uppercase hover:bg-indigo-700 cursor-pointer transition-colors'
            />
         </form>
      </div>
   );
};
