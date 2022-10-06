import { socialLinksData } from '../db/data';
import SocialLink from "./socialLink";

const ContactButtonsWrapper = () => {
  return (
    <div className='flex flex-col justify-around mt-5'>
      <div className='flex justify-center pt-2'>
        {socialLinksData.map(link => <SocialLink key={link.id} href={link.href} src={link.src} />)}
      </div>
    </div>
  );
};

export default ContactButtonsWrapper;