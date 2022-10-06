const Badge = ({ text, background, isActive }) => {
  const getClass = () => {
    return `rounded-lg ${background} ` + (isActive ? 'px-1 py-1 mr-1 text-sm' : 'px-0.5 py-0.5 mr-1 text-xs');
  };

  return (
    <span
      className={getClass()}>{text}
    </span>
  );
};

export default Badge;