import { useDispatch } from 'react-redux';
import { onEditChange, removeFromDataBase } from '../store/userSlice';

export const Patient = ({ patient }) => {
   const dispatch = useDispatch((state) => state.userData);
   const handleEdit = () => {
      dispatch(onEditChange(patient));
   };
   const handleRemove = () => {
      console.log(patient);
      dispatch(removeFromDataBase(patient));
   };
   return (
      <div className=' bg-white shadow-md mx-5 my-4 px-5 py-10 rounded-xl text-start'>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Name: {''} <span className='normal-case font-normal'>{patient.petName}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Owner Name: {''}{' '}
            <span className='normal-case font-normal'>{patient.ownerName}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: {''} <span className='normal-case font-normal'>{patient.email}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Out: {''} <span className='normal-case font-normal'>{patient.dateOut}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Feeling: {''}
            <span className='normal-case font-normal'>{patient.feeling} </span>
         </p>
         <div className='mt-10 flex justify-between'>
            <button
               onClick={(patient) => handleEdit(patient)}
               className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font bold uppercase rounded-lg'>
               Edit
            </button>
            <button
               onClick={(patient) => handleRemove(patient)}
               className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font bold uppercase rounded-lg'>
               Remove
            </button>
         </div>
      </div>
   );
};
