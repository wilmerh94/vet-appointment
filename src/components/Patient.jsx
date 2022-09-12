export const Patient = ({ patient }) => {
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
      </div>
   );
};
