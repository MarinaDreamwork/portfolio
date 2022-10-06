const Button = ({ text, background, isActive, href }) => {
  const renderClass = () => {
    return `text-white rounded-lg ${background} ` + (isActive ? 'text-xl px-7 p-2 ' : 'px-1 p-1 ') + (text === 'in development mode' && 'pointer-events-none cursor-not-allowed opacity-50');
  }
  return (
    <button className={renderClass()}>
      <a target='_blank' href={href} rel='noreferrer' className={text === 'in development mode' && 'pointer-events-none cursor-not-allowed'}>{text}</a>
    </button>
  );
};

export default Button;