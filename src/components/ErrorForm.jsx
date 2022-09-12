export const ErrorForm = ({ message }) => {
   return (
      <span className='text-xs text-red-700' id='passwordHelp'>
         {message}
      </span>
   );
};
