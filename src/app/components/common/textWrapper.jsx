const TextWrapper = ({ children }) => {
  return (
    <div className='flex flex-col m-3 p-2 bg-[#F5F5F5] rounded-lg border'>
      {children}
    </div>
  );
};

export default TextWrapper;