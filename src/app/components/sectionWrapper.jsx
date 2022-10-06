const SectionWrapper = ({ children, background, titleText }) => {
  const getClass = () => {
    return `flex flex-col py-5 ${background}`;
  };

  return (
    <section className={getClass()}>
      <h2 className='p-10 text-3xl font-bold text-center animate-appearence'>{titleText}</h2>
      {children}
    </section>
  );
};

export default SectionWrapper;