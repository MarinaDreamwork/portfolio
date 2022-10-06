import MyPhoto from '../assets/4C6A6379.jpg';

const PersonalPhoto = () => {
  return (
    <div className='flex self-center justify-center drop-shadow-[0px_20px_13px_rgba(36,17,12,1)]' style={{ width: '540px', height: '560px' }}>
      <img src={MyPhoto} className='rounded-lg'>
      </img>
    </div>);
};

export default PersonalPhoto;