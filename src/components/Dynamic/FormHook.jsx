export const FormHook = ({ type, htmlName, fieldName }) => {
   return (
      <div className='mb-5'>
         <label htmlFor={htmlName} className='block text-gray-700 uppercase font-bold'>
            {fieldName}:
         </label>
         <input
            {...register(`${type}`)}
            className={`border w-full p-2 mt-2 rounded-lg focus:outline-none focus:ring-1 ${
               `errors.${type}`
                  ? ' placeholder-red-400 border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500'
                  : 'placeholder-gray-400 focus:outline-none focus:border-sky-500  focus:ring-sky-500'
            } `}
            type={type}
         />
         <ErrorForm message={`errors.${type}?.message`} />
      </div>
   );
};
