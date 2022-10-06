const ButtonContainer = ({ children }) => {
  return (
    <div className='flex justify-around p-2'>
      {children}
    </div>
  );
};

export default ButtonContainer;