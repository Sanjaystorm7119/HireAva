import { assets } from "../assets/assets";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-3 py-3 mt-20">
      <img width={80} src={assets.ava_icon} alt="" />
      <p className="flex-1 border-l pl-2">
        Copyright @HireAva |All rights reverved
      </p>
      <div className="flex gap-1">
        <img src={assets.facebook_icon} alt="" />
        <FaLinkedin size={36} color="#0077B5" />

        <img src={assets} alt="" />
      </div>
    </div>
  );
};

export default Footer;
