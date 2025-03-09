import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="naveencrazy555@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 7708043911" Image={FiPhone} />
      <SingleInfo text="Sivaganga,tamilnadu,india,630204" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
