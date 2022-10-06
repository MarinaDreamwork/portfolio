import PersonalData from "./personalData";
import PersonalPhoto from "./personalPhoto";

const ContactContainer = () => {

  return (
    <div className='flex align-middle justify-center'>
      <PersonalData />
      <PersonalPhoto />
    </div>
  );
};

export default ContactContainer;