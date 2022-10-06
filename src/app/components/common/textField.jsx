import { useState } from "react";

const TextField = ({ label, value, name, onChange }) => {
  const [isFocus, setFocus] = useState(false);
  const getClass = () => {
    return 'flex flex-col m-3 p-2 bg-[#F5F5F5] rounded-lg border ' + (isFocus ? ' border-[#ACACAC] border-4' : 'border-[#F5F5F5] border-4');
  };

  return (
    <div className={getClass()}>
      <label className='text-[#ACACAC]'>{label}</label>
      <input value={value} name={name} className='bg-[#F5F5F5] rounded-lg outline-none font-bold' onChange={onChange} onFocus={(e) => {
        setFocus(true);
      }} onBlur={(e) => {
        setFocus(false);
      }} />
    </div >
  );
};

export default TextField;