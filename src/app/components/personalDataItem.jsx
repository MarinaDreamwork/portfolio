import TextWrapper from "./common/textWrapper";
import ContactButtonsWrapper from "./contactButtonsWrapper";

const PersonalDataItem = ({ text, style, boldText, isLinks }) => {
  return (
    <TextWrapper>
      <p className={style}>{text}<span className='font-bold'>{boldText}</span></p>
      {isLinks && <ContactButtonsWrapper />}
    </TextWrapper>
  );
}

export default PersonalDataItem;