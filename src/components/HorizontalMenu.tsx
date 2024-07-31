// DynamicMenu.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { menuConfig, MenuItem } from '../data/menuConfig';
import IconCaretDown from './Icon/IconCaretDown';

const HorizontalMenu: React.FC = () => {
    const { t } = useTranslation();

    const renderSubMenu = (subMenu: MenuItem[]) => {
        return (
            <ul className="sub-menu">
                {subMenu.map((item, index) => (
                    <li key={index} className={item.subMenu ? 'relative' : ''}>
                        {item.subMenu ? (
                            <button type="button">
                                {t(item.label)}
                                {<div className="ltr:ml-auto rtl:mr-auto rtl:rotate-90 -rotate-90">
                                    <IconCaretDown />
                                </div>}
                                <ul className="rounded absolute top-0 ltr:left-[95%] rtl:right-[95%] min-w-[180px] bg-white z-[10] text-dark dark:text-white-dark dark:bg-[#1b2e4b] shadow p-0 py-2 hidden">
                                    {renderSubMenu(item.subMenu)}
                                </ul>
                            </button>
                        ) : (
                            <NavLink to={item.path!}>{t(item.label)}</NavLink>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <ul className="flex justify-center horizontal-menu hidden py-1.5 font-semibold px-6 lg:space-x-1.5 xl:space-x-8 rtl:space-x-reverse bg-white border-t border-[#ebedf2] dark:border-[#191e3a] dark:bg-[#001f41] text-black dark:text-white-dark">
            {menuConfig.map((menuItem, index) => (
                <li key={index} className="menu nav-item relative">
                    <NavLink to={menuItem.path!}>  <button type="button" className="nav-link">
                        <div className="flex items-center">
                            {menuItem.icon && <menuItem.icon className="shrink-0" />}
                            {t(menuItem.label)}
                        </div>

                        {
                            menuItem.subMenu && <div className="ltr:ml-auto rtl:mr-auto rtl:rotate-90 -rotate-90">
                                <IconCaretDown />
                            </div>
                        }
                    </button>
                    </NavLink>
                    {menuItem.subMenu && renderSubMenu(menuItem.subMenu)}
                </li>
            ))}
        </ul>
    );
};

export default HorizontalMenu;
