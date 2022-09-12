import { Patient } from './Patient';
import { useSelector } from 'react-redux';

export const PatientList = () => {
   /* Using useSelector I can call by the name I gave in my store to the reducer to get the data */

   const { patients } = useSelector((state) => state.user);
   console.log(patients);

   return (
      <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
         <h2 className='font-black text-3xl text-center'>Patient List</h2>
         <p className='text-xl mt-5 text-center mb-10'>
            Manage yours {''}
            <span className='text-indigo-600 font-bold'>Patients and Appointments</span>
         </p>
         {patients.map((patient) => (
            <Patient patient={patient} key={patient.petName} />
         ))}
      </div>
   );
};
