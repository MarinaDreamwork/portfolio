import { useState } from "react";

const TextAreaField = ({ label, value, onChange, name }) => {
  const [isFocus, setFocus] = useState(false);
  const getClass = () => {
    return 'flex flex-col m-3 p-2 bg-[#F5F5F5] rounded-lg border ' + (isFocus ? ' border-[#ACACAC] border-4' : 'border-[#F5F5F5] border-4');
  };
  return (
    <div className={getClass()}>
      <label className='text-[#ACACAC]'>{label}</label>
      <textarea rows='10' onChange={onChange} name={name} value={value} className='bg-[#F5F5F5] rounded-lg outline-none font-bold resize-none' onFocus={() => {
        setFocus(true);
      }} onBlur={() => {
        setFocus(false);
      }}></textarea>
    </div>
  );
};

export default TextAreaField;