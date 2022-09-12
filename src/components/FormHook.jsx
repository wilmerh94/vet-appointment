import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import * as yup from 'yup';
import { addToDataBase, editPatient } from '../store/userSlice';
import { ErrorForm } from './ErrorForm';

const schema = yup
   .object({
      petName: yup.string().required(),
      ownerName: yup.string().required(),
      email: yup.string().email().required(),
      dateOut: yup.string().required(),
      feeling: yup.string().required(),
   })
   .required();
export const FormHook = () => {
   /* Creating just one UseState with the default values */
   const {
      register,
      handleSubmit,
      setValue,
      reset,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
   });

   const dispatch = useDispatch((state) => state.userData);
   const { onEdit, patient } = useSelector((state) => state.user);
   useEffect(() => {
      if (patient) {
         setValue('petName', patient.petName);
         setValue('ownerName', patient.ownerName);
         setValue('email', patient.email);
         setValue('dateOut', patient.dateOut);
         setValue('feeling', patient.feeling);
         setValue('id', patient.id);
      }
   }, [patient]);

   /* Creating the handle functions  */

   const onSubmit = (data) => {
      const { petName, ownerName, email, dateOut, feeling, id } = data;
      const patient = { petName, ownerName, email, dateOut, feeling };

      if (onEdit) {
         const patientCopy = { ...patient, id };

         dispatch(editPatient(patientCopy));
      } else {
         dispatch(addToDataBase(patient));
      }

      reset();
   };
   return (
      <div className='md:w-1/2 lg:w-3/5 mx-5'>
         <h2 className='font-black text-3xl text-center'>Patient Follow-up</h2>
         <p className='text-xl mt-5 text-center mb-10'>
            Add Patient and {''} <span className='text-indigo-600 font-bold'>Manage</span>
         </p>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 text-start'>
            <div className='mb-5'>
               <label
                  htmlFor='petName'
                  className='block text-gray-700 uppercase font-bold'>
                  Pet Name:
               </label>
               <input
                  {...register('petName')}
                  className={`border w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-1 ${
                     errors.petName
                        ? ' placeholder-red-400 border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500'
                        : 'placeholder-gray-400 focus:outline-none focus:border-sky-500  focus:ring-sky-500'
                  } `}
                  // className='border w-full p-2 mt-2 placeholder-gray-400 rounded-lg focus:shadow-outline'
                  type='text'
                  placeholder='Pet Name'
               />
               <ErrorForm message={errors.petName?.message} />

               {/* {error.firstName && <ErrorForm message={error.firstName} />}
               errors.firstName?.message */}
            </div>
            <div className='mb-5'>
               <label
                  htmlFor='ownerName'
                  className='block text-gray-700 uppercase font-bold'>
                  Owner Name:
               </label>
               <input
                  {...register('ownerName')}
                  className={`border w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-1 ${
                     errors.ownerName
                        ? ' placeholder-red-400 border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500'
                        : 'placeholder-gray-400 focus:outline-none focus:border-sky-500  focus:ring-sky-500'
                  } `}
                  type='text'
                  placeholder='Owner Name'
               />
               <ErrorForm message={errors.ownerName?.message} />
            </div>
            <div className='mb-5'>
               <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
                  Email:
               </label>
               <input
                  {...register('email')}
                  className={`border w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-1 ${
                     errors.email
                        ? ' placeholder-red-400 border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500'
                        : 'placeholder-gray-400 focus:outline-none focus:border-sky-500  focus:ring-sky-500'
                  } `}
                  type='text'
               />
               <ErrorForm message={errors.email?.message} />
            </div>
            <div className='mb-5'>
               <label
                  htmlFor='dateOut'
                  className='block text-gray-700 uppercase font-bold'>
                  Out:
               </label>
               <input
                  {...register('dateOut')}
                  className={`border w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-1 ${
                     errors.dateOut
                        ? ' placeholder-red-400 border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500'
                        : 'placeholder-gray-400 focus:outline-none focus:border-sky-500  focus:ring-sky-500'
                  } `}
                  type='date'
               />
               <ErrorForm message={errors.dateOut?.message} />
            </div>
            <div className='mb-5'>
               <label
                  htmlFor='feeling'
                  className='block text-gray-700 uppercase font-bold'>
                  Feeling:
               </label>
               <textarea
                  {...register('feeling')}
                  className={`border w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-1 ${
                     errors.ownerName
                        ? ' placeholder-red-400 border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500'
                        : 'placeholder-gray-400 focus:outline-none focus:border-sky-500  focus:ring-sky-500'
                  } `}
                  placeholder='Feeling'
               />
               <ErrorForm message={errors.feeling?.message} />
            </div>
            <input
               type='submit'
               className='bg-indigo-600 font-bold w-full p-3 rounded-md text-white uppercase hover:bg-indigo-700 cursor-pointer transition-colors'
               value={onEdit ? 'Edit Patient' : 'Add Patient'}
            />
         </form>
      </div>
   );
};
