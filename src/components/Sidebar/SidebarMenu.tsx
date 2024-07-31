import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AnimateHeight from 'react-animate-height';
import { useTranslation } from 'react-i18next';
import { menuConfig } from '../../data/menuConfig';
import IconCaretDown from '../Icon/IconCaretDown';

const SidebarMenu: React.FC = () => {
    const { t } = useTranslation();
    const [currentMenu, setCurrentMenu] = useState<string | null>(null);

    const toggleMenu = (menu: string) => {
        setCurrentMenu(currentMenu === menu ? null : menu);
    };

    return (
        <ul className="relative font-semibold space-y-0.5 p-4 py-0">
            {menuConfig.map((menu, index) => (
                <li key={index} className="menu nav-item">
                    {menu.subMenu ? (
                        <button
                            type="button"
                            className={`${currentMenu === menu.label ? 'active' : ''} nav-link group w-full`}
                            onClick={() => toggleMenu(menu.label)}
                        >
                            <div className="flex items-center">
                                { menu.icon && <menu.icon className="group-hover:!text-primary shrink-0" />}
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                    {t(menu.label)}
                                </span>
                            </div>
                            <div className={currentMenu !== menu.label ? 'rtl:rotate-90 -rotate-90' : ''}>
                                <IconCaretDown />
                            </div>
                        </button>
                    ) : (
                        <NavLink to={menu.path!} className="group">
                            <div className="flex items-center">
                                { menu.icon && <menu.icon className="group-hover:!text-primary shrink-0" />}
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                    {t(menu.label)}
                                </span>
                            </div>
                        </NavLink>
                    )}
                    {menu.subMenu && (
                        <AnimateHeight duration={300} height={currentMenu === menu.label ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                {menu.subMenu.map((subMenu, subIndex) => (
                                    <li key={subIndex}>
                                        <NavLink to={subMenu.path!}>{t(subMenu.label)}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </AnimateHeight>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default SidebarMenu;
