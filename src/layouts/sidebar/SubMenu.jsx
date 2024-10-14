import { motion } from "framer-motion";
import { useState } from "react";
import { PiArrowCircleDownBold } from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({data}) => {
    const { pathname } = useLocation();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
        <li className={`link ${pathname.includes(data.name) && 'text-green-600'}`}
            onClick={() => setSubMenuOpen(!subMenuOpen)}
        >

            {/* dynamic icons */}
            <data.icon size={23} className='min-w-max' />
            <p className="capitalize flex-1">{data.name}</p>
            <PiArrowCircleDownBold 
                size={23}
                 className={`${subMenuOpen && "rotate-180"} text-green-600 duration-200`} />
        </li>

        <motion.ul
            animate={
                subMenuOpen ? { height: 'fit-content', } :
                 { height: 3,
                 }
            }
            className="flex flex-col pl-14 text-[0.8rem] font-normal overflow-hidden h-0">

            {
                data.menus.map((menu) => (
                    <li key={menu}>
                        {/* build the link */}
                        <NavLink to={`/${data.name}/${menu}`}
                            className="link !bg-transparent capitalize"
                        >
                            {menu}
                        </NavLink>
                    </li>
                ))}
        </motion.ul>
    </>
  )
}

export default SubMenu;