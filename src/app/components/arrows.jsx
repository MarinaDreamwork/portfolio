const Arrows = ({ onChoose, activePage }) => {
  return (
    <div className='py-10 flex justify-center'>
      <button disabled={activePage === 1 ? true : false} onClick={(e) => onChoose(e)} data-direction='left'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={'w-16 h-16 m-3 ' + (activePage === 1 ? 'fill-stone-400' : 'fill-orange-500')} >
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
        </svg>
      </button>
      <button disabled={activePage === 5 ? true : false} onClick={(e) => onChoose(e)} data-direction='right'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={'w-16 h-16 m-3 ' + (activePage === 5 ? 'fill-stone-400' : 'fill-orange-500')} >
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
        </svg>
      </button>
    </div >
  );
};

export default Arrows;