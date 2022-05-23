import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => {
  const links = [
    { url: '/search', text: 'All' },
    { url: '/image', text: 'Images' },
    { url: '/news', text: 'News' },
    { url: '/videos', text: 'Videos' },
  ];
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4'>
      {links.map(({ url, text }, index) => (
        <NavLink
          key={index}
          to={url}
          className='p-3'
          activeClassName='text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 '>
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
