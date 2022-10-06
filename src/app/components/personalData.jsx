import { personalDataInfo } from "../db/data";
import PersonalDataItem from "./personalDataItem";

const PersonalData = () => {
  return (
    <div className='bg-white rounded-lg m-20 drop-shadow-2xl text-slate-600' style={{ width: '540px', height: '560px' }}>
      {
        personalDataInfo.map(item => <PersonalDataItem key={item.id} {...item} />)
      }
    </div>
  );
}

export default PersonalData;