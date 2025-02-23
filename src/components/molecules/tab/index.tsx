import { useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HiHome, HiOfficeBuilding, HiTicket, HiUser } from "react-icons/hi";

const Tab = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuActive, setMenuActive] = useState(pathname);

  const menuAll = [
    {
      icon: <HiHome size={20} />,
      name: "Home",
      url: "/home",
    },
    {
      icon: <HiOfficeBuilding size={20} />,
      name: "Cinema",
      url: "/cinema",
    },
    {
      icon: <HiTicket size={20} />,
      name: "Ticket",
      url: "/ticket",
    },
    {
      icon: <HiUser size={20} />,
      name: "Profile",
      url: "/profile",
    },
  ];
  useEffect(() => {
    if (pathname.includes("/movie")) {
      setMenuActive('/home');
    }
  }, [pathname]);

  return (
    <div className="bg-primary-light w-full lg:max-w-sm allDekstop:max-w-sm fixed mx-auto bottom-0 p-2 shadow-[0px_-10px_35px_-25px] shadow-black">
      <ul className="w-full flex gap-4 justify-center allTab:text-xl">
        {menuAll.map((menu, idx) => {
          const isActive = menuActive === menu.url;
          const activeClass =
            "transition transform delay-75 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-black bg-primary-dark p-2 px-5 rounded-full text-blue-700 font-bold";
          return (
            <li
              key={idx}
              className={`flex items-center gap-2 cursor-pointer justify-center rounded-full hover:bg-primary-dark/35 ${isActive ? activeClass : "w-16"
                }`}
              onClick={() => {
                navigate({ to: menu.url });
              }}
            >
              <div>{menu.icon}</div>
              <p className={`${!isActive && "hidden"}`}>{menu.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Tab;
