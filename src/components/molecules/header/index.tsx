import { useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";

const Header = ({ username, avatar }:any) => {
  const [name, setName] = useState("CN");

  useEffect(() => {
    const fullname = username.split(" ");
    const initialFirstName = fullname[0].substring(0, 1);
    const initialSecondName = fullname[1].substring(0, 1);
    const initialName = initialFirstName + initialSecondName;
    setName(initialName);
  }, [username]);

  return (
    <div className=" flex gap-4 items-center justify-between  ">
      {/* <AvatarProfile initial={name} image={avatar} /> */}
      <div className=" flex-1">
        <label className=" allTab:text-xl">{username}</label>
        <p className=" text-xs allTab:text-base text-neutral-400">
          Let’s Buy your Ticket movie
        </p>
      </div>
      <div>
        <div className=" p-2.5 rounded bg-primary-light cursor-pointer">
          <FiShoppingBag size={24} />
        </div>
      </div>
    </div>
  );
};
export default Header;
