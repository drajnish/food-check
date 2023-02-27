import React from 'react';
import { Link } from 'react-router-dom';

const MenuWidgets = ({ widgets }) => {
  console.log(widgets);
  return (
    <div className="w-3/12">
      <div className="flex mb-4 z-[-1] sticky top-72 after:content-[''] after:absolute after:w-[1px] after:ml-[95%] after:h-full after:bg-slate-400">
        <ul>
          {widgets.map((item, index) => {
            return (
              <li key={index} className="font-light">
                <Link to={`#${item?.name}`} className="flex items-center px-5">
                  <span>{item?.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuWidgets;
