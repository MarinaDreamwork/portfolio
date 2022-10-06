const Button = ({ text, background, isActive, href }) => {
  const renderClass = () => {
    return `text-white rounded-lg ${background} ` + (isActive ? 'text-xl px-7 p-2' : 'px-1 p-1');
  }
  return (
    <button className={renderClass()} disabled={isActive && text === 'in development mode' ? true : false}>
      <a target='_blank' href={href} rel='noreferrer'>{text}</a>
    </button>
  );
};

export default Button;