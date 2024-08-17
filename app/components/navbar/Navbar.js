import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <div className="text-xl font-semibold">
          Antu's <span className="text-xs block -mt-2">Chemistry Care</span>
        </div>
      </div>
      <div>
        <ul className="flex items-center gap-12 font-medium">
          <li className="hover:text-emerald-500 cursor-pointer">About</li>
          <li className="hover:text-emerald-500 cursor-pointer">Classes</li>
          <li className="hover:text-emerald-500 cursor-pointer">Contact us</li>
        </ul>
      </div>
      <div className="flex items-center gap-5 text-lg">
        <TiSocialFacebook className="hover:text-emerald-500 cursor-pointer"/>
        <TiSocialTwitter className="hover:text-emerald-500 cursor-pointer"/>
        <AiFillYoutube className="hover:text-emerald-500 cursor-pointer"/>
      </div>
    </div>
  );
};

export default Navbar;
